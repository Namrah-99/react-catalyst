import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import { allfilters } from "../../../../data/filters";
import Button from "../../common/Button";
import { LiaSistrix } from "react-icons/lia";

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
    <div className="min-h-screen lg:min-h-auto flex flex-col justify-between border-t border-gray-200">
      <ul>
        {/* ----------- Close button  */}
        <li className="lg:hidden flex justify-between p-4 border-b-2 border-gray-300">
          <p className="tracking-wide uppercase font-semibold">Filter</p>
          <button
            className="text-[#000] size-5 font-bold"
            onClick={() => {
              // Close the drawer programmatically
              const drawerElement =
                document.getElementById("my-filters-drawer");
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
          <div className="space-y-4 h-52 overflow-y-auto p-2">
            {["brand"].includes(filter.id) && (
              <label className="input input-md input-bordered rounded-none flex items-center gap-2 bg-white">
                <LiaSistrix className="size-5 font-light opacity-40" />
                <input
                  type="text"
                  className="grow placeholder-shown:border-gray-500"
                  placeholder="Search"
                  onClick={(e) => e.stopPropagation()}
                />
              </label>
            )}
            <div>
              {!["category"].includes(filter.id) && (
                <button
                  className={`text-p-xs underline   ${
                    !Object.values(filter.options).some(
                      (option) => option.checked
                    )
                      ? "pointer-events-none text-gray-300 underline-offset-[5px] decoration-gray-300"
                      : "text-gray-600 underline-offset-3 decoration-gray-400"
                  }`}
                >
                  Unselect all
                </button>
              )}
            </div>

            {filter.options.map((option, optionIdx) => (
              <div
                key={`${option.value}-${option.label}`}
                className="flex items-center"
              >
                <input
                  id={`filter-${filter.id}-${optionIdx}`}
                  name={`${filter.id}[]`}
                  type={
                    filter.id === "size" || filter.id === "price"
                      ? "radio"
                      : "checkbox"
                  }
                  defaultChecked={option.checked || false}
                  className={`size-5  focus:ring-gray-500 focus:ring-1      ${
                    filter.id === "size" || filter.id === "price"
                      ? "radio rounded-full border-2 border-gray-300 accent-white unchecked:bg-transparent unchecked:border checked:bg-gray-500 checked:border-2 checked:border-gray-200 checked:ring-1 checked:ring-gray-300"
                      : "border border-gray-300 checkbox checkbox-sm accent-white rounded-none unchecked:bg-transparent unchecked:border checked:bg-gray-300 checked:ring-1 checked:ring-gray-200"
                  } `}
                  value={
                    filter.id !== "price"
                      ? option.value
                      : `$${Object.values(option.value)[0]} - $${
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
    <div className="flex flex-col gap-4" onClick={() => handleToggle(num)}>
      <div className="w-full mx-auto cursor-pointer transition-all duration-200 flex justify-between items-center">
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
