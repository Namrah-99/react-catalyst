import { TECarousel, TECarouselItem } from "tw-elements-react";
import PropTypes from "prop-types";

import kids1 from "../../assets/images/header/1.jpg";
import kids2 from "../../assets/images/header/2.jpg";
import kids3 from "../../assets/images/header/3.jpg";
import kids4 from "../../assets/images/header/4.jpg";
import kids5 from "../../assets/images/header/5.jpg";
import kids6 from "../../assets/images/header/6.jpg";
import women1 from "../../assets/images/header/women1.jpg";
import men1 from "../../assets/images/header/men1.jpg";
import women2 from "../../assets/images/header/women2.jpg";
import men2 from "../../assets/images/header/men2.jpg";
import women3 from "../../assets/images/header/women3.jpg";
import men3 from "../../assets/images/header/men3.jpg";
import promotion1 from "../../assets/images/header/promotion-header1.png";
import promotion2 from "../../assets/images/header/promotion-header2.png";
// import promotion3 from "../../assets/images/header/promotion-header3.png";

export default function Header() {
  return (
    <div className="border-t-2 border-gray-100">
      {/* <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="relative w-full h-[36rem] overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="h-full w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="h-full w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="h-full w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel> */}

      <div className="bg-[#f0f0f0] md:pt-10 text-gray-900">
        <div className="container mx-auto md:px-40 grid grid-cols-1 grid-rows-none items-stretch md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-8 md:h-[32rem] pt-5 md:pt-0">
          <div className="col-start-1 md:col-start-2 md:row-start-2 overflow-hidden">
            <div className="space-y-3 flex flex-col h-full justify-end md:pb-10">
              <p>Where would you like to start?</p>

              <div className="grid grid-cols-3 gap-5">
                <div className="col-span-1">
                  <Button classes="">Women</Button>
                </div>
                <div className="col-span-1">
                  <Button classes="">Men</Button>
                </div>
                <div className="col-span-1">
                  <Button>Kids</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-1 md:row-span-2 md:col-start-1 md:row-start-1 overflow-hidden h-full">
            <div className="md:w-full md:h-full border border-gray-300">
              <TECarousel
                ride="carousel"
                showControls
                showIndicators
                crossfade
                prevBtnIcon={
                  <>
                    <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Previous
                    </span>
                  </>
                }
                nextBtnIcon={
                  <>
                    <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Next
                    </span>
                  </>
                }
                theme={{
                  indicator:
                    "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
                }}
                className="w-full h-full"
              >
                <div className="w-full h-full relative overflow-hidden after:clear-both after:block after:content-['']">
                  <TECarouselItem
                    itemID={1}
                    className="w-full h-full relative float-left -mr-[100%] hidden transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  >
                    <div className="w-full h-full">
                      <img
                        src={women1}
                        className="w-full h-3/5 md:h-full object-contain"
                        alt="..."
                      />
                    </div>
                  </TECarouselItem>
                  <TECarouselItem
                    itemID={2}
                    className="w-full h-full relative float-left -mr-[100%] hidden transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  >
                    <div className="w-full h-full">
                      <img
                        src={women2}
                        className="w-full h-3/5 md:h-full object-contain"
                        alt="..."
                      />
                    </div>
                  </TECarouselItem>
                  <TECarouselItem
                    itemID={3}
                    className="w-full h-full relative float-left -mr-[100%] hidden transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  >
                    <div className="w-full h-full">
                      <img
                        src={women3}
                        className="w-full h-3/5 md:h-full object-contain"
                        alt="..."
                      />
                    </div>
                  </TECarouselItem>
                </div>
              </TECarousel>
            </div>
          </div>
          <div className="col-start-1 md:col-start-2 md:row-start-1 overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0"
              y="0"
              version="1.1"
              xmlSpace="preserve"
              viewBox="0 0 174 29"
              className="w-2/4 lg:w-4/12 pb-3"
              role="img"
              aria-hidden="true"
              // width="50%"
              // height="40"
            >
              <title>Assortment</title>
              <path
                className="w-full h-full"
                fill="currentColor"
                d="M122.318 7.42h-1.19V6.386a6.368 6.368 0 00-6.362-6.36 6.368 6.368 0 00-6.36 6.36V7.42h-1.191c-1.63 0-3 1.273-3.121 2.898l-1.137 15.253a3.139 3.139 0 00.828 2.363c.59.635 1.426 1 2.293 1h17.376c.868 0 1.704-.365 2.295-1 .59-.636.892-1.497.827-2.363l-1.137-15.253a3.143 3.143 0 00-3.12-2.898zm-11.916-1.034a4.369 4.369 0 014.364-4.364 4.369 4.369 0 014.365 4.364V7.42h-8.729V6.386zm13.883 20.19a1.122 1.122 0 01-.83.361h-17.377c-.319 0-.613-.128-.83-.362a1.123 1.123 0 01-.3-.855l1.136-15.254a1.138 1.138 0 011.13-1.049h1.192v2.786a.998.998 0 001.996 0V9.417h8.729v2.786a.998.998 0 001.996 0V9.417h1.191c.59 0 1.087.46 1.13 1.05l1.137 15.253c.023.317-.083.621-.3.855zM95.95 6.417a.998.998 0 00-1.997 0c0 5.878-5.024 12.746-9.369 14.694a64.195 64.195 0 00-5.389-3.985c4.815-2.11 8.486-8.615 8.486-13.41a.998.998 0 00-1.997 0c0 4.541-3.902 10.964-8.457 11.986-.065.015-.116.052-.175.078a47.62 47.62 0 00-5.948-3.021c4.623-1.775 8.126-6.39 8.49-11.718a.998.998 0 10-1.991-.136c-.379 5.535-4.696 10.16-9.855 10.595-3.585-1.149-7.168-1.727-10.74-1.727-11.401 0-22.92 5.882-34.239 17.481a.998.998 0 101.43 1.394c8.808-9.028 17.69-14.463 26.483-16.233-1.943 1.737-3.176 4.254-3.176 7.06 0 2.53.986 4.91 2.776 6.7a9.414 9.414 0 006.7 2.775c5.225 0 9.476-4.251 9.476-9.555a9.377 9.377 0 00-2.794-6.662c-.116-.115-.24-.217-.362-.325 6.752 1.352 13.555 4.863 20.338 10.505.069.082.15.15.24.206a81.622 81.622 0 015.94 5.53.994.994 0 001.411.017.998.998 0 00.018-1.412 85.245 85.245 0 00-5.016-4.74c4.78-2.648 9.717-9.595 9.717-16.097zM64.461 19.474c0 4.124-3.354 7.479-7.478 7.479h-.001a7.43 7.43 0 01-5.288-2.19 7.43 7.43 0 01-2.191-5.289c0-4.124 3.355-7.48 7.48-7.48H57.02c4.088 0 7.423 3.318 7.441 7.48zM24.374 8.24a.998.998 0 00.999-.998v-1.7h1.698a.998.998 0 000-1.996h-1.698V1.848a.998.998 0 00-1.997 0v1.698h-1.698a.998.998 0 000 1.997h1.698v1.699c0 .55.447.998.998.998zM28.969 14.434a.998.998 0 00-.999-.999c-9.335 0-12.486-3.15-12.486-12.487a.998.998 0 00-1.997 0c0 9.336-3.15 12.487-12.486 12.487a.998.998 0 000 1.997c9.335 0 12.486 3.151 12.486 12.487a.998.998 0 001.997 0c0-9.336 3.15-12.487 12.486-12.487a.998.998 0 00.999-.998zm-14.476 6.232c-1.079-3.135-3.077-5.148-6.204-6.232 3.117-1.081 5.116-3.08 6.196-6.197 1.085 3.127 3.098 5.126 6.233 6.204-3.134 1.081-5.144 3.09-6.225 6.225z"
              ></path>
            </svg>
            <p className="text-h-sm md:text-h-md font-semibold">
              Even more than you expect
            </p>
            <p className="text-p-lg md:text-p-lg">
              Fashion, Beauty, Designer and more
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
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

        <TECarousel ride="carousel">
          <div className="relative w-full h-[32rem] overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div className="flex w-full h-full">
                <img
                  src={women1}
                  className="w-1/4 object-cover object-center"
                  alt="..."
                />
                <img
                  src={men1}
                  className="w-1/4 object-cover object-center"
                  alt="..."
                />{" "}
                <img
                  src={kids1}
                  className="w-1/4 object-cover object-center"
                  alt="..."
                />
                <img
                  src={kids2}
                  className="w-1/4 object-cover object-center"
                  alt="..."
                />
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left hidden -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div className="flex w-full h-full">
                <img
                  src={women2}
                  className="w-1/4 object-cover object-center"
                  alt="..."
                />{" "}
                <img
                  src={men2}
                  className="w-1/4 object-cover object-center"
                  alt="..."
                />{" "}
                <img
                  src={kids3}
                  className="w-1/4 object-cover object-center"
                  alt="..."
                />
                <img
                  src={kids4}
                  className="w-1/4 object-cover object-center"
                  alt="..."
                />
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div className="flex w-full h-full">
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
              </div>
            </TECarouselItem>
          </div>
        </TECarousel>
      </div>
    </div>
  );
}

function Button({ classes, children }) {
  return (
    <button
      className={`text-p-xs md:text-p-sm bg-stone-950 text-stone-50 w-full p-4 font-semibold truncate  ${classes}`}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};
