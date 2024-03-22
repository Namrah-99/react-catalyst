// import PropTypes from "prop-types";
// import { useState, useRef, useEffect } from "react";

// export default function MultiItemCarousel({
//   children,
//   autoSlide = false,
//   autoSlideInterval = 3000,
// }) {
//   const maxScrollWidth = useRef(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carousel = useRef(null);
//   const itemsPerPage = useRef(1);
//   const [slideInterval, setSlideInterval] = useState(null);

//   useEffect(() => {
//     if (window.matchMedia("(min-width: 640px)").matches) {
//       itemsPerPage.current = 2;
//     } else if (window.matchMedia("(min-width: 1024px)").matches) {
//       itemsPerPage.current = 3;
//     } else if (window.matchMedia("(min-width: 1280px)").matches) {
//       itemsPerPage.current = 4;
//     }

//     setCurrentIndex(0);
//     maxScrollWidth.current = carousel.current
//       ? carousel.current.scrollWidth - carousel.current.offsetWidth
//       : 0;
//   }, [children]);
//   const totalSlides = Math.ceil(children.length / itemsPerPage.current);

//   const movePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevState) => prevState - 1);
//     } else {
//       setCurrentIndex(children.length - 1);
//     }
//   };

//   const moveNext = () => {
//     const lastItemIndex = children.length - itemsPerPage.current;

//     if (currentIndex < lastItemIndex) {
//       setCurrentIndex((prevState) => prevState + 1);
//     } else {
//       setCurrentIndex(0);
//       if (autoSlide) {
//         clearInterval(slideInterval);
//         setSlideInterval(setInterval(moveNext, autoSlideInterval));
//       }
//     }
//   };

//   const isDisabled = (direction) => {
//     if (direction === "prev") {
//       return currentIndex <= 0;
//     }

//     if (direction === "next" && carousel.current !== null) {
//       return currentIndex >= totalSlides - 1;
//     }

//     return false;
//   };

//   useEffect(() => {
//     if (!autoSlide) return;
//     setSlideInterval(setInterval(moveNext, autoSlideInterval));
//     return () => clearInterval(slideInterval);
//   }, []);

//   // const maxScrollWidth = useRef(0);
//   // const [currentIndex, setCurrentIndex] = useState(0);
//   // const carousel = useRef(null);

//   // let itemsPerPage = 1;

//   // if (window.matchMedia("(min-width: 640px)").matches) {
//   //   itemsPerPage = 2;
//   // }

//   // if (window.matchMedia("(min-width: 1024px)").matches) {
//   //   itemsPerPage = 3;
//   // }

//   // if (window.matchMedia("(min-width: 1280px)").matches) {
//   //   itemsPerPage = 4;
//   // }
//   // const totalSlides = Math.ceil(children.length / itemsPerPage);
//   // // const movePrev = () => {
//   // //   if (currentIndex > 0) {
//   // //     setCurrentIndex((prevState) => prevState - 1);
//   // //   }
//   // // };
//   // // const moveNext = () => {
//   // //   if (
//   // //     carousel.current !== null &&
//   // //     carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
//   // //   ) {
//   // //     setCurrentIndex((prevState) => prevState + 1);
//   // //   }
//   // // };
//   // const movePrev = () => {
//   //   if (currentIndex > 0) {
//   //     setCurrentIndex((prevState) => prevState - 1);
//   //   } else {
//   //     // If at the beginning, move to the last item
//   //     setCurrentIndex(children.length - 1);
//   //   }
//   // };

//   // const moveNext = () => {
//   //   const lastItemIndex = children.length - itemsPerPage;

//   //   if (currentIndex < lastItemIndex) {
//   //     setCurrentIndex((prevState) => prevState + 1);
//   //   } else {
//   //     // If at the end, move to the first item
//   //     setCurrentIndex(0);
//   //   }
//   // };
//   // const isDisabled = (direction) => {
//   //   if (direction === "prev") {
//   //     return currentIndex <= 0;
//   //   }

//   //   if (direction === "next" && carousel.current !== null) {
//   //     return currentIndex >= totalSlides - 1;
//   //   }

//   //   return false;
//   // };

//   // // const isDisabled = (direction) => {
//   // //   if (direction === "prev") {
//   // //     return currentIndex <= 0;
//   // //   }

//   // //   if (direction === "next" && carousel.current !== null) {
//   // //     const totalItems =
//   // //       Math.ceil(maxScrollWidth.current / carousel.current.offsetWidth) + 1;
//   // //     return currentIndex >= totalItems - 1;
//   // //   }

//   // //   return false;
//   // // };

//   // // const isDisabled = (direction) => {
//   // //   if (direction === "prev") {
//   // //     return currentIndex <= 0;
//   // //   }

//   // //   if (direction === "next" && carousel.current !== null) {
//   // //     return (
//   // //       carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
//   // //     );
//   // //   }

//   // //   return false;
//   // // };
//   // // useEffect(() => {
//   // //   if (carousel !== null && carousel.current !== null) {
//   // //     carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
//   // //   }
//   // // }, [currentIndex]);

//   // useEffect(() => {
//   //   if (carousel.current !== null) {
//   //     const index = currentIndex * itemsPerPage;
//   //     const scrollLeft = carousel.current.children[index].offsetLeft;
//   //     carousel.current.scrollLeft = scrollLeft;
//   //   }
//   // }, [currentIndex]);

//   useEffect(() => {
//     if (carousel.current !== null) {
//       const index = currentIndex * itemsPerPage.current;
//       const child = carousel.current.children[index];
//       if (child) {
//         const scrollLeft = child.offsetLeft;
//         carousel.current.scrollLeft = scrollLeft;
//       }
//     }
//   }, [currentIndex]);
//   // useEffect(() => {
//   //   if (!autoSlide) return;
//   //   const slideInterval = setInterval(moveNext, autoSlideInterval);
//   //   return () => clearInterval(slideInterval);
//   // }, []);
//   return (
//     <div className="relative overflow-hidden">
//       <div className="flex justify-between absolute top left w-full h-full">
//         <button
//           onClick={movePrev}
//           className="group hover:bg-gray-500/75 w-10 h-full text-center opacity-75 hover:opacity-65 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//           disabled={isDisabled("prev")}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-12 w-full lg:w-20 lg:-ml-5 text-gray-500/75 group-hover:text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//           <span className="sr-only">Prev</span>
//         </button>
//         <button
//           onClick={moveNext}
//           className="group hover:bg-gray-500/75 text-white w-10 h-full text-center opacity-75 hover:opacity-65 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
//           disabled={isDisabled("next")}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-12 w-full lg:w-20 lg:-ml-5 text-gray-500/75 group-hover:text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </button>
//       </div>
//       <div
//         ref={carousel}
//         className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
//       >
//         {children}
//       </div>
//       <div className="flex justify-center mt-4 lg:hidden">
//         {[...Array(totalSlides)].map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
//               currentIndex === index ? "bg-gray-400" : "bg-gray-200"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }
// MultiItemCarousel.propTypes = {
//   children: PropTypes.any.isRequired,
//   autoSlide: PropTypes.bool,
//   autoSlideInterval: PropTypes.any,
// };

import PropTypes from "prop-types";
import { useState, useRef, useEffect, useCallback } from "react";

export default function MultiItemCarousel({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const itemsPerPage = useRef(1);
  const moveNext = useCallback(() => {
    const lastItemIndex = children.length - itemsPerPage.current;

    if (currentIndex < lastItemIndex) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  }, [children.length, currentIndex, itemsPerPage]);
  useEffect(() => {
    if (window.matchMedia("(min-width: 640px)").matches) {
      itemsPerPage.current = 2;
    } else if (window.matchMedia("(min-width: 1024px)").matches) {
      itemsPerPage.current = 3;
    } else if (window.matchMedia("(min-width: 1280px)").matches) {
      itemsPerPage.current = 4;
    }

    setCurrentIndex(0);
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, [children]);

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        moveNext();
      }, autoSlideInterval);
      const slideInterval = setInterval(interval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, moveNext]);

  const totalSlides = Math.ceil(children.length / itemsPerPage.current);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else {
      setCurrentIndex(children.length - 1);
    }
  };

  // const moveNext = () => {
  //   const lastItemIndex = children.length - itemsPerPage.current;

  //   if (currentIndex < lastItemIndex) {
  //     setCurrentIndex((prevState) => prevState + 1);
  //   } else {
  //     setCurrentIndex(0);
  //   }
  // };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return currentIndex >= totalSlides - 1;
    }

    return false;
  };

  useEffect(() => {
    if (carousel.current !== null) {
      const index = currentIndex * itemsPerPage.current;
      const child = carousel.current.children[index];
      if (child) {
        const scrollLeft = child.offsetLeft;
        carousel.current.scrollLeft = scrollLeft;
      }
    }
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-between absolute top left w-full h-full">
        <button
          onClick={movePrev}
          className="group hover:bg-gray-500/75 w-10 h-full text-center opacity-75 hover:opacity-65 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          disabled={isDisabled("prev")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-full lg:w-20 lg:-ml-5 text-gray-500/75 group-hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Prev</span>
        </button>
        <button
          onClick={moveNext}
          className="group hover:bg-gray-500/75 text-white w-10 h-full text-center opacity-75 hover:opacity-65 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          disabled={isDisabled("next")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-full lg:w-20 lg:-ml-5 text-gray-500/75 group-hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
      <div
        ref={carousel}
        className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
      >
        {children}
      </div>
      <div className="flex justify-center mt-4 lg:hidden">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-gray-400" : "bg-gray-200"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
MultiItemCarousel.propTypes = {
  children: PropTypes.any.isRequired,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.any,
};
