import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Account from "./pages/Account";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
// (CMS): Explore Node.js CMS solutions like Contentful or Prismic to create and manage dynamic content pages like About Us, Contact Us, etc
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";

import Others from "./Others/Others";
import Women from "./pages/customers/Women";
import Men from "./pages/customers/Men";
import Kids from "./pages/customers/Kids";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="others" element={<Others />}></Route>
          <Route path="account" element={<Account />}></Route>
          <Route path="products" element={<ProductListing />}></Route>
          <Route
            path="products/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="wishlist" element={<Wishlist />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="about-us" element={<About />}></Route>
          <Route path="contact-us" element={<Contact />}></Route>

          <Route path="women" element={<Women />}></Route>
          <Route path="men" element={<Men />}></Route>
          <Route path="kids" element={<Kids />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className="theme-size-md theme-font-family2 theme-color1">
<h1 className="text-p-sm">
  abcdef Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Deleniti quia nulla alias eaque voluptate quo voluptatum tempore
  commodi explicabo. Atque commodi, cum porro accusamus minus fuga fugit
  laborum aliquam inventore.
</h1>
<h2 className="text-h-md">abcdef</h2>
<h3>ABCDEFGH</h3>
<h4>ABCDEFGH</h4>
<h5 className="text-h-lg">ABCDEFGH</h5>
<h6 className="text-h-md text-primary">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
  quod cumque dolorem adipisci repellendus, praesentium porro nobis ea
  illum eligendi officia rem, et deserunt nihil recusandae quam unde
  ipsum ex.
</h6>
<p>ABCDEFGH</p>
<button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-p-lg font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Button
</button>
<button className="btn bg-primary">Button</button></div> */
}
