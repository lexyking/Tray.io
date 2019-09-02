import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';



class userPrivacy extends Component {

  //Function continue to move to the next tab
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  //Function to come back one step
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const label = {
      privacyTerm: "Receive updates about Tray.io products by email",
      communication: "Receive Communication by email for other products created by the Tray.io team"
    }

    //Destructuring attributes from the props
    const { values, handleChange } = this.props
    return (
      <MuiThemeProvider>
        <section className="mainSection">
          <h2>Privacy policy</h2>

          <section className="checkBoxes">
            <Checkbox
              onChange={handleChange('checkedB')}
              value="checkedB"
              color="primary"
              label={label.privacyTerm}
            />
            <br />
            <Checkbox
              // checked={state.checkedB}
              onChange={handleChange('checkedB')}
              value="checkedB"
              color="primary"
              label={label.communication}
            />
          </section>
          <br />

          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
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

export default userPrivacy
