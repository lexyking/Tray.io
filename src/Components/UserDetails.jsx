import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class userDetails extends Component {

  //Function continue to move to the next tab
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }


  render() {
    //Destructuring attributes from the props
    const { values, handleChange } = this.props
    return (
      <div>
        <h1>User Details</h1>
      </div >
    )

  }
}

export default userDetails
