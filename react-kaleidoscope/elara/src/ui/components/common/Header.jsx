import PropTypes from "prop-types";
import Button from "./Button";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";

import { carouselItems } from "../../../data/header";

import { useEffect, useState } from "react";

export default function Header() {
  return (
    <div className="border-t-2 border-gray-100">
      <MainHeader />
    </div>
  );
}

function MainHeader() {
  const [curr, setCurr] = useState(0);

  const currentItem = carouselItems.find((item) => item.id === curr);
  console.log(currentItem.color);
  return (
    <>
      <div
        className={`${currentItem.color} md:pt-10 text-gray-900`}
        id="main-header-div"
      >
        <div className="container mx-auto lg:px-40 grid grid-cols-1 grid-rows-none items-stretch md:grid-cols-2 md:grid-rows-2 gap-4 md:gap- pt-5 md:pt-0">
          <div className="col-start-1 md:col-start-2 md:row-start-2 overflow-hidden">
            <div className="space-y-3 flex flex-col h-full justify-end md:pb-10">
              <p>Where would you like to start?</p>

              <div className="grid grid-cols-3 gap-5">
                <div className="col-span-1">
                  <Button classes="w-full">Women</Button>
                </div>
                <div className="col-span-1">
                  <Button classes="w-full">Men</Button>
                </div>
                <div className="col-span-1">
                  <Button classes="w-full">Kids</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-1 md:row-span-2 md:col-start-1 md:row-start-1 overflow-hidden w-full h-full bg-orange-300">
            {/* <div className="max-w-full max-h-full mx-auto "> */}
            <Carousel autoSlide={true} curr={curr} setCurr={setCurr}>
              {carouselItems.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  className="w-full h-full object-contain object-center max-h-full"
                  alt="..."
                />
              ))}
            </Carousel>
            {/* </div> */}
          </div>
          <div className="col-start-1 md:col-start-2 md:row-start-1 overflow-hidden">
            {currentItem.icon}
            <p className="text-h-sm md:text-h-md font-semibold">
              {currentItem.title}
            </p>
            <p className="text-p-lg md:text-p-lg">{currentItem.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Carousel({
  curr,
  setCurr,
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  // const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    console.log(curr);
    document
      .getElementById("main-header-div")
      .classList.add(`bg-${slides[curr].color}`);
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    console.log(curr);
    document
      .getElementById("main-header-div")
      .classList.add(`bg-${slides[curr].color}`);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative w-full h-full">
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={prev}
          className="rounded-full md:rounded-none shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <HiOutlineArrowSmallLeft size={36} />
        </button>
        <button
          onClick={next}
          className="rounded-full md:rounded-none shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <HiOutlineArrowSmallRight size={36} />
        </button>
      </div>

      <div className="absolute bottom-0 right-0 left-0">
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
      </div>
    </div>
  );
}
Carousel.propTypes = {
  curr: PropTypes.number.isRequired,
  setCurr: PropTypes.func.isRequired,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
  children: PropTypes.node.isRequired,
};
