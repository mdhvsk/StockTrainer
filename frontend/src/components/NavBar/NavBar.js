import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import "./NavBar.css"


function NavBar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="main_container">
      <nav className={"navbar"}>
        <div className={"navLinks"}>
          <h1>Stock Trainer</h1>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard/stock/portfolio">Portfolio</Link>
          <Link to="/settings">Settings</Link>
        </div>
        <button className={"white_btn"} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
}

export default NavBar

