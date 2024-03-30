import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import { allfilters } from "../../../../data/filters";
import Button from "../../common/Button";

export const CategoryFilter = ({
  selectedFilters,
  setSelectedFilters,
  handleFilterChange,
}) => {
  const [currentOpen, setCurrentOpen] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Set currentOpen based on screen size
      if (window.innerWidth <= 640) {
        setCurrentOpen(-1); // Set to -1 to close all accordions
      } else {
        setCurrentOpen(0); // Set to 0 to open the first accordion
      }
    };

    // Set initial currentOpen state based on screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Only run this effect once on component mount

  return (
    // <div className="lg:sticky lg:top-0 lg:z-20 z-10 drawer-side w-full h-full text-p-sm ">
    // <div className="lg:sticky lg:top-0 lg:z-20 z-10 w-full h-full text-p-sm">
    // <div>
    //   <label
    //     htmlFor="my-drawer-2"
    //     aria-label="close sidebar"
    //     className="drawer-overlay h-full"
    //   ></label>
    //   <div className=" flex flex-col justify-between text-gray-900 bg-white">
    <div className="min-h-screen lg:min-h-auto flex flex-col justify-between border-t border-gray-200">
      <ul>
        {/* ----------- Close button  */}
        <li className="lg:hidden flex justify-between p-4 border-b-2 border-gray-300">
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
        {/* ----------- Filters lists */}
        <FiltersList
          currentOpen={currentOpen}
          onCurrenOpen={setCurrentOpen}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          handleFilterChange={handleFilterChange}
        />
      </ul>
      {/* ----------- Clear All and Apply Buttons for Mobile screen  */}
      <div className="lg:hidden w-full p-4 space-y-4">
        <hr className="border-t border-gray-300" role="categoryFiltering" />
        <div className="w-full flex justify-between gap-10 sm:gap-4">
          <Button classes="text-stone-500 tracking-wider font-light flex-1 border border-gray-400 bg-transparent hover:bg-black hover:bg-opacity-65 hover:border-1 hover:border-black">
            Clear All
          </Button>
          <Button classes="flex-1 font-light text-white-0 tracking-wider">
            Apply
          </Button>
        </div>
      </div>
    </div>
    // </div>
  );
};
CategoryFilter.propTypes = {
  selectedFilters: PropTypes.any,
  setSelectedFilters: PropTypes.func,
  handleFilterChange: PropTypes.func,
};
function FiltersList({
  currentOpen,
  onCurrenOpen,
  selectedFilters,
  setSelectedFilters,
  handleFilterChange,
}) {
  return (
    <>
      {allfilters.map((filter, index) => (
        <li key={filter.name + index} className="p-4 border-b border-gray-200">
          <Accordion
            currentOpen={currentOpen}
            onCurrenOpen={onCurrenOpen}
            title={filter.name}
            num={index}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            handleFilterChange={handleFilterChange}
          >
            {/* ------------------------------------ Accordion Content  */}
            {/* {filter.text} */}
            {/* ------------------- Category (Radio buttons) */}

            {/* ------------------- Brand (Checkboxes) */}
            {/* ------------------- Color (Checkboxes) */}
            {/* ------------------- Price (Checkboxes) */}
            {/* ------------------- Size (Checkboxes) */}

            {/* <div className="space-y-6 py-6">
              {filter.options.map((option, optionIdx) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={`filter-mobile-${filter.id}-${optionIdx}`}
                    name={`${filter.id}[]`}
                    defaultValue={option.value}
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={`filter-mobile-${filter.id}-${optionIdx}`}
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div> */}
            {/* ------------------------------------ Accordion Content  */}
          </Accordion>
        </li>
      ))}
    </>
  );
}
FiltersList.propTypes = {
  currentOpen: PropTypes.number,
  onCurrenOpen: PropTypes.func,
  title: PropTypes.string,
  num: PropTypes.number,
  children: PropTypes.node,
  selectedFilters: PropTypes.any,
  setSelectedFilters: PropTypes.func,
  handleFilterChange: PropTypes.func,
};

function Accordion({
  currentOpen,
  onCurrenOpen,
  title,
  num,
  handleFilterChange,
}) {
  const isOpen = currentOpen === num;

  function handleToggle(num) {
    onCurrenOpen(isOpen ? null : num);
  }

  function renderFilterOptions(filter) {
    switch (filter.id) {
      case "color":
      case "size":
      case "category":
      case "brand":
      case "price":
        return (
          <div className="space-y-6 py-6">
            {filter.options.map((option, optionIdx) => (
              <div
                key={`${option.value}-${option.label}`}
                className="flex items-center"
              >
                <input
                  id={`filter-${filter.id}-${optionIdx}`}
                  name={`${filter.id}[]`}
                  //   defaultValue={option.value}
                  type={
                    filter.id === "size" || filter.id === "price"
                      ? "radio"
                      : "checkbox"
                  }
                  //   defaultChecked={option.checked}
                  className={`size-5 border border-gray-300 focus:ring-gray-500 focus:ring-0  ${
                    (filter.id !== "size" || filter.id !== "price") &&
                    "unchecked:bg-transparent"
                  }     ${
                    filter.id === "size" || filter.id === "price"
                      ? "rounded-full radio border-gray-300 checked:bg-white accent-gray-500 fill-group-400"
                      : "accent-white rounded-none checkbox checkbox-sm checked:bg-white"
                  }  ${
                    option.checked
                      ? "bg-gray-300 ring-2 ring-gray-300"
                      : "bg-transparent border"
                  }`}
                  value={
                    filter.id !== "price"
                      ? option.value
                      : //   JSON.stringify(option.value)
                        `$${Object.values(option.value)[0]} - $${
                          Object.values(option.value)[1]
                        }`
                  }
                  onChange={(e) => {
                    handleFilterChange(
                      filter.id,
                      e.target.value,
                      e.target.checked
                    );
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
                <label
                  htmlFor={`filter-${filter.id}-${optionIdx}`}
                  className="ml-3 min-w-0 flex-1 text-gray-500"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
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
          {renderFilterOptions(allfilters[num])}
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
  children: PropTypes.node,
  selectedFilters: PropTypes.any,
  setSelectedFilters: PropTypes.func,
  handleFilterChange: PropTypes.func,
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
