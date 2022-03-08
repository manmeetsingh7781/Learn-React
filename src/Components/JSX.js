import React from 'react';


// ways to create elements with React

const element = <p>Hello World! - JSX.js</p>

// React.createElement(tag, attributes, children like text)
const element2 = React.createElement('p', {id: 'jsx_id'}, 'Created using React.createElement - JSX.js');


const navbar = <nav>
    <h5>Navbar Title</h5>
    <ul>
        <li>Docs</li>
        <li>Examples</li>
        <li>GitHub</li>
        <li>Community</li>
    </ul>
</nav>


// Custom Component
function Page (props) {
    return (
    <div>
        <hr/>
        <h1>This component is from JSX.js</h1>
        <p>This is just a text</p> 
        {props.navbar}
        <hr/>             
    </div>)
}

export default function RenderComponent() {
    return <Page navbar={navbar}/>;
}