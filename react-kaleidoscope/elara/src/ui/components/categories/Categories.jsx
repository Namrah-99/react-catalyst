import PropTypes from "prop-types";
import Button from "../common/Button";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { newinItems } from "../../../data/header";

export default function Categories() {
  return (
    <div className="text-gray-900">
      {/* <Titles
        text1="New items from the collections of the best brands"
        text2="View the selection"
      /> */}
      <CategoriesCard />
    </div>
  );
}

function Titles({ text1, text2 }) {
  return (
    <div className="flex justify-between text-gray-900">
      <h1>{text1}</h1>
      <Button classes="bg-transparent text-stone-950 border border-stone-950 hover:text-stone-50 hover:bg-black hover:bg-opacity-65 hover:border-1 hover:border-black">
        {text2}
      </Button>
    </div>
  );
}
Titles.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.node.isRequired,
};

function CategoriesCard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-3 md:gap-4">
        <div className="border border-red-400">
          <p>New items from the collections of the best brands</p>
        </div>
        <div className="md:col-span-2 md:row-start-2 border border-lime-400">
          <SwiperSlider />
        </div>
        <div className="border border-pink-400">
          <div className="mx-auto w-20 flex justify-center items-center my-5 md:hidden">
            <div className="w-1/3 h-0.5 bg-black"></div>
            <div className="w-2/3 h-0.5 bg-gray-300"></div>
          </div>
          <Button className="block w-1/2 sm:w-fit lg:px-8 ml-2 mt-5 md:mt-1">
            View the selection
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-3 md:gap-4">
        <div className="border border-red-400">
          <p>New items from the collections of the best brands</p>
        </div>
        <div className="md:col-span-2 md:row-start-2 border border--lime-400">
          <SwiperSlider />
        </div>
        <div className="border border-pink-400">
          <div className="mx-auto w-20 flex justify-center items-center my-5 md:hidden">
            <div className="w-1/3 h-0.5 bg-black"></div>
            <div className="w-2/3 h-0.5 bg-gray-300"></div>
          </div>
          {/* <Button classes="block mx-auto w-1/3 md:w-1/3 md:mx-0 md:w-auto mt-5 md:mt-1"> */}
          <Button classes="block w-1/2 sm:w-fit lg:px-8 ml-2 ">
            View the selection
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-3 gap-2 md:grid-cols-3 md:grid-rows-2 items-start">
        <div className="h-full flex flex-col justify-end ml-2">
          <p>New items from the collections of the best brands</p>
        </div>
        <div className="row-span-2 md:col-span-2 md:row-span-2 h-fit">
          <SwiperSlider />
        </div>
        <div className="row-start-4 md:row-start-2 flex flex-col items-center md:items-start md:justify-start ">
          <div className="mx-auto w-20 flex justify-center items-center my-5 md:hidden">
            <div className="w-1/3 h-0.5 bg-black"></div>
            <div className="w-2/3 h-0.5 bg-gray-300"></div>
          </div>
          {/* <Button classes="block mx-auto w-1/3 md:w-1/3 md:mx-0 md:w-auto mt-5 md:mt-1"> */}
          <Button classes="block w-1/2 sm:w-fit lg:px-8 ml-2">
            View the selection
          </Button>
        </div>
      </div>
    </>
  );
}

function SwiperSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {newinItems.map((resource, index) => {
          return (
            <SwiperSlide
              key={index}
              className="text-center relative max-w-auto w-42 h-56 md:w-60 md:h-72 snap-start"
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
