import React, { Component } from 'react';


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
      updateTerm: "Receive updates about Tray.io products by email",
      communication: "Receive Communication by email for other products created by the Tray.io team"
    }
    //Destructuring attributes from the props
    const { handleChange, values } = this.props
    return (
      <section className="mainSection">
        {/* {console.log(values)} */}
        <section className="formSection">
          <h2>Privacy policy</h2>

          <section className="checkBoxes">
            <article>
              <input
                type="checkbox"
                onClick={handleChange}
                name="isUpdate"
                defaultChecked={values.isUpdate}
              />
              <label>{label.updateTerm}</label>
            </article>
            <article>
              <input
                type="checkbox"
                onClick={handleChange}
                name="isCommunication"
                defaultChecked={values.isCommunication}
              />
              <label>{label.communication}</label>
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
            Continue
          </button>

        </section>
      </section>
    )

  }
}


export default userPrivacy
