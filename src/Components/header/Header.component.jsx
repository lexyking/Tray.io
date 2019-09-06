import React, { Component } from 'react';
import imgScr from '../images/tray-io.png'

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <section className="logo">
          <img src={imgScr} alt='' />
        </section>
        <h1>Joan Yassi</h1>
      </header>
    )
  }
}

export default Header
