import "./TipCalculator.css";
import { useState } from "react";
export default function TipCalculatorMain() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState("");
  const [percentage2, setPercentage2] = useState("");
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1("");
    setPercentage2("");
  }

  return (
    <div className="tip-calulator-card">
      <div className="tip-calulator-content">
        <h1 className="tip-calulator-heading">Tip Calculator</h1>
        <div className="tip-calulator-form">
          <FormFields
            fieldType="input"
            formId="bill"
            stateVar={bill}
            stateFunc={setBill}
          >
            How much was the bill?
          </FormFields>
          <FormFields
            fieldType="select"
            formId="your-feedback"
            stateVar={percentage1}
            stateFunc={setPercentage1}
          >
            How did you like the service?
          </FormFields>
          <FormFields
            fieldType="select"
            formId="friend-feedback"
            stateVar={percentage2}
            stateFunc={setPercentage2}
          >
            How did your friend like the service?
          </FormFields>
          {bill > 0 && (
            <>
              <h3 style={{ paddingTop: "10px" }}>
                You pay ${bill + tip} (${bill} + {tip} tip)
              </h3>
              <button className="tip-calulator-btn" onClick={handleReset}>
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function FormFields({ children, fieldType, formId, stateVar, stateFunc }) {
  return (
    <div className="form__group field">
      {fieldType === "select" ? (
        <select
          className="form__field"
          id={formId}
          value={stateVar}
          onChange={(e) => stateFunc(Number(e.target.value))}
        >
          <option value="" disabled selected hidden></option>
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely Amazing! (20%)</option>
        </select>
      ) : (
        <input
          className="form__field"
          type="text"
          id={formId}
          placeholder="Enter Bill Amount"
          value={stateVar}
          onChange={(e) => stateFunc(Number(e.target.value))}
        />
      )}
      <label className="form__label" for={formId}>
        {children}
      </label>
    </div>
  );
}
