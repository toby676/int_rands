import React, {useEffect, useState} from 'react'
import PubNub from 'pubnub'

export default function PlayerSub(props) {
  const [response, setResponse] = useState("Click Select a match below!")
  useEffect(() => {
    const pubnub = new PubNub({
      subscribeKey: process.env.REACT_APP_SUB_KEY,
    })
    const listener = {
      status: function (statusEvent) {
        if (statusEvent.category === "PNConnectedCategory") {
        }
      },
      message: function (msg) {
        setResponse(msg.message.text)
      }
    }
    pubnub.addListener(listener)
    pubnub.subscribe({
      channels: [props.channel + props.id]
    });
    return () => {
      pubnub.removeListener(listener)
      pubnub.unsubscribeAll()
    }
  }, [props.channel, props.id])
  return (
    <h1>
      {response}
    </h1>
  )
}
