import React from 'react';
import imgSrc from '../images/user-check-solid.svg'

function userDone() {
  return (
    <section className="mainSection">
      <section className="formSection">
        <section className="userImg">
          <img src={imgSrc} alt='' />
        </section>

        <p>Please verify your email address, you should have received an email
          from us already
        </p>
      </section>
    </section>
  )
}

export default userDone
