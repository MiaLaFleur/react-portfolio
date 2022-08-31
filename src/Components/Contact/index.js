import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const { name, email, message } = formState;
  const [errMsg, setErrMsg] = useState('');
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrMsg('The email entered is invalid.');
      } else {
        setErrMsg('');
      }
    } else {
      if (!e.target.value.length) {
        setErrMsg(`${e.target.name} is required.`);
      } else {
        setErrMsg('');
      }
    }
    if (!errMsg) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <div>
        <h1 className="contactHeader">Contact Me</h1>
      </div>
      <div>
        <form className="contactForm" id="contactForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label><br></br>
            <input className="contactName" type="text" defaultValue={name} onBlur={handleChange} name="name" />
          </div>
          <div>
            <label htmlFor="email">Email address:</label><br></br>
            <input className="contactEmail" type="email" defaultValue={email} onBlur={handleChange} name="email" />
              </div>
              <div>
                <label htmlFor="message">Message:</label><br></br>
                <textarea className="contactMsg" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                {errMsg && (
                  <div>
                    <p className="error-text">{errMsg}</p>
                  </div>
                )}
              </div>
              <button data-testid="button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;