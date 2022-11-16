import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import PubNub from 'pubnub'
export default function PlayerPub(props){
    const [team, setTeam] = useState('Australia')
    const [count, setCount] = useState(0)
    const countries = ['France', 'Germany', 'England', 'Portugal', 'Italy', 'Spain', 'Argentina', 'Belgium', 'Netherlands', 'Brazil', 'Croatia', 'Denmark', 'Austria', 'Czech Republic', 'Poland', 'Morocco', 'Mexico', 'Sweden', 'Ukraine', 'Scotland', 'Norway', 'USA', 'Wales', 'Ghana', 'Canada', 'Hungary', 'Republic of Ireland', 'Romania', 'Australia', 'Finland', 'Qatar', 'Iceland', 'Northern Ireland', 'New Zealand', 'China']
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
