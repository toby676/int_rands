import React, {useEffect, useState} from 'react'
import PubNub from 'pubnub'

export default function PlayerSub(props) {
  const [response, setResponse] = useState("Attempt 0, You are team: \n Australia!")
  var pubnub = new PubNub({
    subscribeKey: process.env.REACT_APP_SUB_KEY,
  })
  useEffect(() => {
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
  }, [])
  return (
    <h1>
      {props.name} <p/>
      {response}
    </h1>
  )
}
