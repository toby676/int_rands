import React, { useEffect, useState } from 'react'
import PubNub from 'pubnub'
export default function PlayerPub(props){
    const [publish, setPublish] = useState('Australia')
    const countries = ['Argentina', 'Australia', 'Austria', 'Belgium', 'Bolivia', 'Brazil', 'Bulgaria', 'Cameroon', 'Canada', 'Chile', 'China PR', 'Colombia', 'Côte d\'Ivoire', 'Czech Republic', 'Denmark', 'Ecuador', 'Egypt', 'England', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'India', 'Ireland', 'Italy', 'Mexico', 'Netherlands', 'New Zealand', 'Northern Ireland', 'Norway', 'Paraguay', 'Peru', 'Poland', 'Portugal', 'Romania', 'Russia', 'Scotland', 'Slovenia', 'South Africa', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'United States', 'Uruguay', 'Venezuela', 'Wales']
    var pubnub = new PubNub({
        publishKey: process.env.REACT_APP_PUB_KEY,
        subscribeKey: process.env.REACT_APP_SUB_KEY
    })
    useEffect(() => {
        var publishConfig = {
            channel : props.channel,
            message: {
                text: `You are team: ${publish}!`,
            }
        }
        pubnub.publish(publishConfig, function(status, response) {
        })
    })
    return(
        <button onClick={() => {
            setPublish(countries[Math.floor(Math.random() * countries.length)])
        }}>
            Publish to PubNub!
        </button>
    )
}
