import amexsvg from "../../../assets/images/paymentMethods/american-express.png";
import applepaysvg from "../../../assets/images/paymentMethods/apple_pay.svg";
import deltasvg from "../../../assets/images/paymentMethods/delta.svg";
import jcbsvg from "../../../assets/images/paymentMethods/jcb.svg";
import maestrosvg from "../../../assets/images/paymentMethods/maestro.svg";
import paypalsvg from "../../../assets/images/paymentMethods/paypal.svg";
import unionpaysvg from "../../../assets/images/paymentMethods/unionpay.svg";
import visasvg from "../../../assets/images/paymentMethods/visa.svg";
import mastercardsvg from "../../../assets/images/paymentMethods/mastercardd.svg";
import instagram from "../../../assets/images/paymentMethods/instagram_social_media_icon.svg";
import facebook from "../../../assets/images/paymentMethods/facebook_social_icon.svg";
import youtube from "../../../assets/images/paymentMethods/youtube_icon.png";
import twitter from "../../../assets/images/paymentMethods/twitter_social_icon.svg";
import { PiCoatHangerBold } from "react-icons/pi";
import { GrCircleQuestion } from "react-icons/gr";
import { VscComment } from "react-icons/vsc";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isLargeScreen = useMediaQuery({ minWidth: 768 }); // Check if screen width is greater than or equal to 768px
  const [customerSupportOpen, setCustomerSupportOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);

  return (
    <>
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 text-gray-600 py-8">
        <div className="hover:bg-[#f0f0f0] px-4 py-8 border border-gray-200 space-y-2">
          <PiCoatHangerBold className="font-semibold size-6" />
          <p>how to make an order</p>
          <p>Detailed instructions for new clients</p>
        </div>
        <div className="hover:bg-[#f0f0f0] px-4 py-8 border border-gray-200 space-y-2">
          <GrCircleQuestion className="font-semibold size-6" />
          <p>Questions and answers</p>
          <p>All about shipping, returns and duties</p>
        </div>
        <div className="hover:bg-[#f0f0f0] px-4 py-8 border border-gray-200 space-y-2">
          <VscComment className="font-semibold size-6" />
          <p>help is needed?</p>
          <p>Contact our customer service</p>
        </div>
      </div>

      <div className="bg-[#f0f0f0] py-8">
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
          <div className="md:w-3/4 flex flex-col gap-y-4">
            <p className="text-p-lg text-gray-600 font-semibold">
              Enjoy 10% off your first order
            </p>
            <p className="text-p-sm">
              Claim your exclusive discount code when you subscribe to our
              emails. Terms and conditions apply
            </p>
            <div className="flex justify-between">
              <input
                type="text"
                className="w-3/4 md:w-full appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-600 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                placeholder="your@address.com"
              />
              <button className="bg-transparent border border-gray-300 text-gray-215 hover:text-gray-600 hover:border-gray-600 px-4">
                Submit
              </button>
            </div>
            <hr className="w-16 border-t-2 border-gray-300" />
            <div className="flex flex-row flex-wrap gap-x-4">
              <img className="size-7 p-1" src={youtube} alt="youtube" />
              <img className="size-7 p-1" src={facebook} alt="facebook" />
              <img className="size-7 p-1" src={twitter} alt="twitter" />
              <img className="size-7 p-1" src={instagram} alt="instagram" />
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div>
              <p className="text-gray-600 uppercase font-medium">need help?</p>
              <p>
                For any enquiries please visit ELARA &nbsp;
                <a
                  href="#"
                  className="cursor-pointer underline underline-offset-4 hover:bg-gray-100"
                >
                  Customer Care
                </a>
                .
              </p>
            </div>
            <div>
              <p className="text-gray-600 uppercase font-medium">
                location & language
              </p>
              <div className="py-2">
                <img
                  className="w-10 h-8 p-1 inline"
                  src="https://flagcdn.com/256x192/pk.png"
                  alt="Pakistan Flag"
                />
                + <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 gap-4 text-p-sm text-gray-500 font-medium justify-evenly py-8">
        <div className="space-y-3">
          <p
            className={`text-gray-600 uppercase font-semibold cursor-pointer ${
              isLargeScreen ? "" : "accordion-trigger"
            }`}
            onClick={() => setCustomerSupportOpen(!customerSupportOpen)}
          >
            customer support
          </p>
          {(isLargeScreen || customerSupportOpen) && (
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Track an Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Create a Return
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Exchanges & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Cookie Policy
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="space-y-3">
          <p
            className={`text-gray-600 uppercase font-semibold cursor-pointer ${
              isLargeScreen ? "" : "accordion-trigger"
            }`}
            onClick={() => setAboutUsOpen(!aboutUsOpen)}
          >
            about us
          </p>
          {(isLargeScreen || aboutUsOpen) && (
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  About Elara
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  People & Planet
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Resell your designer items
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Elara Rewards
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Advertising
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Student Discount
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-100 p-2">
                  Modern Slavery Statement
                </a>
              </li>
            </ul>
          )}
        </div>
        <div className="md:col-span-2 flex flex-col justify-around gap-4">
          <div>
            <div>
              <p className="text-gray-600 uppercase font-semibold">mr porter</p>
              <p>
                Shop from over 500 of the world&#39;s finest luxury designer
                brands & be dressed for any occasion - &nbsp;
                <a
                  href="#"
                  className="cursor-pointer underline underline-offset-4 hover:bg-gray-100"
                >
                  visit MRPORTER.COM
                </a>
              </p>
            </div>
            <div>
              <p className="text-gray-600 uppercase font-semibold">
                AFFIRM PAYMENT
              </p>
              <p>
                Payment options through Affirm are subject to an eligibility
                check and are provided by these lending partners:
                affirm.com/lenders. CA residents: Loans by Affirm Loan Services,
                LLC are made or arranged pursuant to a California Finance
                Lenders Law license -&nbsp;
                <a
                  href="#"
                  className="cursor-pointer underline underline-offset-4 hover:bg-gray-100"
                >
                  find out more here.
                </a>
              </p>
            </div>
          </div>
          <div>
            <p className="text-gray-600 uppercase font-semibold">
              Elara accepts
            </p>
            <div className="flex flex-row flex-wrap gap-x-1 justify-around">
              <img
                className="w-14 h-9 p-1 m-1 md:mx-0 border border-gray-300"
                src={applepaysvg}
                alt="applepay"
              />
              <img
                className="w-14 h-9 p-1 m-1 md:mx-0 border border-gray-300"
                src={deltasvg}
                alt="delta"
              />
              <img
                className="w-14 h-9 p-1 m-1 md:mx-0 border border-gray-300"
                src={paypalsvg}
                alt="paypal"
              />
              <img
                className="w-14 h-9 p-1 m-1 md:mx-0 border border-gray-300"
                src={jcbsvg}
                alt="jcb"
              />
              <img
                className="w-14 h-9 p-1 m-1 md:mx-0 border border-gray-300"
                src={maestrosvg}
                alt="maestro"
              />
              <img
                className="w-14 h-9 p-1 m-1 md:mx-0 border border-gray-300"
                src={mastercardsvg}
                alt="mastercard"
              />
              <img
                className="w-14 h-9 p-1 m-1 md:mx-0 border border-gray-300"
                src={unionpaysvg}
                alt="unionpay"
              />
              <img
                className="w-14 h-9 p-1 m-1 md:mx-0 border border-gray-300"
                src={visasvg}
                alt="visa"
              />
              <img
                className="w-14 h-9 p-1 m-1 md:mx-0 border border-gray-300"
                src={amexsvg}
                alt="amex"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
