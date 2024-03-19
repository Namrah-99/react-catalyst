import { TECarousel, TECarouselItem } from "tw-elements-react";
import PropTypes from "prop-types";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

import Button from "../ui/components/common/Button";

import kids1 from "../assets/images/header/1.jpg";
import kids2 from "../assets/images/header/2.jpg";
import kids3 from "../assets/images/header/3.jpg";
import kids4 from "../assets/images/header/4.jpg";
import kids5 from "../assets/images/header/5.jpg";
import kids6 from "../assets/images/header/6.jpg";
import women1 from "../assets/images/header/women1.jpg";
import men1 from "../assets/images/header/men1.jpg";
import women2 from "../assets/images/header/women2.jpg";
import men2 from "../assets/images/header/men2.jpg";
import women3 from "../assets/images/header/women3.jpg";
import men3 from "../assets/images/header/men3.jpg";
import promotion1 from "../assets/images/header/promotion-header1.png";
import promotion2 from "../assets/images/header/promotion-header2.png";
import video2 from "../assets/videos/2.mp4";

import { newinItems } from "../data/header";

import { useEffect, useState } from "react";

// import promotion3 from "../assets/images/header/promotion-header3.png";

export default function Others() {
  return (
    <div className="container mx-auto space-y-10 border border-red-400">
      <VideoOverlayText />
      <NewArrivals />

      <Slider />
    </div>
  );
}

function Slider() {
  return (
    <>
      <ImageGallery />
      <TECarousel ride="carousel">
        <div className="relative w-full md:h-[32rem] overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="flex flex-wrap justify-between h-full">
              <img
                src={women1}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
              <img
                src={men1}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
              <img
                src={kids1}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
              <img
                src={kids2}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="flex flex-wrap justify-between h-full">
              <img
                src={women2}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
              <img
                src={men2}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
              <img
                src={kids3}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
              <img
                src={kids4}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="flex flex-wrap justify-between h-full">
              <img
                src={women3}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
              <img
                src={men3}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
              <img
                src={kids5}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
              <img
                src={kids6}
                className="w-1/2 sm:w-1/4 object-cover object-center"
                alt="..."
              />
            </div>
            {/* <div className="flex w-full h-full">
          <img
            src={women3}
            className="w-1/4 object-cover object-center"
            alt="..."
          />{" "}
          <img
            src={men3}
            className="w-1/4 object-cover object-center"
            alt="..."
          />{" "}
          <img
            src={kids5}
            className="w-1/4 object-cover object-center"
            alt="..."
          />{" "}
          <img
            src={kids6}
            className="w-1/4 object-cover object-center"
            alt="..."
          />{" "}
        </div> */}
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}

function ImageGallery() {
  return (
    <div className="w-full grid grid-cols-4 grid-rows-9 gap-4 my-4">
      <div className="row-span-3">
        <img
          src={men2}
          className="w-full h-full object-cover object-center"
          alt="..."
        />
      </div>
      <div className="row-span-4">
        <img
          src={women1}
          className="w-full h-full object-cover object-center"
          alt="..."
        />
      </div>
      <div className="row-span-4 col-start-4 row-start-3">
        <img
          src={women3}
          className="w-full h-full object-cover object-center"
          alt="..."
        />
      </div>
      <div className="row-span-4 col-start-1 row-start-4">
        <img
          src={women2}
          className="w-full h-full object-cover object-center"
          alt="..."
        />
      </div>
      <div className="row-span-3 col-start-3 row-start-3">
        <img
          src={men3}
          className="w-full h-full object-cover object-center"
          alt="..."
        />
      </div>
      <div className="row-span-4 col-start-3 row-start-6">
        <img
          src={men1}
          className="w-full h-full object-cover object-center"
          alt="..."
        />
      </div>
      <div className="row-span-3 col-start-2 row-start-5">
        <img
          src={kids1}
          className="w-full h-full object-cover object-center"
          alt="..."
        />
      </div>
      <div className="row-span-3 col-start-4 row-start-7">
        <img
          src={kids2}
          className="w-full h-full object-cover object-center"
          alt="..."
        />
      </div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-8">
        <img
          src={promotion1}
          className="w-full h-full object-cover object-center"
          alt="..."
        />
      </div>
      <div className="col-span-2 row-span-2 col-start-3 row-start-1">
        <img
          src={promotion2}
          className="w-full h-full object-cover object-center"
          alt="..."
        />
      </div>
    </div>
  );
}

function VideoOverlayText() {
  return (
    <div className="h-[16rem] md:h-[24rem] w-full relative">
      {/* Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        src={video2}
      ></video>
      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 mb-12 ml-12 text-black space-y-2">
        <p className="text-h-md">Practically perfect</p>
        <p className="text-p-sm">
          Elevate your everyday in new-season pieces designed for a great time
        </p>
        <Button classes="w-1/2">Shop winter&#39;24</Button>
      </div>
    </div>
  );
}

function NewArrivals() {
  function chunkArray(array, size) {
    return array.reduce((acc, _, index) => {
      if (index % size === 0) {
        acc.push(array.slice(index, index + size));
      }
      return acc;
    }, []);
  }

  const chunkedItems = chunkArray(newinItems, 4);

  return (
    <div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-full gap-x-8 gap-y-20 xl:grid-cols-3">
          <div className="max-w-2xl my-auto">
            <p className="text-p-sm text-gray-500 uppercase md:tracking-[.2rem] tracking-wide">
              1,065 new items
            </p>
            <p className="text-h-lg text-gray-900">New In</p>
            <p className="text-p-sm text-gray-900 pt-2">
              Stay ahead of the style curve with our latest arrivals
            </p>

            <p className="text-center"></p>
            <div className="mx-auto w-20 flex justify-center items-center mt-16 md:hidden">
              <div className="w-1/3 h-0.5 bg-black"></div>
              <div className="w-2/3 h-0.5 bg-gray-300"></div>
            </div>
            <Button classes="block mx-auto w-1/3 md:w-1/2 md:mx-0 md:w-auto mt-5">
              Shop New In
            </Button>
          </div>

          <div className="xl:col-span-2 bg-orange-300">
            <div className="border border-blue-600 mx-auto w-3/4 overflow-hidden">
              <NewArrivalsCarousel>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8"> */}
                {newinItems.map((item, index) => (
                  // <div key={index} className="group relative">
                  //   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div key={index} className="w-full h-full">
                    <img
                      src={item.image}
                      alt="Front of men's Basic Tee in black."
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  //   </div>
                  //   <p className="mt-2 text-center text-sm font-medium text-gray-900 uppercase">
                  //     {item.title}
                  //   </p>
                  // </div>
                ))}
                {/* </div> */}

                {/* {chunkedItems.map((chunk, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="flex mx-auto w-4/5 border border-red-950"
                  >
                    {chunk.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="grid grid-cols-4 grid-rows-1 max-w-full"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8 max-w-full"
                      >
                        <div className="group relative">
                          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                              src={item.image}
                              alt="Front of men's Basic Tee in black."
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </div>
                          <p className="mt-2 text-center text-sm font-medium text-gray-900 uppercase">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))} */}
              </NewArrivalsCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewArrivalsCarousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative bg-red-700 w-full h-full">
      <div
        className="flex transition-transform ease-out duration-500 w-full h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <HiOutlineChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <HiOutlineChevronRight size={40} />
        </button>
      </div>

      {/* <div className="absolute bottom-0 right-0 left-0">
        <div className="flex items-center justify-center gap-0">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-full h-1  
              ${curr === i ? "p-0 bg-black" : "bg-white bg-opacity-90"}
            `}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
NewArrivalsCarousel.propTypes = {
  // curr: PropTypes.number.isRequired,
  // setCurr: PropTypes.func.isRequired,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
  children: PropTypes.node.isRequired,
  slides: PropTypes.any,
};
