# Why React?

## Declarative: What should be done?
- Example: Creating a element just by declaring a tag inside a ReactDOM.render, using JSX.
``ReactDOM.render(<h1>This is a Declarative way to program</h1>, $where_to_render);``

## Imperative: How it should be done?
- Exmple: Creating a component and appending to the HTML with pure javascript
``
    const h4 = document.createElement('h4');
    h4.textContent = 'This is an Imperative way to program';
    h4.className = "header_text";
    document.body.appendChild(h4);
``
----------------------------------------------------------------
# JSX
- JSX is defined in React module. 
- JSX : JavaScript XML
- JSX is a syntax extension to JavaScript that allows you to write HTML inside your JavaScript code.
- JSX returns plane javascript object. [Object Oject] -> JSON.stringify(data) => {...}

----------------------------------------------------------------
# Quiz - 1
1. Why do we need to `import React from "react"` in our files?
- React is what defines JSX. 
- React is a library that allows you to write JSX.


2. If I were to console.log(page), what would I see?
- I would see the page object. 

3. What's wrong with this code?
``` 
const page = (
        <h1>Hello World</h1>
        <h2>This is a JSX page</h2>
);
 ```
- The code is not valid because thee JSX as to be nested under a single parent element.

4. What does it mean for something to be "declarative" instead of "imperative"?
- Declarative means I can tell the computer WHAT to do and expect it to handle the detials.
- Imperative means I can tell the computer HOW to do it and expect it to handle the detials for each step.

5. What does it mean for something to be "composable"?
- Composable means I can compose components together to make a bigger component.


----------------------------------------------------------------
functions that creates components of HTML tags are called Custom Component;
first letter of function name should Capital letter
for example:
```function Page (props) {
        return (
        <div>
            <hr/>
            <h1>This component is from JSX.js</h1>
            <p>This is just a text</p> 
            {props.navbar}
            <hr/>             
        </div>)
    }
```


`usage = <Page props={...}/>`

React functional Components take these JSX syntax and render Navtive HTML components to the page.