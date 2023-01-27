import React, {useEffect, useState} from 'react'
import { usePubNub } from 'pubnub-react';

export default function PlayerSub(props) {
  const [response, setResponse] = useState("Attempt 0, You are team: \n Australia!")
  const pubnub = usePubNub();
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
  }, [props.channel, props.id, pubnub])
  return (
    <h1>
      {props.name} <p/>
      {response}
    </h1>
  )
}
