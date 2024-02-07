import React, { useState } from "react";
import "./MultiStepsForm.css";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const submitForm = () => {
    console.log("Form submitted!");
  };

  return (
    <div id="msform">
      <ul id="progressbar">
        <li className={step >= 1 ? "active" : ""}>Account Setup</li>
        <li className={step >= 2 ? "active" : ""}>Social Profiles</li>
        <li className={step >= 3 ? "active" : ""}>Personal Details</li>
      </ul>

      <FieldSet
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        submitForm={submitForm}
      />
    </div>
  );
}

function FieldSet({ step, nextStep, prevStep, submitForm }) {
  return (
    <fieldset style={{ display: "block" }}>
      {step === 1 && (
        <>
          <h2 className="fs-title">Create your account</h2>
          <h3 className="fs-subtitle">This is step 1</h3>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="password" name="cpass" placeholder="Confirm Password" />
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="fs-title">Social Profiles</h2>
          <h3 className="fs-subtitle">Your presence on the social network</h3>
          <input type="text" name="twitter" placeholder="Twitter" />
          <input type="text" name="facebook" placeholder="Facebook" />
          <input type="text" name="gplus" placeholder="Google Plus" />
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="fs-title">Personal Details</h2>
          <h3 className="fs-subtitle">We will never sell it</h3>
          <input type="text" name="fname" placeholder="First Name" />
          <input type="text" name="lname" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="address" placeholder="Address"></textarea>
        </>
      )}

      {step === 1 && (
        <input
          type="button"
          className="next action-button"
          onClick={nextStep}
          value="Next"
        />
      )}

      {(step === 2 || step === 3) && (
        <input
          type="button"
          className="previous action-button"
          onClick={prevStep}
          value="Previous"
        />
      )}

      {step === 2 && (
        <input
          type="button"
          className="next action-button"
          onClick={nextStep}
          value="Next"
        />
      )}

      {step === 3 && (
        <a
          href="https://github.com/Namrah-99"
          className="submit action-button"
          onClick={submitForm}
          target="_top"
        >
          Submit
        </a>
      )}
    </fieldset>
  );
}
