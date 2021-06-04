import React, { Component } from 'react'
import logo from '../images/logosmartcheck.svg';

export default class Header extends Component {
    render() {
        return (
	<div className="logo1">
          <a href="/" className="logo">
            <img className="logo2" src={logo} alt="logo" />
        </a>
      </div>
        )
    }
}