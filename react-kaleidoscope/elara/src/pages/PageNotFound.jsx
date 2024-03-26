import { useMoveBack } from "../hooks/useMoveBack";
import notfoundimg from "../assets/images/notfound5.mp4";
import { BsBoxArrowLeft } from "react-icons/bs";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container mx-auto bg-[#f0f0f0 h-screen grid place-content-center">
      <div className="flex text-center justify-center items-center gap-12">
        <div className="space-y-8">
          <p className="text-gray-500 text-h-lg tracking-wider text-balance">
            The page you are looking for could not be found
          </p>
          <button
            onClick={moveBack}
            size="large"
            className="text-gray-700 uppercase align-middle border border-gray-500 p-4"
          >
            <BsBoxArrowLeft className="inline-block mr-4 size-7" />
            <b className="text-gray-600">Go back</b>
          </button>
        </div>
        <div>
          <video autoPlay loop muted>
            <source src={notfoundimg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
