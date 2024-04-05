import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import TextExpander from "../../common/TextExpander";
import { HiChevronDown } from "react-icons/hi2";
import { IoFilterCircleOutline, IoClose } from "react-icons/io5";
import {
  TbChevronLeft,
  TbChevronRight,
  TbChevronLeftPipe,
  TbChevronRightPipe,
  TbArrowBarToUp,
} from "react-icons/tb";

import { newinItems } from "../../../../data/header";

import { CategoryFilter } from "./Filters";
import bannerImg from "../../../../assets/images/header/promotion-header3.png";

export default function Listings() {
  const [stickyDiv1Height, setStickyDiv1Height] = useState(0);
  const [stickyDiv2Top, setStickyDiv2Top] = useState(0);
  const isLargeScreen = useMediaQuery({ maxWidth: 1024 });

  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    color: [],
    size: "",
    brand: [],
    price: null, // { maxPrice: "", minPrice: "" },
  });
  function priceRangeMatch(value, priceObj) {
    try {
      const regex = /\$(\d+) - \$(\d+)/;
      const match = value.match(regex);

      if (match) {
        const min = parseInt(match[1]);
        const max = parseInt(match[2]);

        if (
          priceObj &&
          priceObj.minPrice === min &&
          priceObj.maxPrice === max
        ) {
          return priceObj;
        } else {
          console.log("update price", max, " - ", min);
          return { maxPrice: max, minPrice: min };
        }
      } else {
        throw Error("value has not matched format '$max - $min'");
      }
    } catch (error) {
      console.error("Error matching value with regex: ", error);
    }
  }

  const handleFilterChange = (filterType, value, checked) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked && filterType === "price") {
        updatedFilters[filterType] = priceRangeMatch(
          value,
          updatedFilters[filterType]
        );
      } else if (checked && !updatedFilters[filterType].includes(value)) {
        if (filterType === "size") {
          updatedFilters[filterType] = value;
        } else {
          updatedFilters[filterType] = [...updatedFilters[filterType], value];
        }
      } else if (!checked) {
        if (filterType === "price" || filterType === "size") {
          updatedFilters[filterType] = "";
        } else {
          updatedFilters[filterType] = updatedFilters[filterType].filter(
            (filter) => filter !== value
          );
        }
      }
      return updatedFilters;
    });
  };

  useEffect(() => {
    const div1Height = document.getElementById("sticky-div1").clientHeight;
    setStickyDiv1Height(div1Height);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setStickyDiv2Top(stickyDiv1Height + Math.max(0, 50 - scrollTop));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stickyDiv1Height]);

  // useEffect(() => {
  //   console.log("selectedFilters :", selectedFilters);
  // }, [selectedFilters]);

  return (
    <div className="md:container md:mx-auto space-y-8 my-8">
      <Banner />
      <ListingsHeader />
      <hr className="pb-1" role="productsListings" />
      <div>
        <ResultsFiltering />
        <div className="drawer lg:drawer-open">
          <input
            id="my-filters-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className={`drawer-content  ${isLargeScreen && "z-0"} lg:pl-16`}>
            <DrawerContent
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
          <div
            id="sticky-div2"
            style={{ top: `${isLargeScreen ? 0 : stickyDiv2Top}px` }}
            className={`lg:sticky lg:top-${stickyDiv2Top} drawer-side ${
              isLargeScreen && "z-20"
            }`}
          >
            <label
              htmlFor="my-filters-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="w-80 bg-white text-gray-600 text-p-sm">
              <CategoryFilter
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
                handleFilterChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-8 items-center justify-center my-12">
          <ScrollToTopButton />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
function Banner() {
  return (
    <div
      className="min-h-96 flex justify-center items-center bg-fixed bg-parallax bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* <p>Parallax</p> */}
    </div>
  );
}

function ListingsHeader() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isExtraLargeScreen = useMediaQuery({ maxWidth: 1280 });

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
              : isExtraLargeScreen
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

function ResultsFiltering() {
  return (
    <div
      id="sticky-div1"
      className={`py-3 px-2 lg:px-0 bg-white lg:bg-transparent z-10 sticky top-0 bg-transparent text-p-sm text-gray-900 flex flex-row gap-2 lg:gap-0 justify-between items-center tracking-wide`}
    >
      <div className="lg:bg-white h-full lg:w-80">
        <div className="m-2 lg:m-3 lg:w-80 flex flex-col sm:flex-row justify-between items-start gap-x-2 lg:gap-x-0 place-content-center">
          <p className="lg:hidden">
            <label
              htmlFor="my-filters-drawer"
              className="drawer-button lg:hidden"
            >
              <IoFilterCircleOutline className="inline-flex size-5" /> Filter
            </label>
          </p>
          <p className="text-gray-500">2,489 Results</p>
        </div>
      </div>

      <div className="relative inline-flex items-center">
        <select
          className="rounded-none text-gray-600 pl-3 pr-6 py-2 bg-white border border-gray-300 focus:outline-none appearance-none"
          defaultValue="Recommended"
        >
          <option value="recommended">Recommended</option>
          <option value="sortby">Sort By</option>
          <option value="newin">New In</option>
          <option value="hightolow">Price High To Low</option>
          <option value="lowtohigh">Price Low To High</option>
        </select>
        <div className="pr-3 absolute top-1/2 right-0 transform -translate-y-1/2 pointer-events-none">
          <HiChevronDown className="size-5" />
        </div>
      </div>
    </div>
  );
}

function DrawerContent({ selectedFilters, setSelectedFilters }) {
  const isLargeScreen = useMediaQuery({ maxWidth: 1024 });
  return (
    <div className={`flex flex-col gap-y-10 ${isLargeScreen && "z-0"} `}>
      <FilterButtons
        filters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <div className="flex flex-row flex-wrap gap-x-4 gap-y-10 sm:justify-around md:justify-evenly lg:justify-between justify-center items-center">
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
                  <p className="text-p-sm text-gray-500">
                    {resource.newCTALine}
                  </p>
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
    </div>
  );
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`text-gray-900 border border-gray-300 p-2 text-center rounded-full rounded-gray-300 transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <TbArrowBarToUp className="size-5 font-extralight text-gray-600" />
    </button>
  );
};

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample data for anchor tags
  const anchorTags = [
    { text: "Extra 20% discount", href: "#" },
    { text: "New items", href: "#" },
    { text: "Brands", href: "#" },
    { text: "Cloth", href: "#" },
    { text: "Shoes", href: "#" },
    { text: "Bags", href: "#" },
    { text: "Accessories", href: "#" },
    { text: "Decorations", href: "#" },
    { text: "Household products", href: "#" },
    { text: "Pre-owned", href: "#" },
    { text: "Sale", href: "#", className: "text-red-500" },
  ];

  // Calculate the start and end index of items to display
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = Math.min(startIndex + itemsPerPage, anchorTags.length);

  // Filter the anchor tags to display based on the current page
  // const visibleAnchorTags = anchorTags.slice(startIndex, endIndex);
  const totalNumOfPages = Math.ceil(anchorTags.length / itemsPerPage);

  return (
    <div className="w-full border-t border-gray-200 text-gray-600 text-p-sm p-4">
      <nav
        aria-label="Pagination"
        className="flex flex-row items-start w-full justify-between gap-2"
      >
        <div className="flex flex-col sm:flex-row items-start sm:inline-flex sm:space-x-8">
          <a
            href="#"
            className={`mb-4 sm:mb-0 ${
              currentPage > 1
                ? "group hover:text-[#0eb1ea] transition ease-in-out duration-200"
                : "opacity-50 cursor-not-allowed"
            }`}
            aria-disabled={currentPage > 1 ? false : true}
            onClick={() => setCurrentPage(1)}
          >
            <TbChevronLeftPipe className="size-5" />
          </a>

          <a
            href="#"
            className={`space-x-1 inline-flex ${
              currentPage > 1
                ? "group hover:text-[#0eb1ea] transition ease-in-out duration-200"
                : "opacity-50 cursor-not-allowed"
            } `}
            onClick={(e) => {
              currentPage > 1
                ? setCurrentPage(currentPage - 1)
                : e.preventDefault();
            }}
            aria-disabled={currentPage > 1 ? false : true}
          >
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 group-hover:-translate-x-1 transition-transform ease-in-out duration-200"
            >
              <TbChevronLeft className="size-5" />
            </span>
            <p> Previous</p>
          </a>
        </div>

        <p>
          Page {currentPage} of {totalNumOfPages}
        </p>

        <div className="flex flex-col sm:flex-row items-end sm:inline-flex sm:space-x-8">
          <a
            href="#"
            className={`order-2 sm:order-1 space-x-1 inline-flex ${
              currentPage * itemsPerPage < anchorTags.length
                ? "group hover:text-[#0eb1ea] transition ease-in-out duration-200"
                : "opacity-50 cursor-not-allowed"
            } `}
            onClick={(e) => {
              currentPage * itemsPerPage < anchorTags.length
                ? setCurrentPage(currentPage + 1)
                : e.preventDefault();
            }}
            aria-disabled={
              currentPage * itemsPerPage < anchorTags.length ? false : true
            }
          >
            <p>Next </p>
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            >
              <TbChevronRight className="size-5" />
            </span>
          </a>
          <a
            href="#"
            className={`mb-4 sm:mb-0 order-1 sm:order-2
              ${
                currentPage * itemsPerPage < anchorTags.length
                  ? "group hover:text-[#0eb1ea] transition ease-in-out duration-200"
                  : "opacity-50 cursor-not-allowed"
              }
           `}
            aria-disabled={
              currentPage * itemsPerPage < anchorTags.length ? false : true
            }
            onClick={() => setCurrentPage(totalNumOfPages)}
          >
            <TbChevronRightPipe className="size-5" />
          </a>
        </div>
      </nav>
    </div>
  );
};

const FilterButtons = ({ filters, setSelectedFilters }) => {
  const handleRemoveFilter = (filterType, filter) => {
    setSelectedFilters((prevFilters) => {
      if (filterType === "price" || filterType === "size") {
        return {
          ...prevFilters,
          [filterType]: "",
        };
      }

      return {
        ...prevFilters,
        [filterType]: prevFilters[filterType].filter((f) => f !== filter),
      };
    });
  };

  return (
    <div className="w-full my-6 lg:my-0 space-x-1">
      {/* {Object.entries(filters).map(([filterType, filters]) =>
        filters.map((filter, index) => (
          <button
            key={`${filterType}-${filter}-${index}`}
            className="inline-flex items-center py-2 px-3 rounded-none text-p-sm tracking-wide text-gray-600 bg-white border border-gray-300 focus:outline-none appearance-none"
            onClick={() => handleRemoveFilter(filterType, filter)}
          >
            {filter}
            <IoClose className="ml-1 size-5 font-extralight" />
          </button>
        ))
      )} */}
      {Object.entries(filters).map(([filterType, filtersItem]) => (
        <div key={filterType} className="inline space-x-1 space-y-4">
          {filterType === "size" && filtersItem ? (
            <button
              key={`${filterType}-${filtersItem}`}
              className="inline-flex items-center py-2 px-3 rounded-none text-p-sm tracking-wide text-gray-600 bg-white border border-gray-300 focus:outline-none appearance-none"
              onClick={() => handleRemoveFilter("size")}
            >
              {filtersItem}
              <IoClose className="ml-1 size-5 font-extralight" />
            </button>
          ) : null}
          {filterType === "price" && filtersItem ? (
            <button
              key={`${filterType}-${filtersItem}`}
              className="inline-flex items-center py-2 px-3 rounded-none text-p-sm tracking-wide text-gray-600 bg-white border border-gray-300 focus:outline-none appearance-none"
              onClick={() => handleRemoveFilter("price")}
            >
              ${filtersItem.minPrice} - ${filtersItem.maxPrice}
              <IoClose className="ml-1 size-5 font-extralight" />
            </button>
          ) : null}
          {filterType !== "size" &&
            filterType !== "price" &&
            filtersItem.map((filter, index) => (
              <button
                key={`${filterType}-${filter}-${index}`}
                className="inline-flex items-center py-2 px-3 rounded-none text-p-sm tracking-wide text-gray-600 bg-white border border-gray-300 focus:outline-none appearance-none"
                onClick={() => handleRemoveFilter(filterType, filter)}
              >
                {filter}
                <IoClose className="ml-1 size-5 font-extralight" />
              </button>
            ))}
        </div>
      ))}
    </div>
  );
};

FilterButtons.propTypes = {
  filters: PropTypes.any.isRequired,
  setSelectedFilters: PropTypes.func.isRequired,
};
DrawerContent.propTypes = {
  selectedFilters: PropTypes.any,
  setSelectedFilters: PropTypes.func.isRequired,
};
