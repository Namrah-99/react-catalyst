import { Outlet } from "react-router-dom";

import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

export default function AppLayout() {
  return (
    <div className="theme-size-md theme-font-family font-primary">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
