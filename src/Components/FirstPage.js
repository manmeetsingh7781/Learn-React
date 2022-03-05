import React from 'react';
import Logo from "../Images/logo.png";

// this is a first challenge from the video

export default function Body(props) {


    return (
        <div className="App">
            <img src={Logo} alt="logo" className="App-logo"/>
            <h1>Fun facts about React</h1>
            <ol>
                <li>Was fist released in 2013</li>
                <li>Was originally created by Jordan Walkie</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is Maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps.</li>
            </ol>
        </div>
    )
}