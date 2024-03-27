import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import TextExpander from "../../common/TextExpander";
import { SlArrowDown } from "react-icons/sl";
import { IoFilterCircleOutline } from "react-icons/io5";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

import { newinItems } from "../../../../data/header";
import { useState } from "react";
import Button from "../../common/Button";

export default function Listings() {
  return (
    <div className="md:container px-4 md:px-0 mx-auto space-y-8 my-8">
      <ListingsHeader />
      <hr className="border-blue-gray-50" role="productsListings" />
      <div>
        <div className="z-10 sticky top-0 p-4 bg-white text-p-sm text-gray-900 flex flex-row gap-2 justify-between items-center tracking-wide">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-x-2 lg:gap-x-0 place-content-center">
            <p className="lg:hidden">
              <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                <IoFilterCircleOutline className="inline-flex size-5" /> Filter
              </label>
            </p>
            <p className="text-gray-500">2,489 Results</p>
          </div>

          <div className="relative inline-flex items-center">
            <select
              className="rounded-none text-gray-600 pl-3 pr-6 py-2 bg-white border border-gray-400 focus:outline-none appearance-none"
              defaultValue="Recommended"
            >
              <option value="recommended">Recommended</option>
              <option value="sortby">Sort By</option>
              <option value="newin">New In</option>
              <option value="hightolow">Price High To Low</option>
              <option value="lowtohigh">Price Low To High</option>
            </select>
            <div className="pr-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none">
              <SlArrowDown />
            </div>
          </div>
        </div>
        <div className={`w-full`}>
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              <DrawerContent />
            </div>
            <CategoryFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

function ListingsHeader() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isMediumScreen = useMediaQuery({ maxWidth: 1280 });

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 mx-auto">
      <article className="text-gray-900 text-center">
        <p className="text-gray-900 text-p-md tracking-wide">Bags</p>
        <TextExpander
          expanded={!isSmallScreen}
          collapsedNumWords={15}
          expandButtonText=" more"
          collapseButtonText=" less"
          buttonClassName={`${!isSmallScreen && "hidden"} font-medium`}
          className={`text-gray-600 text-p-sm ${
            isSmallScreen
              ? "text-pretty"
              : isMediumScreen
              ? "text-balance text-justify"
              : "text-pretty"
          } tracking-tight`}
        >
          Explore our collection of women&#39;s designer bags. With designs
          including tote bags, designer shoulder bags, leather clutches and
          backpacks, the choices are endless. Whether you need a designer clutch
          for a special event or a designer purse for your everyday look,
          we&#39;re sure you&#39;ll find a designer handbag to suit you in our
          range.
        </TextExpander>
      </article>
    </div>
  );
}

function DrawerContent() {
  return (
    <div className="flex flex-row flex-wrap gap-x-4 gap-y-10 justify-evenly items-center">
      {newinItems.map((resource, index) => {
        return (
          <div
            key={resource.title + index}
            className="h-[28rem] group relative space-y-2 flex flex-col"
          >
            <div className="border border-gray-100 group relative flex-none w-72 h-3/4 overflow-hidden rounded-none group-hover:opacity-75">
              <img
                src={resource.imageUrl1 || ""}
                alt={resource.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-opacity duration-300"
              />
              <img
                src={resource.imageUrl2 || ""}
                alt="Second Image"
                className="hidden group-hover:block h-full w-full object-cover object-center absolute top-0 left-0 transition-opacity duration-300"
              />
            </div>
            {/* <div className="block absolute top-1 right-3 transition-opacity duration-300 z-10">
            <LiaHeart className="size-5" />
          </div> */}
            <div className="flex flex-col justify-between h-full w-full">
              <div className="">
                <p className="text-p-sm text-gray-500">{resource.newCTALine}</p>
                <p className="text-p-md text-black font-medium">
                  {resource.brand}
                </p>
                <p className="text-p-sm">{resource.shortDescription}</p>
              </div>
              <p className="text-p-sm">${resource.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const filters = [
  {
    title: "Category",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Designer",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Color",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Price",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
];
const CategoryFilter = () => {
  const [currentOpen, setCurrentOpen] = useState(0);
  return (
    <>
      <div className="z-20 drawer-side w-full h-full text-p-sm">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay h-full"
        ></label>
        <div className="relative pr-4 sm:pr-0 w-full sm:w-80 min-h-full bg-white flex flex-col justify-between text-gray-900">
          <ul>
            <li className="flex justify-between p-4 border-b-2 border-gray-300">
              <p className="tracking-wide uppercase font-semibold">Filter</p>
              <button
                className="text-[#000] size-5 font-bold"
                onClick={() => {
                  // Close the drawer programmatically
                  const drawerElement = document.getElementById("my-drawer-2");
                  drawerElement.checked = false; // Uncheck the checkbox to close
                }}
              >
                ✕
              </button>
            </li>
            {filters.map((filter, index) => (
              <li key={filter.title} className="p-4 border-b border-gray-200">
                <Accordion
                  currentOpen={currentOpen}
                  onCurrenOpen={setCurrentOpen}
                  title={filter.title}
                  num={index}
                >
                  {filter.text}
                </Accordion>
              </li>
            ))}
          </ul>
          <div className="lg:hidden w-full p-4 space-y-4">
            <hr className="border-t border-gray-300" role="categoryFiltering" />
            <div className="w-full flex justify-between gap-10 sm:gap-4">
              <Button classes="tracking-wider font-light flex-1 border border-gray-400 bg-white text-stone-400 hover:bg-black hover:bg-opacity-65 hover:border-1 hover:border-black">
                Clear All
              </Button>
              <Button classes="flex-1 font-light text-white-0 tracking-wider">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function Accordion({ currentOpen, onCurrenOpen, children, title, num }) {
  const isOpen = currentOpen === num;

  function handleToggle(num) {
    onCurrenOpen(isOpen ? null : num);
  }
  return (
    <div className="flex flex-col" onClick={() => handleToggle(num)}>
      <div className="w-full mx-auto cursor-pointer transition-all duration-200 flex justify-between items-center">
        {/* <p className="accordion-number">{num < 9 ? `0${num + 1}` : num + 1}</p> */}
        <div>
          <p className="uppercase font-medium">{title}</p>
          <p className="text-p-xs text-gray-500">All</p>
        </div>
        <p>
          {isOpen ? (
            <HiChevronUp className="size-5" />
          ) : (
            <HiChevronDown className="size-5" />
          )}
        </p>
      </div>

      {isOpen ? (
        <div className="w-full mx-auto transition-all duration-200">
          {children}
        </div>
      ) : null}
    </div>
  );
}
Accordion.propTypes = {
  currentOpen: PropTypes.number,
  onCurrenOpen: PropTypes.func,
  title: PropTypes.string,
  num: PropTypes.number,
  children: PropTypes.node.isRequired,
};

// Category Filter

// const [openFilter, setOpenFilter] = useState(true);
// const [sortOptions, setSortOptions] = useState([
//   { name: "Most Popular", href: "#", current: true },
//   { name: "Newest", href: "#", current: false },
//   { name: "Best Rating", href: "#", current: false },
//   { name: "Price: Low to High", href: "#", current: false },
//   { name: "Price: High to Low", href: "#", current: false },
// ]);
// const subCategories = [
//   { name: "Sneaker", href: "#" },
//   { name: "Mocassins", href: "#" },
//   { name: "Flip flop", href: "#" },
//   { name: "Running", href: "#" },
//   { name: "Black Friday", href: "#" },
// ];
// const filters = [
//   {
//     id: "color",
//     name: "Color",
//     options: [
//       {
//         value: "black",
//         label: "Black",
//         className: "bg-black text-black",
//         checked: false,
//       },
//       {
//         value: "white",
//         label: "Yellow",
//         className: "bg-yellow-400 text-yellow-400",
//         checked: false,
//       },
//       {
//         value: "blue",
//         label: "Blue",
//         className: "bg-blue-400 text-blue-400",
//         checked: true,
//       },
//       {
//         value: "brown",
//         label: "Purple",
//         className: "bg-purple-400 text-purple-400",
//         checked: false,
//       },
//       {
//         value: "green",
//         label: "Green",
//         className: "bg-green-400 text-green-400",
//         checked: false,
//       },
//       {
//         value: "purple",
//         label: "Red",
//         className: "bg-red-400 text-red-400",
//         checked: false,
//       },
//     ],
//   },
//   {
//     id: "size",
//     name: "Size",
//     options: [
//       { value: "XS", label: "XS", checked: false },
//       { value: "SM", label: "SM", checked: false },
//       { value: "M", label: "M", checked: false },
//       { value: "L", label: "L", checked: false },
//       { value: "XL", label: "XL", checked: false },
//       { value: "XXL", label: "XXL", checked: true },
//     ],
//   },
//   {
//     id: "brand",
//     name: "Brand",
//     options: [
//       { value: "Buliclo", label: "Buliclo", checked: false },
//       { value: "Carlotin", label: "Carlotin", checked: false },
//       { value: "Merguinez", label: "Merguinez", checked: false },
//       { value: "Swifty", label: "Swifty", checked: true },
//       { value: "TamTam", label: "TamTam", checked: false },
//       { value: "wakaFlaca", label: "WakaFlaca", checked: false },
//       { value: "Zaram", label: "Zaram", checked: false },
//       { value: "Zebulus", label: "Zebulus", checked: false },
//     ],
//   },
// ];

// const sortBy = (value) => {
//   let newState = [...sortOptions];
//   newState.map((option) => (option.current = false));
//   newState.find((option) => option.name === value).current = true;
//   setSortOptions(newState);
// };

// useEffect(() => {
//   window.addEventListener("resize", () => {
//     const viewport = window.innerWidth;
//     if (viewport >= 1024) return setOpenFilter(true);
//   });
// });
