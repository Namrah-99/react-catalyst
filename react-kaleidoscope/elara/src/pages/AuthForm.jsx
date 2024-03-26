import { useLocation, useNavigate } from "react-router-dom";

import Button from "../ui/components/common/Button";
import MyLink from "../ui/components/common/MyLink";

export default function SignUp() {
  const navigate = useNavigate();
  const { pathname: path } = useLocation();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const targetPath = path === "/signup" ? "/signin" : "/account";
    navigate(targetPath);
  };

  return (
    <form
      className="mx-auto w-full px-4 md:px-0 md:w-1/3 space-y-6 text-gray-600 my-16"
      role={path === "/signup" ? "signup" : "signin"}
      onSubmit={handleFormSubmit}
    >
      <p className="text-h-sm">{path === "/signup" ? "Register" : "Sign in"}</p>
      <div>
        <label htmlFor="email" className="font-normal">
          Email
        </label>
        <input
          className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0eb1ea] focus:border-transparent"
          type="email"
          id="email"
          name="email"
          placeholder=""
        />
      </div>
      <div>
        <label htmlFor="password" className="font-normal">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0eb1ea] focus:border-transparent"
          placeholder=""
        />
      </div>
      {path === "/signup" && (
        <>
          {" "}
          <div>
            <label htmlFor="firstname" className="font-normal">
              First name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0eb1ea] focus:border-transparent"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="lastname" className="font-normal">
              Last name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0eb1ea] focus:border-transparent"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="dateOfBirth" className="font-normal">
              Date of birth (optional)
            </label>
            <div id="dateOfBirth" className="group relative flex">
              <input
                type="text"
                name="month"
                className="focus:z-10 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0eb1ea] focus:border-transparent"
                placeholder="MM"
              />
              <input
                type="text"
                name="month"
                className="focus:z-10 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0eb1ea] focus:border-transparent"
                placeholder="DD"
              />
              <input
                type="text"
                name="month"
                className="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#0eb1ea] focus:border-transparent"
                placeholder="YYYY"
              />
            </div>
          </div>
        </>
      )}
      {path === "/signup" ? (
        <p className="text-p-xs">
          By registering, your account will be subject to the Terms and
          Conditions & Privacy Policy
        </p>
      ) : (
        <a href="#" className="block">
          Forgot Your Password?
        </a>
      )}

      <Button classes="w-full bg-stone-950 text-stone-50 p-2" type="submit">
        {path === "/signup" ? "Create Account" : "Sign in"}
      </Button>
      <div className="mb-9">
        <hr
          className="border-blue-gray-50 mt-12"
          role={path === "/signup" ? "signup" : "signin"}
        />
      </div>
      <p className="font-semibold text-center">
        {path === "/signup"
          ? "Already have an account?"
          : `Don\u0027t have an account?`}
      </p>

      <Button
        classes="w-full bg-transparent text-stone-950 border border-stone-950 hover:text-stone-50 hover:bg-black hover:bg-opacity-65"
        type="button"
      >
        <MyLink
          text={path === "/signup" ? "Sign in" : "Create Account"}
          to={path === "/signin" ? "/signup" : "/signin"}
          className="w-full bg-transparent text-stone-950 border border-stone-950 hover:text-stone-50 hover:bg-black hover:bg-opacity-65"
        ></MyLink>
      </Button>
    </form>
  );
}
