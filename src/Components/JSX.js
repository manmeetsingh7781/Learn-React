import React from 'react';


// ways to create elements with React

const element = <p>Hello World! - JSX.js</p>

// React.createElement(tag, attributes, children like text)
const element2 = React.createElement('p', {id: 'jsx_id'}, 'Created using React.createElement - JSX.js');

const page = <div>
                <hr/>
                <h1>This component is from JSX.js</h1>
                <p>This is just a text</p>
                {element}
                {element2}  
                <hr/>             
            </div>

export default function RenderComponent() {
    return page;
}