import "./ReactRedux.css";

import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";

import { useSelector } from "react-redux";

export default function ReactRedux() {
  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <div className="react-redux-main-container">
      <div className="split-redux-screen">
        {fullName === "" ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <BalanceDisplay />
          </>
        )}
        {fullName && <AccountOperations />}
      </div>
    </div>
  );
}
