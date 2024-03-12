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
        <div className="text-center mx-auto flex flex-col items-center justify-center ">
          <Logo />

          <label className="input input-bordered flex items-center gap-2 w-[50%] bg-[#ffffff] mt-8">
            <input type="text" className="grow" placeholder="Search" />
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
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default SearchModal;
