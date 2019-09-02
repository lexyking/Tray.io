import React, { Component, Fragment } from 'react'


class userDetails extends Component {

  //Function continue to move to the next tab
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }


  render() {
    //Destructuring attributes from the props
    const { values, handleChange, handleClick } = this.props
    return (
      <Fragment>
        {values.errorForm ?
          <section className={values.isDisplay ? "errorMessage" : "errorBoxDisappear"}>
            <p>{values.errorForm}</p>
            <button
              onClick={handleClick}
              className="btnClose">X</button>
          </section> : ''}

        <section className="mainSection">
          <section className="formSection">
            <h2>Enter User Details</h2>
            <article className="inputFields">
              <label>Name<span className="asterisk">*</span></label>
              <input
                placeholder="Enter Your Name"
                onChange={handleChange}
                value={values.name}
                name="name"
                type="text"
                required
              />
            </article>

            <article className="inputFields">
              <label>Role<span className="asterisk">*</span></label>

              <input
                placeholder="Enter Your Role"
                onChange={handleChange}
                value={values.role}
                name="role"
                type="text"
              />
            </article>

            <article className="inputFields">
              <label>Email<span className="asterisk">*</span></label>

              <input
                placeholder="Enter Your Email"
                onChange={handleChange}
                value={values.email}
                name="email"
                type="text"
              />
            </article>
            <article className="inputFields">
              <label>Password<span className="asterisk">*</span></label>

              <input
                placeholder="Enter Your Password"
                type="password"
                onChange={handleChange}
                value={values.password}
                name="password"
              />
            </article>
            <button className="btn"
              onClick={this.continue}
            >Continue</button>
          </section>
        </section>


      </Fragment>
    )
  }
}


export default userDetails
