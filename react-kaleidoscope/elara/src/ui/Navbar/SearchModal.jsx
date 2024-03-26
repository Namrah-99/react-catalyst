import Button from "../components/common/Button";
import Logo from "./Logo";

function SearchModal() {
  return (
    <dialog id="my_modal_search" className="modal modal-bottom sm:modal-top">
      <div className="modal-box bg-[#ffffff] rounded-none">
        <form method="dialog" className="modal-backdrop">
          <button className="btn btn-sm btn-circle btn-ghost text-[#000] absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="container text-center mx-auto flex flex-col items-center justify-center">
          <Logo />

          <label className="input input-bordered flex items-center gap-2 w-full bg-[#ffffff] m-8">
            <input type="text" className="grow" placeholder="Search Elara" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div className="w-full text-start space-y-3">
            <div className="flex justify-between text-gray-900">
              <p className="text-p-xs uppercase tracking-widest">
                recent searches
              </p>
              {/* <Button className="text-p-xs tracking-wider">Clear All</Button> */}
              <Button classes="bg-transparent text--900 hover:text-stone-50 hover:bg-black hover:bg-opacity-65 hover:border-1 hover:border-black">
                Clear All
              </Button>
            </div>
            <ul className="text-p-xs space-y-3">
              <li>sneakers</li>
              <li>gucci</li>
              <li>earings</li>
            </ul>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default SearchModal;
