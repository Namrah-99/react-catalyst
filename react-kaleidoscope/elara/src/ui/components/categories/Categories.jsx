import PropTypes from "prop-types";
import Button from "../common/Button";
import MyLink from "../common/MyLink";
import { LiaHeart } from "react-icons/lia";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import { newinItems } from "../../../data/header";

export default function Categories() {
  return (
    <div className="container mx-auto text-gray-900 my-16 space-y-16">
      {/* <Titles
        text1="New items from the collections of the best brands"
        text2="View the selection"
      /> */}
      <CategoriesCard>
        <SwiperSlider initialSlideIndex={1} />
      </CategoriesCard>

      <div className="lg:w-[72rem] mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 md:gap-8 lg:gap-12">
        <div className="flex flex-col">
          <img
            src="https://cdn.pixabay.com/photo/2022/08/17/15/46/family-7392843_960_720.jpg"
            alt="our img"
            className="w-full h-5/6 object-cover object-center"
          />
          <div className="flex-1 flex flex-col justify-center">
            <p className="uppercase">NEW BAGS AND SHOES</p>
            <p className="text-p-sm">
              The best accessories from spring collections.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2020/04/17/14/07/athlete-5055367_960_720.jpg"
            alt="Ad image"
            className="w-full min-h-96 md:h-[36rem] lg:h-[48rem] object-cover object-center"
          />
        </div>
      </div>
      <DisplayWomenCatCards />
      <div className="w-full">
        <img
          src="https://cdn.pixabay.com/photo/2020/04/17/14/07/athlete-5055367_960_720.jpg"
          alt="Ad image"
          className="mx-auto w-[72rem] min-h-96 md:h-[40rem] object-cover object-center"
        />
      </div>
      <CategoriesCard>
        <SwiperSlider initialSlideIndex={6} />
      </CategoriesCard>
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

function CategoriesCard({ children }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-auto md:gap-4">
        <div>
          <p>New items from the collections of the best brands</p>
        </div>
        <div className="h-fit md:col-span-2 md:row-start-2">{children}</div>
        <div className="flex flex-col md:flex-row md:justify-end place-items-center">
          {/* <div className="mx-auto w-20 flex justify-center items-center my-5 md:hidden">
            <div className="w-1/3 h-0.5 bg-black"></div>
            <div className="w-2/3 h-0.5 bg-gray-300"></div>
          </div> */}
          <Button
            classes="w-1/2 sm:w-fit bg-transparent text-stone-950 border border-stone-950 hover:text-stone-50 hover:bg-black hover:bg-opacity-65 hover:border-1 hover:border-black"
            navigateTo="/products"
          >
            View the selection
          </Button>
        </div>
      </div>
    </>
  );
}

function SwiperSlider({ initialSlideIndex }) {
  return (
    <>
      <Swiper
        initialSlide={initialSlideIndex}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        rewind={true}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          // type: "progressbar",
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
            enabled: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 45,
            // enabled: false, autoplay is stopped
            enabled: true,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
            enabled: true,
          },
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
        style={{ "--swiper-pagination-color": "black" }}
      >
        {newinItems.map((resource, index) => {
          return (
            <SwiperSlide key={`${resource.title}${index}`} className="min-w-60">
              <MyLink
                to={resource.link}
                className="w-full h-full absolute inset-0 border-3 border-lime-400"
              >
                <div className="w-full h-[28rem] group relative space-y-2 flex flex-col">
                  {/* <div className="flex-none w-full h-80 overflow-hidden rounded-none group-hover:opacity-75"> */}
                  <div className="group relative flex-none w-full h-80 overflow-hidden rounded-none group-hover:opacity-75">
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
                  <div className="block absolute top-1 right-3 transition-opacity duration-300 z-10">
                    <LiaHeart className="size-5" />
                  </div>
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
              </MyLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

function DisplayWomenCatCards() {
  return (
    <>
      <p className="text-h-md text-center">The main thing for the week</p>
      <div className="flex flex-row flex-wrap gap-4 justify-evenly items-center">
        {newinItems.slice(7, 12).map((resource, index) => {
          return (
            <div
              key={resource.title + index}
              className="w-full md:w-64 h-[28rem] group relative space-y-6"
            >
              <div className="group relative w-full h-96 overflow-hidden rounded-none group-hover:opacity-75">
                <img
                  src={resource.imageUrl1 || ""}
                  alt={resource.title}
                  className="h-full w-full object-cover object-center transition-opacity duration-300"
                />
              </div>

              <div className="text-gray-900 flex flex-col justify-center">
                <p className="text-p-md uppercase ">{resource.brand}</p>

                <p className="text-p-sm">{resource.shortDescription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

Titles.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.node.isRequired,
};
SwiperSlider.propTypes = {
  initialSlideIndex: PropTypes.number.isRequired,
};
CategoriesCard.propTypes = {
  children: PropTypes.node,
};
