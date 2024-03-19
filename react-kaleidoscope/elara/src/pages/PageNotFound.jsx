import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="container mx-auto bg-[#f0f0f0">
      <p className="text-h-lg">
        The page you are looking for could not be found 😢
      </p>
      <button onClick={moveBack} size="large">
        &larr; Go back
      </button>
    </div>
  );
}

export default PageNotFound;
