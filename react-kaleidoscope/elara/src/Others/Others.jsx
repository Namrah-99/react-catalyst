import { TECarousel, TECarouselItem } from "tw-elements-react";

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

import klein1 from "../assets/images/header/klein1.png";
import klein2 from "../assets/images/header/klein2.png";

import slider1 from "../assets/images/header/slider1.png";
import slider2 from "../assets/images/header/slider2.png";
import slider3 from "../assets/images/header/slider3.png";
import slider4 from "../assets/images/header/slider4.png";
import slider5 from "../assets/images/header/slider5.png";

// Data
import { newinItems, threecard } from "../data/header";
// import data from "../data/carousel.json";

import MultiItemCarousel from "../ui/Carousel/MultiItemCarousel";
// import promotion3 from "../assets/images/header/promotion-header3.png";

export default function Others() {
  return (
    <div className="my-12 space-y-12">
      <div className="container mx-auto">
        <NewArrivals />
      </div>
      <VideoOverlayText />
      <div className="container mx-auto md:container md:mx-auto space-y-12">
        <ThreeCards />
        <TwoCards />
        <SlidersSlide />
        <TopStories />
        <Slider />
      </div>
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
    <div className="h-[16rem] md:h-[28rem] w-full relative">
      {/* Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        src={video2}
      ></video>
      {/* Text overlay */}
      <div className="absolute bottom-0 max-w-full container mx-auto py-16">
        <div className="container mx-auto text-black space-y-2">
          <p className="text-h-md">Practically perfect</p>
          <p className="text-p-sm">
            Elevate your everyday in new-season pieces designed for a great time
          </p>
          <Button classes="w-1/2 sm:w-fit lg:px-8">Shop winter&#39;24</Button>
        </div>
      </div>
    </div>
  );
}

function NewArrivals() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-2 md:grid-cols-3 md:grid-rows-2 items-start">
      <div className="h-full flex flex-col justify-end">
        <p className="text-p-sm text-gray-500 uppercase md:tracking-[.2rem] tracking-wide">
          1,065 new items
        </p>
        <p className="text-h-lg text-gray-900">New In</p>
        <p className="text-p-sm text-gray-900 pt-2">
          Stay ahead of the style curve with our latest arrivals
        </p>
      </div>
      <div className="row-span-2 md:col-span-2 md:row-span-2 h-fit">
        <MultiItemCarousel>
          {newinItems.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative max-w-auto w-42 h-56 md:w-60 md:h-72 snap-start"
              >
                <a
                  href={resource.link}
                  className="h-full w-full"
                  // className="h-full w-full bg-cover bg-no-repeat z-0 border border-orange-500"
                  // style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                >
                  <img
                    src={resource.imageUrl || ""}
                    alt={resource.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-65 bg-gray-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-p-sm uppercase">
                    {resource.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </MultiItemCarousel>
      </div>
      <div className="row-start-4 md:row-start-2 flex flex-col items-center md:items-start md:justify-start ">
        <div className="mx-auto w-20 flex justify-center items-center my-5 md:hidden">
          <div className="w-1/3 h-0.5 bg-black"></div>
          <div className="w-2/3 h-0.5 bg-gray-300"></div>
        </div>
        {/* <Button classes="block mx-auto w-1/3 md:w-1/3 md:mx-0 md:w-auto mt-5 md:mt-1"> */}
        <Button classes="block w-1/2 sm:w-fit lg:px-8">Shop New In</Button>
      </div>
    </div>
  );
}

function ThreeCards() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-6 text-gray-900 justify-between">
      {/* {Array(3).fill().map((_, index) => ( */}
      {/* {[...Array(3)].map((_, index) => ( */}
      {threecard.slice(0, 3).map((item, index) => (
        <div key={index} className="h-fit">
          <div className="group relative space-y-4 h-full">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-none lg:aspect-none group-hover:opacity-75 xl:h-[32rem] lg:h-fit">
              <img
                src={item.image}
                alt="Front of men&#039;s Basic Tee in black."
                className="h-full w-full object-cover sm:object-contain md:object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="space-y-2">
              <p className="text-p-md">
                <a href="#">
                  {/* <span aria-hidden="true" className="absolute inset-0"></span> */}
                  {item.title}
                </a>
              </p>
              <p className="text-p-sm">{item.description}</p>
              <p>
                <a
                  href="#"
                  className="text-p-xs cursor-pointer underline underline-offset-4 hover:text-[#0eb1ea] hover:font-semibold hover:tracking-wide"
                >
                  {item.linkTitle}
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TwoCards() {
  return (
    <div className="space-y-3 lg:space-y-6">
      <div className="w-full h-72 md:h-80 lg:h-96 xl:h-[28rem] md:flex md:flex-row">
        <div className="w-full md:w-1/2 h-full">
          <img
            src={klein1}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-cover object-bottom lg:h-full lg:w-full"
          />
        </div>
        <div className="w-full md:w-1/2 h-full md:visible invisible">
          <img
            src={klein2}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-cover object-bottom lg:h-full lg:w-full"
          />
        </div>
      </div>
      <div className="text-center text-gray-900 md:space-y-2 lg:space-y-3">
        <p className="text-h-lg leading-tight md:leading-none">
          New In: Clavin Klein USA SS24
        </p>
        <p className="text-p-sm">
          Discover just-landed arrivals from the unmissable new collection
        </p>
        <p>
          <a
            href="#"
            className="text-p-xs cursor-pointer underline underline-offset-4 hover:text-[#0eb1ea] hover:font-semibold hover:tracking-wide"
          >
            Shop the runway
          </a>
        </p>
      </div>
    </div>
  );
}

function SlidersSlide() {
  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-full">
          <div className="flex [&:hover>div]:w-16 md:[&:hover>div]:w-36 [&>div:hover]:w-full">
            <div className="group relative h-72 md:h-80 lg:h-96 xl:h-[34rem] w-full cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500 md:duration-1000">
              <img
                className="w-full hover:delay-800 delay-200 h-full object-cover transition-all duration-1000 hover:-translate-y-4 hover:ease-in-out group-hover:scale-30"
                src={slider3}
                alt="slider3"
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-[#e5decb]-500/20 to-stone group-hover:visible"></div>
            </div>
            <div className="group relative h-72 md:h-80 lg:h-96 xl:h-[34rem] w-16 md:w-36 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500 md:duration-1000">
              <img
                className="w-full hover:delay-800 delay-200 h-full object-cover transition-all duration-1000 hover:-translate-y-4 hover:ease-in-out group-hover:scale-30"
                src={slider1}
                alt="slider1"
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-[#e5decb]-500/20 to-stone group-hover:visible"></div>
            </div>
            <div className="group relative h-72 md:h-80 lg:h-96 xl:h-[34rem] w-16 md:w-36 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500 md:duration-1000">
              <img
                className="w-full hover:delay-800 delay-200 h-full object-cover transition-all duration-1000 hover:-translate-y-4 hover:ease-in-out group-hover:scale-30"
                src={slider2}
                alt="slider2"
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-[#e5decb]-500/20 to-stone group-hover:visible"></div>
            </div>
            <div className="group relative h-72 md:h-80 lg:h-96 xl:h-[34rem] w-16 md:w-36 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500 md:duration-1000">
              <img
                className="w-full hover:delay-800 delay-200 h-full object-cover transition-all duration-1000 hover:-translate-y-4 hover:ease-in-out group-hover:scale-30"
                src={slider4}
                alt="slider4"
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-[#e5decb]-500/20 to-stone group-hover:visible"></div>
            </div>
            <div className="group relative h-72 md:h-80 lg:h-96 xl:h-[34rem] w-16 md:w-36 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-500 md:duration-1000">
              <img
                className="w-full hover:delay-800 delay-200 h-full object-cover transition-all duration-1000 hover:-translate-y-4 hover:ease-in-out group-hover:scale-30"
                src={slider5}
                alt="slider5"
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-[#e5decb]-500/20 to-stone group-hover:visible"></div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#e5decb]-500/20 to-stone sm:w-0 text-center">
          <div className="absolute inset-x-1 sm:inset-x-5 -top-[12%] sm:-top-[4%] text-6xl">
            <p className="theme-font-family3 font-primary font-extrabold text-red-800 uppercase">
              elara
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-900 m-8">
        <p className="text-h-lg font-extrabold leading-tight">
          Verve & Vogue
          <span>
            <i className="block theme-font-family3 font-primary text-h-lg font-extrabold tracking-wider">
              with Kayako Higuchi
            </i>
          </span>
        </p>
        <p>
          Unveil a Symphony of Style: Explore the Refined Elegance of Verve &
          Vogue&#39;s Latest Collection, Where Every Stitch Tells a Story of
          Timeless Fashion and Modern Luxury. Discover the Art of Dressing with
          Grace and Glamour, Crafted for the Fashion Connoisseur in You.
          <a
            href="#"
            className="block pt-4 text-p-xs cursor-pointer underline underline-offset-4 hover:text-[#0eb1ea] hover:font-semibold hover:tracking-wide"
          >
            Read now & shop the shoot
          </a>
        </p>
      </div>
      <hr className="border-gray-300 m-8" />
    </>
  );
}

function TopStories() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-6 text-gray-900 justify-between">
        {/* {Array(3).fill().map((_, index) => ( */}
        {/* {[...Array(3)].map((_, index) => ( */}
        {threecard.map((item, index) => (
          <div key={index} className="h-fit">
            <div className="group relative space-y-4 h-full">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-none lg:aspect-none group-hover:opacity-75 xl:h-[32rem] lg:h-fit">
                <img
                  src={item.image}
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-cover sm:object-contain md:object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="space-y-2">
                <p className="text-p-md">
                  <a href="#">
                    {/* <span aria-hidden="true" className="absolute inset-0"></span> */}
                    {item.title}
                  </a>
                </p>
                <p className="text-p-sm">{item.description}</p>
                <p>
                  <a
                    href="#"
                    className="text-p-xs cursor-pointer underline underline-offset-4 hover:text-[#0eb1ea] hover:font-semibold hover:tracking-wide"
                  >
                    {item.linkTitle}
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

{
  /* <div className="flex min-h-screen items-center justify-center bg-neutral-800">
<div className="mx-auto max-w-6xl px-6"> your content </div>
        <div className="fixed bottom-10 right-10">
          <p className="text-xl font-semibold text-white">
          Made by Namrah
            <a href="https://pixabay.com" className="lowercase text-blue-500">
              pixabay.com
            </a>
          </p>
        </div>
      </div> */
}
