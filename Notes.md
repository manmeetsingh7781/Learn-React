# Why React?

## Declarative: What should be done?
- Example: Creating a element just by declaring a tag inside a ReactDOM.render
``ReactDOM.render(<h1>This is a Declarative way to program</h1>, document.body);``

## Imperative: How it should be done?
- Exmple: Creating a component and appending to the HTML with pure javascript
``
    const h4 = document.createElement('h4');
    h4.textContent = 'This is an Imperative way to program';
    h4.className = "header_text";
    document.body.appendChild(h4);
``