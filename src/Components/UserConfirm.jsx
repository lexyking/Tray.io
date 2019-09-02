import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


class userConfirm extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { name, email, role } = this.props.values;

    return (
      <MuiThemeProvider>
        <section className="mainSection">
          <section className="formSection">
            <h2>Please review your information and click submit to continue !</h2>
            <List>
              <ListItem
                primaryText='Name'
                secondaryText={name} />
              <ListItem
                primaryText="email"
                secondaryText={email} />
              <ListItem
                primaryText="role"
                secondaryText={role} />
            </List>

            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />

            <RaisedButton
              label="Continue & Confirm"
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

export default userConfirm
