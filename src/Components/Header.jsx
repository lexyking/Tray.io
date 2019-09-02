import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import imgScr from '../images/tray-io.png'

export class Header extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <header className="header">
          <section className="logo">
            <img src={imgScr} alt='' />
          </section>
          <h1>Joan Yassi</h1>
        </header>

      </MuiThemeProvider>
    )
  }
}

export default Header
