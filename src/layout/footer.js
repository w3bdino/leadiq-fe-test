import React from 'react';
import { Container, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <>
    <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Dino Robles | webdino.r@gmail.com</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    </> 
  )
}

export default Footer;