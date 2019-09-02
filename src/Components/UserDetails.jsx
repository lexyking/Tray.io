import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
      <MuiThemeProvider>
        <section className="mainSection">
          <section className="formSection">
            <h2>Enter User Details</h2>
            <TextField
              hintText="Enter Your Name"
              floatingLabelText="Name *"
              onChange={handleChange('name')}
              defaultValue={values.name}
            />
            <br />
            <TextField
              hintText="Enter Your Role"
              floatingLabelText="role *"
              onChange={handleChange('role')}
              defaultValue={values.role}
            />
            <br />
            <TextField
              hintText="Enter Your Email"
              floatingLabelText="Email *"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <br />
            <TextField
              hintText="Enter Your Password"
              floatingLabelText="Password *"
              onChange={handleChange('password')}
              defaultValue={values.password}
            />
            <br />
            <RaisedButton
              label="continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </section>
        </section>
      </MuiThemeProvider>
    )

  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default userDetails
