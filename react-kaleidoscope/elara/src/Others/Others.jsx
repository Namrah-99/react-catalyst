import Header from "../ui/components/common/Header";
import klein1 from "../assets/images/header/klein1.png";
import klein2 from "../assets/images/header/klein2.png";

export default function Others() {
  return (
    <>
      <Header />
      <div className="my-12">
        <div className="container mx-auto md:container md:mx-auto space-y-16">
          <ProductCharacteristics />
          <Test />
        </div>
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

function Test() {
  return (
    <>
      <div className="group relative">
        <img
          src={klein1}
          alt="First Image"
          className="w-full h-auto transition-opacity duration-300"
        />
        <img
          src={klein2}
          alt="Second Image"
          className="hidden group-hover:block w-full h-auto absolute top-0 left-0 transition-opacity duration-300"
        />
      </div>
    </>
  );
}
function ProductCharacteristics() {
  return (
    <div className="w-fit flex flex-wrap gap-4 justify-between items-center">
      <div className="h-fit w-2/3 grow border border-orange-100">
        <div className="h-full w-full flex flex-wrap">
          <div className="md:h-[44rem] w-full sm:w-1/2 p-2 bg-gray-200">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="Front of men's Basic Tee in black."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="md:h-[44rem] w-full sm:w-1/2 p-2 bg-gray-300">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg"
              alt="Front of men's Basic Tee in black."
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="w-full sm:w-1/3 p-2 bg-gray-400">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
              alt="Front of men's Basic Tee in black."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className=" w-full sm:w-1/3 p-2 bg-gray-500">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg"
              alt="Front of men's Basic Tee in black."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className=" w-full sm:w-1/3 p-2 bg-gray-600">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="Front of men's Basic Tee in black."
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="w-1/3 border vorder-lime-400">
        Sticky section containing details
      </div>
    </div>
  );
}
