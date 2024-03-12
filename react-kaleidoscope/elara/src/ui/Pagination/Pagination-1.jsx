import { useState, useEffect } from "react";
import DropdownMegaMenu from "../Navbar/DropdownMegaMenu";
import MegaMenuContent from "../Navbar/MegaMenuContent";

const Pagination1 = () => {
  const anchorTags = [
    { text: "New In", href: "#" },
    { text: "Sale", href: "#", className: "text-red-500" },
    { text: "Shop By", href: "#" },
    { text: "Designers", href: "#" },
    { text: "Clothing", href: "#" },
    { text: "Shoes", href: "#" },
    { text: "Bags", href: "#" },
    { text: "Jewelry & Watches", href: "#" },
    { text: "Accessories", href: "#" },
    { text: "Beauty", href: "#" },
    { text: "Home & Gifts", href: "#" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [showItems, setShowItems] = useState(8);

  function getShowItems() {
    const width = window.innerWidth;
    if (width < 576) return 2; // Small screens show 2 items
    if (width < 768) return 4; // Medium screens show 4 items
    if (width < 1024) return 6; // Large screens show 6 items
    return 8; // Larger screens show 8 items
  }

  const handleResize = () => {
    setShowItems(getShowItems());
  };

  useEffect(() => {
    handleResize(); // Initial call to set showItems based on initial width
    window.addEventListener("resize", handleResize); // Listen for window resize events
    return () => window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
  }, []);

  const visibleAnchorTags = anchorTags.slice(
    startIndex,
    startIndex + showItems
  );

  const goToPreviousPage = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNextPage = () => {
    setStartIndex((prevIndex) =>
      Math.min(anchorTags.length - showItems, prevIndex + 1)
    );
  };

  return (
    <>
      <nav
        aria-label="Pagination"
        className="flex items-center text-gray-600 w-full justify-center md:gap-2"
      >
        {startIndex !== 0 && (
          <button
            onClick={goToPreviousPage}
            className="p-2 mr-4 rounded hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {visibleAnchorTags.map((tag, index) => (
          <DropdownMegaMenu
            text={tag.text}
            key={index}
            classes={`${tag.className} theme-color1 hover:font-semibold`}
          >
            <MegaMenuContent tag={tag.text} />
          </DropdownMegaMenu>
        ))}
        {startIndex + showItems < anchorTags.length && (
          <button
            onClick={goToNextPage}
            className="p-2 ml-4 rounded hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </nav>
    </>
  );
};

export default Pagination1;
