import React from 'react'
import Clock from './Clock'
import './Home.css'
const home=(props)=>{
    return (<div className="Home">
        <h1>You Choose <strong>Home</strong></h1>
        <br></br>
        <Clock/>
    </div>)
}

export default home