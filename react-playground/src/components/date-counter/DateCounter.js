import { useState } from "react";
import "./DateCounter.css";
export default function DateCounterMain() {
  return (
    <div className="card-conteiner-2">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="card-content-2">
      <div className="card-title">
        Date <span>Counter</span>
      </div>
      <br />

      <p className="current-range">Step: {step}</p>
      <div
        data-range="#third"
        data-value-1="#second"
        data-value-0="#first"
        className="slider"
      >
        <label className="label-min-value">1</label>
        <label className="label-max-value">10</label>
      </div>
      <div className="rangeslider">
        <input
          className="max input-ranges"
          name="range_1"
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
      </div>
      <br />
      <br />
      <p className="current-range">Count: {count}</p>
      <div className="inline-elements">
        <button
          className="animatedBtn"
          onClick={() => setCount((count) => count - step)}
        >
          ↓
        </button>

        <div className="input-container">
          <input
            className="input"
            placeholder="type..."
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <div className="topline"></div>
          <div className="underline"></div>
        </div>
        <button
          className="animatedBtn"
          onClick={() => setCount((count) => count + step)}
        >
          ↑
        </button>
      </div>
      <br />

      <div className="card-result">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}{" "}
        </span>
        <span>{date.toDateString()}</span>
        {count !== 0 || step !== 1 ? (
          <div>
            <br />
            <button class="date-counter-reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
