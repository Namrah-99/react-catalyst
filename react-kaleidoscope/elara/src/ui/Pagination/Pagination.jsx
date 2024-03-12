import { useState } from "react";

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
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, anchorTags.length);

  // Filter the anchor tags to display based on the current page
  const visibleAnchorTags = anchorTags.slice(startIndex, endIndex);

  return (
    <div>
      <nav
        aria-label="Pagination"
        className="flex items-center text-gray-600 w-full justify-center gap-2"
      >
        {currentPage > 1 && (
          <a
            href="#"
            className="p-2 mr-4 rounded hover:bg-gray-100"
            onClick={() => setCurrentPage(currentPage - 1)}
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
          </a>
        )}
        {visibleAnchorTags.map((tag, index) => (
          <a
            key={index}
            href={tag.href}
            className={`px-4 py-2 rounded hover:bg-gray-100 ${
              tag.className || ""
            }`}
          >
            {tag.text}
          </a>
        ))}
        {currentPage * itemsPerPage < anchorTags.length && (
          <a
            href="#"
            className="p-2 ml-4 rounded hover:bg-gray-100"
            onClick={() => setCurrentPage(currentPage + 1)}
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
          </a>
        )}
      </nav>
    </div>
  );
};

export default Pagination;
