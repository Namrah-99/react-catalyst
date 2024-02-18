import "./BankAccount.css";

/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/
import React, { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_ACCOUNT":
      if (!state.isActive && action.payload >= 500) {
        return {
          ...state,
          balance: action.payload,
          isActive: true,
        };
      }
      return state;
    case "DEPOSIT":
      if (state.isActive) {
        return {
          ...state,
          balance: state.balance + action.payload,
        };
      }
      return state;
    case "WITHDRAW":
      if (state.isActive && state.balance >= action.payload) {
        return {
          ...state,
          balance: state.balance - action.payload,
        };
      }
      return state;
    case "REQUEST_LOAN":
      if (state.isActive && state.loan === 0) {
        return {
          ...state,
          balance: state.balance + action.payload,
          loan: action.payload,
        };
      }
      return state;
    case "PAY_LOAN":
      if (state.isActive && state.loan > 0) {
        return {
          ...state,
          balance: state.balance - state.loan,
          loan: 0,
        };
      }
      return state;
    case "CLOSE_ACCOUNT":
      if (state.isActive && state.balance === 0 && state.loan === 0) {
        return {
          ...initialState,
        };
      }
      return state;
    default:
      throw new Error("Unknown action");
  }
};

export default function BankAccount() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="bank-account-main">
      <div className="use-reducer-bank-account">
        <div className="inner-bank-account-div">
          <div>
            {" "}
            <p>💵 Balance: {balance}</p>
            <p>💰 Loan: {loan}</p>
            <br />
            <br />
            <p>
              <button
                onClick={() => dispatch({ type: "OPEN_ACCOUNT", payload: 500 })}
                disabled={isActive}
              >
                Open account 🔑
              </button>
            </p>
            <p>
              <button
                onClick={() => dispatch({ type: "CLOSE_ACCOUNT" })}
                disabled={!isActive || balance !== 0 || loan !== 0}
              >
                Close account 🔒
              </button>
            </p>
          </div>

          <div>
            {" "}
            <p>
              <button
                onClick={() => dispatch({ type: "DEPOSIT", payload: 150 })}
                disabled={!isActive}
              >
                ➕ Deposit 150
              </button>
            </p>
            <p>
              <button
                onClick={() => dispatch({ type: "WITHDRAW", payload: 50 })}
                disabled={!isActive || balance < 50}
              >
                ➖ Withdraw 50
              </button>
            </p>
            <br />
            <br />
            <p>
              <button
                onClick={() =>
                  dispatch({ type: "REQUEST_LOAN", payload: 5000 })
                }
                disabled={!isActive || loan !== 0}
              >
                💳 Request a loan of 5000
              </button>
            </p>
            <p>
              <button
                onClick={() => dispatch({ type: "PAY_LOAN" })}
                disabled={!isActive || loan === 0}
              >
                💳 Pay loan
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
