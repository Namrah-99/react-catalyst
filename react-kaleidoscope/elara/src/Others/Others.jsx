import Header from "../ui/components/common/Header";
import klein1 from "../assets/images/header/klein1.png";
import klein2 from "../assets/images/header/klein2.png";

export default function Others() {
  return (
    <>
      <Header />
      <div className="my-12">
        <div className="container mx-auto md:container md:mx-auto space-y-16">
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
