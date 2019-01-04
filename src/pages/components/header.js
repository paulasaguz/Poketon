import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-pokedex.png';
import './header.css'

class Header extends Component {
  state = {  }
  render() { 
    return ( 
    <header>
      <div className="logo-pokedex">
        <img src={logo} alt="logo-pokedex" width="200" height="80"/>
      </div>
      <div className="wrapper">
        <nav className="navigate">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-item is-selected">Buscar</Link>
            </li>
            <li>
              <Link to="/pokemon/25" className="nav-item is-selected">Pikachu</Link>
            </li>
            <li>
              <Link to="/lista" className="nav-item is-selected">Lista</Link>
            </li>
            <li>
              <Link to="/favoritos" className="nav-item is-selected">Favoritos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    );
  }
}

export default Header;