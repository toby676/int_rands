import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import PubNub from 'pubnub'
import countryData from './countries.json'
export default function PlayerPub(props){
    const [team, setTeam] = useState('Australia')
    const [count, setCount] = useState(0)
    const countries = countryData
    var pubnub = new PubNub({
        publishKey: process.env.REACT_APP_PUB_KEY,
        subscribeKey: process.env.REACT_APP_SUB_KEY
    })
    useEffect(() => {
        var publishConfig = {
            channel : props.channel + props.id,
            message: {
                text: `Attempt ${count}, You are team: \n${team}!`,
            }
        }
        pubnub.publish(publishConfig, function(status, response) {
        })
    })
    return(
        <div>
        <Button variant="primary" onClick={() => {
            if (count >= 5) return
            setCount(count + 1)
            setTeam(countries[Math.floor(Math.random() * countries.length)])
        }}>
            Select a team!
        </Button>
        <Button variant='secondary'onClick={() => {
            setCount(0)
            setTeam('Australia')
        }}>
            Reset!
        </Button>
        </div>
    )
}
