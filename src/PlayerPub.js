import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import PubNub from 'pubnub'
export default function PlayerPub(props){
    const [team, setTeam] = useState('Australia')
    const [count, setCount] = useState(0)
    const countries = ['Argentina', 'Australia', 'Austria', 'Belgium', 'Bolivia', 'Brazil', 'Bulgaria', 'Cameroon', 'Canada', 'Chile', 'China PR', 'Colombia', 'Côte d\'Ivoire', 'Czech Republic', 'Denmark', 'Ecuador', 'Egypt', 'England', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'India', 'Ireland', 'Italy', 'Mexico', 'Netherlands', 'New Zealand', 'Northern Ireland', 'Norway', 'Paraguay', 'Peru', 'Poland', 'Portugal', 'Romania', 'Russia', 'Scotland', 'Slovenia', 'South Africa', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'United States', 'Uruguay', 'Venezuela', 'Wales']
    var pubnub = new PubNub({
        publishKey: process.env.REACT_APP_PUB_KEY,
        subscribeKey: process.env.REACT_APP_SUB_KEY
    })
    useEffect(() => {
        var publishConfig = {
            channel : props.channel,
            message: {
                text: `Attempt ${count}, You are team: ${team}!`,
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
