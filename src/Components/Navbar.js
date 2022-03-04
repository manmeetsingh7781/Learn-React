
// To create a React component import React
import {React} from 'react';


// Create a React functional Component
// re-useable component
function Navbar(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" >Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}


// export the Navbar 
export default Navbar;