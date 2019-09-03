import React, { Component } from 'react';
import UserDetails from './UserDetails';
import UserPrivacy from './UserPrivacy'
import UserConfirm from './UserConfirm';
import UserDone from './UserDone';
import Joi from 'joi';

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
      isCommunication: false,
      errorForm: '',
      isDisplay: true
    }
  }

  //Proceed to next step
  nextStep = () => {
    const { step, name, email, role, password } = this.state;
    if (step === 1) {
      const values = { name, email, role, password }
      const result = this.isValid(values)
      result ? this.setState({ errorForm: result.msg, isDisplay: true }) : this.setState({ step: step + 1 })

    } else {
      this.setState({
        step: step + 1
      })
    }

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

  handleClick = () => {
    const { isDisplay } = this.state
    this.setState({
      isDisplay: !isDisplay
    })
    console.log(isDisplay)
  }

  //Form Validation
  isValid = event => {
    const schema = Joi.object().keys({
      name: Joi.string().min(3).max(30).required(),
      role: Joi.string().min(4).required(),
      email: Joi.string().email(),
      password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/).required()
    })

    return Joi.validate(event, schema, (err, result) => {
      if (err) {
        return { msg: err.details[0].message }
      }
    })
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
      password,
      errorForm,
      isDisplay
    } = this.state;

    //I created the const values to pass all the attributes of the state as a prop
    const values = {
      name,
      email,
      role,
      password,
      isUpdate,
      isCommunication,
      errorForm,
      isDisplay
    }

    //Because i only have few tabs to return based on the step the 
    //user is, i will use a switch

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
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
