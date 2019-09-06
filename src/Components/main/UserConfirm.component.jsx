import React, { Component } from 'react'


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
    const { name, email, role, isUpdate, isCommunication } = this.props.values;

    return (


      <section className="mainSection">
        <section className="formSection">
          <h2>Please review your information and click submit to continue !</h2>
          <section>
            <article>
              <h4>Name</h4>
              <p>{name}</p>
            </article>
            <article >
              <h4>Email</h4>
              <p>{email}</p>
            </article>
            <article >
              <h4>Role</h4>
              <p>{role}</p>
            </article>
            <article >
              <h4>Updates from Tray.io ?</h4>
              <p>{isUpdate ? 'Yes, i want to receive updates from Tray.io' : 'No, I do not wat to receive Updates'}</p>
            </article>
            <article >
              <h4>Do you want to receive communicational emails from Tray.io ?</h4>
              <p>{isCommunication ? 'Yes, i want to receive communicational emais from Tray.io' : 'No, I do not want to receive communicational emails from Tray.io'}</p>

            </article>

          </section>

          <button
            className="btn btn-back"
            onClick={this.back}
          >
            Back
            </button>

          <button
            className="btn"
            onClick={this.continue}
          >
            Continue & Confirm
            </button>
        </section>
      </section>


    )

  }
}


export default userConfirm
