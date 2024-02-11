import { useEffect, useState } from "react";
import "./CurrencyConverter.css";

export default function CurrencyConverterMain() {
  const [amount, setAmount] = useState(1);
  const [baseCurr, setBaseCurr] = useState("");
  const [targetCurr, setTargetCurr] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function currencyConversion() {
      try {
        setIsLoading(true);
        if (!amount) return;
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${baseCurr}&to=${targetCurr}`
        );
        const data = await res.json();
        const output = data.rates[targetCurr];
        setResult(output);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    }

    if (!baseCurr || !targetCurr) return;
    if (baseCurr === targetCurr) return setResult(amount);
    currencyConversion();
  }, [amount, baseCurr, targetCurr]);

  return (
    <div className="currency-converter-container">
      <h1>Currency Converter</h1>
      <div className="form__group field">
        <input
          type="text"
          className="form__field"
          placeholder="amount input ... "
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
          disabled={isLoading}
        />
        <label htmlFor="amount" className="form__label">
          Amount
        </label>
      </div>
      <div>
        <select
          value={baseCurr}
          onChange={(e) => setBaseCurr(e.target.value)}
          disabled={isLoading}
        >
          <option value="" disabled>
            Select Base currency
          </option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="PKR">PKR</option>
          <option value="CAD">CAD</option>
        </select>
        <select
          value={targetCurr}
          onChange={(e) => setTargetCurr(e.target.value)}
          disabled={isLoading}
        >
          <option value="" disabled>
            Select Target currency
          </option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="PKR">PKR</option>
          <option value="CAD">CAD</option>
        </select>
      </div>
      <div className="output-currency-converter">
        <h3>Output : </h3> <h3>{result}</h3>
      </div>
    </div>
  );
}
