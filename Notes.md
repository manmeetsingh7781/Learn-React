## Requirements
- Node must be installed
- To create a React app: `npx create-react-app $AppName`
- To run application: `npm start`

-------------------------------------------------------
- Everything that our app needs to run is inside src folder.
- App.js is the entry point of our application.


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
# Q/A
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

----------------------------------------------------------------
# React Components
- React Components are functions that return JSX.
- React Components are the building blocks of React applications.
- React Components are the only way to write HTML inside your JavaScript code.
- React Components are reusable pieces of code that you can build and reuse.



----------------------------------------------------------------
# Props
- the properties of a component.
- the values that are passed to a component.
- immutable.
- passed to a component as an argument.


# State
- the values that are stored in a component.
- the values that are passed to a component.
- passed to a component as a property.
- Can be changed by the component under any condition.
- Example can be List of Todo items and updating them according to the user's actions.

# useRef 
- useRef is a hook that lets you store a mutable ref to a DOM element. 
- useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
- Assign: `<input ref={inputRef} />`
- Store: `const inputRef = useRef(null);`
- Access: `inputRef.current.value;`

# Random ID's 
- React provides a unique ID for every element in your application.
- Use UUID: `npm install uuid`
- Usage: `import uuid from "uuid/v4";`
- Assign: `{id: uuid()}`

# Store Data in Local Storage using useEffect
- A method called useEffect() that lets you run side effects in response to state or props changes.
```
useEffect(() => {
    localStorage.setItem($KEY, JSON.stringify($VALUE));
}, [$Value]);
```


# Getting Stored Data 

- To get Items, create another useEffect() function. passing a $Value to be an empty array which will execute once page loads after the refresh.

```
useEffect(() => {
    const parsed_data = Json.parse(localStorage.getItem($KEY));
    setValue(parsed_data);
}, [])
```

# Copying Data
- In React, copy data before you modifiy it.
- Example: `const data = [...old_data];`
- This spread operator is used to copy an array.
