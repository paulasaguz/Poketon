import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../images/logo-pokedex.png'
import './header.css'

class Header extends Component {
  state = {  }
  render() { 
    return ( 
    <header className="header" >
      <div className="logo-pokedex">
        <img src={logo} alt="logo-pokedex" width="200" height="80"/>
      </div>
      <div className="wrapper">
        <nav className="navigate">
          <ul className="nav-list">
            <li>
              <NavLink exact to="/" className="nav-item" activeClassName="is-selected">Buscar</NavLink>
            </li>
            <li>
              <NavLink to="/pokemon/25" className="nav-item" activeClassName="is-selected">Pikachu</NavLink>
            </li>
            <li>
              <NavLink to="/lista" className="nav-item" activeClassName="is-selected">Lista</NavLink>
            </li>
            <li>
              <NavLink to="/favoritos" className="nav-item" activeClassName="is-selected">Favoritos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    );
  }
}

export default Header;