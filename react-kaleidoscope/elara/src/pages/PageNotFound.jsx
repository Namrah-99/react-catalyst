import { useMoveBack } from "../hooks/useMoveBack";
import notfoundimg from "../assets/images/notfound3.mp4";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container mx-auto bg-[#f0f0f0 h-screen text-gray-900 grid place-content-center">
      <div className="flex text-center justify-center items-center gap-12">
        <div className="space-y-4">
          <p className="text-h-lg font-semibold tracking-wider text-balance">
            The page you are looking for could not be found
          </p>
          <button onClick={moveBack} size="large" className="uppercase">
            &larr; Go back
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
{
  /* <video autoPlay loop muted>
<source src="/path/to/your-animation.webm" type="video/webm" />
<source src="/path/to/your-animation.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video> */
}
