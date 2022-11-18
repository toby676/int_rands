import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import PubNub from 'pubnub'
export default function PlayerPub(props){
    const [match, setMatch] = useState('Decide who is home or away before selecting a match below')
    var pubnub = new PubNub({
        publishKey: process.env.REACT_APP_PUB_KEY,
        subscribeKey: process.env.REACT_APP_SUB_KEY
    })
    useEffect(() => {
        var publishConfig = {
            channel : props.channel + props.id,
            message: {
                text: `${match}!`,
            }
        }
        pubnub.publish(publishConfig, function(status, response) {
        })
    })
    return(
        <div>
        <Button variant="primary" onClick={() => {
          let groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
          let game_number = Math.floor(Math.random() * (2 - 1 + 1) + 1).toString()
          let match_number = Math.floor(Math.random() * (3 - 1 + 1) + 1).toString()
          let group = groups[Math.floor(Math.random() * groups.length)]

          setMatch(`Match: ${match_number}, Group: ${group}, Game number: ${game_number}`)
        }}>
            Select a match!
        </Button>
        <Button variant='secondary'onClick={() => {
            setMatch('Decide who is home or away before selecting a match below')
        }}>
            Reset!
        </Button>
        </div>
    )
}
