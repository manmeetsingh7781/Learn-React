import React from 'react';

// this is a first challenge from the video

export default function Body(props) {
    const page_content = (
        <div className="App">
            <h1 style={{fontWeight: "800"}}>Fun facts about React - Project 1</h1>
            <ul className='myList'>
                <li>Was fist released in 2013</li>
                <li>Was originally created by Jordan Walkie</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is Maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
    return page_content;
}