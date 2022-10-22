import React from 'react';
import '../Navbar/navbar.css';
import logo from '../icon/logo.svg';
class Navbar extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="logowrapper">
            <img src={logo} />
            <p className="title">Building</p>
          </div>
          <div className="menu">
            <h3 className="title">Home</h3>
            <h3 className="title">Services</h3>
            <h3 className="title">About Us</h3>
            <h3 className="title">Properties</h3>
            <h3 className="title">Contact</h3>
            <button className="loginButton">Login</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
