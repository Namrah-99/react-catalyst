import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { LiaHeart } from "react-icons/lia";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { allfilters, completeLook } from "../../../../data/filters";
import Button from "../../common/Button";

// import { Navigation, Pagination } from "swiper";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { newinItems } from "../../../../data/header";
import MyLink from "../../common/MyLink";

export default function Details() {
  return (
    <div className="md:container md:mx-auto my-16 space-y-16">
      <ProductCard />
      <CompleteLook />
      <Recommendations />
      {/* <BreadCrumb />
      <Accordions />
      <CompleteLook />
      <Recommendations />
      <RecentlyViewed />
      <WhyElara />
      <ContactUs />
      <DontMissAThing /> */}
    </div>
  );
}

function ImageMagnifier({ imageUrl }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });

    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });

    // Check if the mouse is inside the main div
    if (
      e.pageX >= left &&
      e.pageX <= left + width &&
      e.pageY >= top &&
      e.pageY <= top + height
    ) {
      setShowMagnifier(true);
    } else {
      setShowMagnifier(false);
    }
  };

  return (
    <div className="w-full h-full md:w-[32rem] md:h-[70vh]">
      <div
        className="relative h-full w-full"
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseHover}
      >
        <img className="w-full h-full" src={imageUrl} alt="" />

        {showMagnifier && (
          <div
            style={{
              position: "absolute",
              left: `${cursorPosition.x - 100}px`,
              top: `${cursorPosition.y - 100}px`,
              pointerEvents: "none",
            }}
          >
            <div
              className="h-32 w-32 md:h-48 md:w-48 border-2 border-[#fff]"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: `${position.x}% ${position.y}%`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
ImageMagnifier.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

const ProductCard = () => {
  const [mainImage, setMainImage] = useState(
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
  ); // Initial main image

  const hoverImages = [
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  ];

  const handleHoverImage = (image) => {
    setMainImage(image);
  };

  return (
    <>
      {/* ============================================ New Layout  */}
      <div className="text-gray-900 grid grid-cols-1 grid-rows-none items-stretch lg:grid-cols-2 lg:grid-rows-auto gap-4 lg:gap-0 pt-5 lg:pt-0">
        {/* ============================================ A Div  */}
        <div className="w-full col-start-1 lg:col-start-1 lg:row-start-1 overflow-hidden flex flex-col-reverse md:flex-row gap-3 lg:gap-10 justify-center items-center">
          {/* <div className="shadow-md w-full flex flex-col-reverse md:flex-row gap-3 lg:gap-10 justify-center"> */}
          <div className="flex flex-wrap flex-row md:flex-col gap-4 justify-center">
            {hoverImages.map((image, index) => (
              <div
                key={index + image}
                className={`h-10 w-10 md:h-14 md:w-12 cursor-pointer border border-gray-200 rounded-none p-1 ${
                  image === mainImage ? "border-1 border-gray-900" : ""
                }`}
                onClick={() => handleHoverImage(image)}
                onMouseEnter={() => handleHoverImage(image)} // Hover event handler
              >
                <img
                  className="h-full w-full object-center object-cover"
                  src={image}
                  alt="Product Thumbnail"
                />
              </div>
            ))}
          </div>
          {/* <div className="shadow-lg overflow-hidden flex justify-center"> */}
          <ImageMagnifier imageUrl={mainImage} />
          {/* </div> */}
          {/* </div> */}
        </div>
        {/* ============================================ B Div  */}
        <div className="col-start-1 lg:row-span-2 lg:col-start-2 lg:row-start-1 overflow-hidden w-full h-full min-h-[fit-content]">
          <div className="w-full lg:w-2/3 mx-auto flex gap-3 flex-col justify-between">
            <div className="flex flex-col gap-3 lg:gap-4 justify-center">
              <p className="text-p-sm text-gray-500 uppercase tracking-widest">
                Trending Now
              </p>
              <p className="uppercase text-h-lg tracking-wide">Khaite</p>
              <p className="text-p-sm">Wes pintucked silk-organza maxi dress</p>
              <span className="text-p-md font-medium">$50.25</span>
              {/* Reviews */}
              <div>
                <p className="sr-only">Reviews</p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1 items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <FaRegStar
                        key={rating}
                        // className={`
                        //   ${
                        //     product.rating > rating
                        //       ? "text-gray-900"
                        //       : "text-gray-200"
                        //   }
                        //   "h-5 w-5 flex-shrink-0"
                        // `}
                        className="size-5"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-[#ef7324] hover:text-[#0eb1ea]"
                  >
                    43 reviews
                  </a>
                </div>
              </div>
              {/* Colors */}
              <div className="flex flex-col gap-2">
                <p className="text-gray-900 flex gap-3">
                  Color: <span className="text-gray-900">Red</span>
                </p>
                <div className="flex gap-2 md:gap-3 justify-start w-full">
                  {allfilters.at(1).options.map((option, optionIdx) => (
                    <div
                      key={`${option.value}-${option.label}`}
                      className="flex items-center"
                    >
                      <input
                        id={`option-${option.id}-${optionIdx}`}
                        name={`${option.id}[]`}
                        type="radio"
                        defaultChecked={option.checked || false}
                        className="size-7 peer h-0 w-0 opacity-0 focus:outline-none"
                        value={option.value}
                        // onChange={(e) => {
                        //   handleFilterChange(option.id, e.target.value, e.target.checked);
                        // }}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <label
                        htmlFor={`option-${option.id}-${optionIdx}`}
                        className={`size-7 rounded-full cursor-pointer ${
                          option.className.split(/\s+/)[0]
                        } border-2 border-gray-300 peer-checked:border-4 peer-checked:border-white peer-checked:ring-1 peer-checked:ring-black peer-focus-visible:ring peer-focus-visible:ring-red-700 peer-focus-visible:ring-offset-2`}
                        // peer-checked:bg-orange-500
                      ></label>
                    </div>
                  ))}
                </div>
              </div>
              {/* Sizes */}
              <div>
                <p className="text-gray-900 flex justify-between">
                  Size:
                  <a
                    className="text-gray-500 text-p-xs md:text-p-sm underline underline-offset-4 hover:text-[#0eb1ea]"
                    href="#"
                  >
                    View size guide
                  </a>
                </p>
                <div className="mt-4">
                  <label className="sr-only">Choose a size</label>
                  <div className="flex flex-wrap gap-4">
                    {allfilters.at(2).options.map((size, idx) => (
                      <label
                        key={size.value + idx}
                        className={`max-w-20 ${
                          size.inStock
                            ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                            : "cursor-not-allowed bg-gray-50 text-gray-200"
                        } group relative flex items-center justify-center rounded-none border py-2 px-3 text-p-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 ${
                          size.inStock ? "" : "pointer-events-none"
                        }`}
                      >
                        <input
                          type="radio"
                          name="size"
                          value={size.value}
                          className="sr-only"
                          disabled={!size.inStock}
                          // onChange={() => setSelectedSize(size)}
                        />
                        {size.value}
                        {size.inStock ? (
                          <span
                            className={`${
                              size.inStock
                                ? size.checked
                                  ? "border-indigo-500"
                                  : "border-transparent"
                                : "border-gray-200"
                            } pointer-events-none absolute -inset-px rounded-md ${
                              size.checked ? "border" : "border-2"
                            }`}
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-none border-1 border-gray-200"
                          >
                            <svg
                              className="absolute inset-0 h-full w-full stroke-1 text-gray-300"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              stroke="currentColor"
                            >
                              <line
                                x1={0}
                                y1={100}
                                x2={100}
                                y2={0}
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="w-full md:w-1/2 lg:w-full flex flex-col gap-2 md:gap-3 pt-6 md:mx-auto lg:mx-0">
                <Button className="">Add to Cart</Button>
                <Button classes="flex items-center">
                  <LiaHeart className="size-5" />
                  <span className="flex-1"> Add to Wish List </span>
                </Button>
              </div>
              {/* Accordions */}
              <AccordionsList />
            </div>
            <p className="text-p-xs">Product Code 1647 5973 3319 2922</p>
          </div>
        </div>
        {/* ============================================ C dIV  */}
        <div className="w-full col-start-1 lg:col-start-1 lg:row-start-2 overflow-hidden min-h-fit flex items-start lg:justify-center pt-3">
          <div className="w-full lg:w-2/3 flex flex-col justify-start gap-2 lg:gap-1">
            <p className="uppercase text-p-xs text-gray-900 leading-tight tracking-tight">
              View More
            </p>
            <div className="text-p-sm flex gap-4 flex-wrap text-gray-400">
              <a href="#">KHAITE</a>
              <a href="#">Clothing</a>
              <a href="#">Dresses</a>
              <a href="#">Midi Dresses</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function AccordionsList() {
  const [currentOpen, setCurrentOpen] = useState(0);
  return (
    <div className="space-y-6 py-6">
      {[
        "Editors' Notes",
        "Size & Fit",
        "Details & Care",
        "Reviews",
        "Delivery & Returns",
      ].map((filter, index) => (
        <Accordion
          key={filter + index}
          currentOpen={currentOpen}
          onCurrenOpen={setCurrentOpen}
          title={filter}
          num={index}
        >
          {/* ------------------------------------ Accordion Content  */}
        </Accordion>
      ))}
    </div>
  );
}
function Accordion({ currentOpen, onCurrenOpen, title, num }) {
  const isOpen = currentOpen === num;

  function handleToggle(num) {
    onCurrenOpen(isOpen ? null : num);
  }

  function renderAccordionContent(title) {
    return (
      <div className="overflow-y-auto p-2 text-p-sm text-justify">
        {/* {
      [
        "Editors' Notes",
        "Size & Fit",
        "Details & Care",
        "Reviews",
        "Delivery & Returns",
      ].map((acc, accIdx) => ( */}
        <div>
          {title.toLowerCase() === "Editors' Notes".toLowerCase() && (
            <p>
              Khaite&#39;s &#39;Wes&#39; maxi dress is made from lightweight
              silk-organza and features intricate pintucked pleats that
              beautifully cinch the waist - a recurring theme throughout the
              Spring &#39;24 collection. It comes with a slip for additional
              coverage.
            </p>
          )}
          {title.toLowerCase() === "Size & Fit".toLowerCase() && (
            <div className="space-y-4">
              <ul role="list" className="list-disc pl-4">
                <li>
                  Fits true to size, however those who are between sizes should
                  take the smaller size
                </li>
                <li>
                  Intended to be slightly fitted at the bust and waist, loose at
                  the hip
                </li>
                <li>Designed with a detachable, slim-fitting slip</li>
                <li>Lightweight, non-stretchy fabric</li>
                <li>Model is 180cm/ 5’11” and is wearing a US 2</li>
              </ul>
              <div className="py-1">
                <a
                  className="text-gray-500 text-p-xs md:text-p-sm underline underline-offset-4 hover:text-[#0eb1ea]"
                  href="#"
                >
                  View size guide
                </a>
              </div>
            </div>
          )}
          {title.toLowerCase() === "Details & Care".toLowerCase() && (
            <ul role="list" className="list-disc pl-4">
              <li> Red silk-organza</li>
              <li>Button-fastening keyhole and buttons along back</li>
              <li>100% silk</li>
              <li>Designer color: Fire Red</li>
            </ul>
          )}
          {title.toLowerCase() === "Reviews".toLowerCase() && (
            <div className="w-full">
              <Reviews />
            </div>
          )}
          {title.toLowerCase() === "Delivery & Returns".toLowerCase() && (
            <div>
              Find out more about our delivery options. Try items in the comfort
              of your own home. If they&#39;re not quite right, you&#39;ve got
              28 days to request an exchange or return and send them back to us.
              We&#39;ll collect them from your home or office for free.
            </div>
          )}
        </div>
        {/* ))} */}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4" onClick={() => handleToggle(num)}>
      <div className="w-full mx-auto cursor-pointer transition-all duration-200 ">
        <p className="uppercase font-medium flex gap-3">
          <span>
            {isOpen ? (
              <HiChevronUp className="size-5" />
            ) : (
              <HiChevronDown className="size-5" />
            )}
          </span>
          {title}
        </p>
      </div>

      {isOpen ? (
        <div className="w-full mx-auto transition-all duration-200">
          {renderAccordionContent(title)}
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

function CompleteLook() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 text-gray-900">
      <div className="w-full">
        <div className="w-full lg:w-2/3 mx-auto space-y-6">
          <h1 className="uppercase">How to wear it</h1>
          <div className="flex flex-col gap-4">
            {completeLook.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-32 h-44 rounded-none bg-stone-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-contain md:object-cover object-center"
                  />
                </div>
                <div className="text-gray-900 flex flex-col justify-between pb-8">
                  <div>
                    <p className="font-semibold text-p-sm uppercase">
                      {item.brandName}
                    </p>
                    <p className="text-p-xs">{item.description}</p>
                  </div>
                  <div>
                    <p className="font-medium">${item.price}</p>
                    <p className="text-p-xs tracking-widest text-gray-500 uppercase">
                      {item.collection}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full lg:w-2/3 mx-auto">
          <div className="w-full h-fit md:h-[40rem] rounded-none bg-stone-100 flex items-center justify-center">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
              alt=""
              className="w-full h-full object-contain md:object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function Recommendations() {
  return (
    <div className="container mx-auto space-y-6">
      <h1 className="uppercase">You may also like</h1>
      <Swiper
        modules={[FreeMode, Navigation, Pagination]}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        // slidesPerView="auto"
        slidesPerView={1}
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
        className="flex flex-col"
      >
        <SwiperNavButtons />
        {/* <SwiperSlide className="res-slide" />
         */}
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
    </div>
  );
}
const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns space-x-10">
      <button onClick={() => swiper.slidePrev()}>
        <TbChevronLeft className="size-7" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <TbChevronRight className="size-7" />
      </button>
    </div>
  );
};

function Reviews() {
  return (
    <div className="w-5/6 mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <FaRegStar
                key={rating}
                // className={`
                //   ${
                //     product.rating > rating
                //       ? "text-gray-900"
                //       : "text-gray-200"
                //   }
                //   "h-5 w-5 flex-shrink-0"
                // `}
                className="size-5"
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">4 out of 5 stars</p>
          <p>4.6</p>
          <p>(43 reviews)</p>
        </div>
        <p className="pb-3">100% of customers recommend this product</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="uppercase font-semibold">Most Recent Review</p>
        <div className="flex justify-between">
          <div className="space-y-1">
            <div className="flex gap-1 items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <FaRegStar
                  key={rating}
                  // className={`
                  //   ${
                  //     product.rating > rating
                  //       ? "text-gray-900"
                  //       : "text-gray-200"
                  //   }
                  //   "h-5 w-5 flex-shrink-0"
                  // `}
                  className="size-5"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-p-xs text-gray-500">Verified Purchaser</p>
          </div>
          <p>11 days ago</p>
        </div>
        <p className="uppercase font-medium tracking-wide">Stylish dry!</p>
        <p className="text-p-xs text-gray-600">
          I&#39;m 6&#39;1". This item was a perfect fit, kept me dry during my
          first torrential NYC storm. Great price. Well worth it!
        </p>
        <Button classes="uppercase font-semibold w-full bg-transparent text-stone-950 border border-gray-600 hover:text-stone-50 hover:bg-black hover:bg-opacity-65 hover:border-1 hover:border-black">
          View All Reviews
        </Button>
        <p className="text-p-xs text-gray-500">
          All reviews are verified by ELARA unless otherwise indicated. Where a
          review states &#39;originally posted&#39; by one of our brand
          partners; this has not been verified by ELARA.
        </p>
      </div>
    </div>
  );
}
