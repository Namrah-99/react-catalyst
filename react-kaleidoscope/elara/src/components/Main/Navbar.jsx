import {
  LiaUser,
  LiaHeart,
  LiaShoppingBagSolid,
  LiaSistrix,
} from "react-icons/lia";

import Pagination1 from "../../ui/Pagination/Pagination-1";
import Logo from "../../ui/Navbar/Logo";
import MenuItem from "../../ui/Navbar/MenuItem";
import SearchModal from "../../ui/Navbar/SearchModal";
import DropDownIconsMenu from "../../ui/Navbar/DropDownIconsMenu";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font relative">
        <div className="flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Logo />
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center my-3 md:mt-0">
            <MenuItem text="Women" href="#" />
            <MenuItem text="Men" href="#" />
            <MenuItem text="Kids" href="#" />
          </nav>

          <div className="flex flex-wrap sm:ml-4 space-x-4 items-center justify-center">
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base"
              onClick={() =>
                document.getElementById("my_modal_search").showModal()
              }
            >
              <span>
                <LiaSistrix className="w-4 h-4 ml-1" />
              </span>
              &nbsp; Search
            </button>
            <DropDownIconsMenu
              ariaLabel="User signup/login"
              href="#"
              title="To come in"
              icon={
                <LiaUser className="size-7" data-popover-target="user-menu" />
              }
            >
              <UserForm />
            </DropDownIconsMenu>
            <DropDownIconsMenu
              ariaLabel="Items in wishlist: 0."
              href="#"
              title="Wishlist"
              icon={
                <LiaHeart className="size-7" data-popover-target="user-menu" />
              }
            >
              <UserForm />
            </DropDownIconsMenu>
            <DropDownIconsMenu
              ariaLabel="Items in cart: 0."
              href="#"
              title="Cart"
              icon={
                <LiaShoppingBagSolid
                  className="size-7"
                  data-popover-target="cart-menu"
                />
              }
            >
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-8 shadow bg-[#ffffff] w-80 space-y-8 text-center"
                role="menu"
                data-popover="cart-menu"
                data-popover-placement="bottom"
              >
                <LiaShoppingBagSolid className="size-7 mx-auto" />
                <p className="font-semibold text-p-md">
                  Your Shopping Bag is empty
                </p>
                <a className="inline-block underline underline-offset-4 font-normal">
                  Shop What&#39;s New
                </a>
              </div>
            </DropDownIconsMenu>
            <DropDownIconsMenu
              ariaLabel="User icon"
              href="#"
              title="Logged in user"
              icon={
                <img
                  alt="tania andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  className="relative inline-block h-12 w-12 cursor-pointer rounded-full object-cover object-center"
                  data-popover-target="profile-menu"
                />
              }
            >
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-[#ffffff] w-52 mt-0"
                role="menu"
                data-popover="profile-menu"
                data-popover-placement="bottom"
                // className="absolute z-10 flex min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
              >
                <button
                  tabIndex="-1"
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    My Profile
                  </p>
                </button>
                <button
                  tabIndex="-1"
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    Edit Profile
                  </p>
                </button>
                <button
                  tabIndex="-1"
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                    ></path>
                  </svg>
                  <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    Inbox
                  </p>
                </button>
                <button
                  tabIndex="-1"
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                    ></path>
                  </svg>
                  <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    Help
                  </p>
                </button>
                <hr
                  className="my-2 border-blue-gray-50"
                  tabIndex="-1"
                  role="menuitem"
                />
                <button
                  tabIndex="-1"
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                    ></path>
                  </svg>
                  <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    Sign Out
                  </p>
                </button>
              </ul>
            </DropDownIconsMenu>
          </div>
          <SearchModal />
        </div>
        <Pagination1 />
      </header>
    </>
  );
};

export default Navbar;

const UserForm = () => (
  <form
    tabIndex={0}
    className="dropdown-content z-[1] menu p-4 shadow bg-[#ffffff] w-80 space-y-4 text-center"
    role="menu"
    data-popover="user-menu"
    data-popover-placement="bottom"
  >
    <p>MY ACCOUNT</p>
    <hr className="border-blue-gray-50" tabIndex="-1" role="menuitem" />
    <input
      type="text"
      id="simple-email"
      className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      placeholder="Email"
    />
    <input
      type="password"
      id="simple-email"
      className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      placeholder="Password"
    />
    <button className="bg-stone-950 text-stone-50 p-2">Sign in</button>
    <a href="#" className="inline-block underline underline-offset-4">
      Forgotten Your Password?
    </a>
    <hr className="border-blue-gray-50" tabIndex="-1" role="menuitem" />
    <p className="font-semibold">
      Don&#39;t have an account? &nbsp;
      <a className="inline-block underline underline-offset-4 font-normal">
        Register now
      </a>
    </p>
  </form>
);
