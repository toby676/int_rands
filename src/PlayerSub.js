import React, { useEffect, useState } from 'react'
import PubNub from 'pubnub'
export default function PlayerSub(props){
    const [response, setResponse] = useState("Attempt 0, You are team: \n Australia!")
    var pubnub = new PubNub({
        subscribeKey: process.env.REACT_APP_SUB_KEY,
    })
    useEffect(() => {
        pubnub.addListener({
            status: function(statusEvent) {
                if (statusEvent.category === "PNConnectedCategory") {
                }
            },
            message: function(msg) {
                setResponse(msg.message.text)
            }
        })
        pubnub.subscribe({
            channels: [props.channel + props.id]
        });
    })
    return(
        <h1>
            {props.name} <p/>
            {response}
        </h1>
    )
}
