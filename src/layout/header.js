import React from 'react';
import { Container, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <NavLink className="navbar-brand" href="/">LeadIQ Front End Developer Test</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <NavLink className="nav-link" href="/">Home <span class="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" href="/">Link</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
            </li>
        </ul>
        </div>
    </nav>
    </header>  
  )
}

export default Header;