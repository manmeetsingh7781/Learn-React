import './App.css';
import Navbar from './Components/Navbar.js';


// Impeative way to create a component
const h4 = document.createElement('h4');
h4.textContent = 'This is an Imperative way to program';
h4.className = "header_text";
document.body.appendChild(h4);

// ReactDOM.render(<h1 className="header_text">This is a Declarative way to program</h1>, document.body);

function App() {
  return (
    <>
      <Navbar title="Singh"/>
      <div className="App">
        <h1>Hello World from React!</h1>
        <ul>
          <li>First Item</li>
          <li>Second Item</li>
          <li>Third Item</li>
        </ul>
      </div>
    </>
  );
}

export default App;
