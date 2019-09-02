import React, { Component } from 'react';
import UserDetails from './UserDetails';
import UserPrivacy from './UserPrivacy'
import UserConfirm from './UserConfirm';
import UserDone from './UserDone'

export class UserForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      role: '',
      password: '',
      step: 1,
      isUpdate: false,
      isCommunication: false
    }
  }

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  //Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }
  s
  //Handle fields change
  handleChange = e => {
    const { value, name, type, checked } = e.target
    console.log(e.target)
    type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }



  render() {
    //Destructuring the elements of the state to have a clean code
    //by using name or email instead of this.state.name or this.state.email
    const {
      name,
      email,
      role,
      isUpdate,
      isCommunication,
      step,
    } = this.state;

    //I created the const values to pass all the attributes of the state as a prop
    const values = {
      name,
      email,
      role,
      isUpdate,
      isCommunication
    }

    //Because i only have few tabs to return based on the step the 
    //user is, i will use a switch

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <UserPrivacy
            values={values}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange} />
        );

      case 3:
        return (
          <UserConfirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values} />
        )
      case 4:
        return <UserDone />
      default:

    }

  }
}

export default UserForm
