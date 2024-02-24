import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">ReactCrust</Link>
      <SearchOrder />
      <p>Namrah</p>
    </header>
  );
}

export default Header;
