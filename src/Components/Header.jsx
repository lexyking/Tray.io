import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Header extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar position="static" title="Tray.io Registration form" />

      </MuiThemeProvider>
    )
  }
}

export default Header
