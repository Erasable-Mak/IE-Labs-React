/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../images/epochs.png";

const Navbar = () => {
    return (
        <>   
       
<nav className="navbar navbar-expand-lg navbar-light py-1 sticky-top" >
  <NavLink Class="navbar-brand" to="#"></NavLink>
       <a href="/">
       <img src={logo}  alt="logo" />
       </a>
  <button Class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <div className="word">
  {/*<ul className="navbar-nav mr-auto">
  <li className="nav-item">
        <NavLink className="nav-link" to="/">MERN Development</NavLink>
      </li>
  </ul>*/}
  </div>    
  
    <ul className="navbar-nav mx-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/services">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
    </ul>
  </div>

  <div class="navbar">
        <ul class="navbar-nav ml-auto">
        <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup" color="#000">Registration</NavLink>
      </li>
            <li class="nav-item">
                <a class="nav-link" href="/help">Help</a>
            </li>
            <li className="nav-item">
        <NavLink className="nav-link" to="/login" color="#000">Logout</NavLink>
      </li>
        </ul>
    </div>

</nav>
        </>
    )
}

export default Navbar

