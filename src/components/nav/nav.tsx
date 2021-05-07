import React from 'react';
import './nav.css';

function Navbar() {
  return (
 <nav style={{}} className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand px-3" href="#">PizzaTemp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item p-2">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item p-2">
        <a className="nav-link" href="#">Order Now</a>
      </li>
      <li className="nav-item p-2">
        <a className="nav-link" href="#">About Us</a>
      </li>
    </ul>
  </div> */}
</nav>
  );
}

export default Navbar;
