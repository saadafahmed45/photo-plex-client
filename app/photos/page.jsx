import React from "react";

const Photos = () => {
  return (
    <div className=" px-10 py-8">
      <div className="flex justify-center">
        <ul className="menu menu-horizontal bg-base-200 rounded">
          <li className="bg-slate-950 rounded-md text-slate-50">
            <a>Photo</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      {/* img card section */}
      <div className="flex justify-between mt-10">
        <h2 className="text-2xl font-semibold">Free Stock Photos</h2>
        <details className="dropdown">
          <summary className="m-1 btn">Trending</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box out w-52">
            <li>
              <a>New</a>
            </li>
            <li>
              <a>Modern</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 place-content-center  gap-8 py-8">
        <div className="w-96">
          <img
            className="rounded-md h-[460px] w-auto md:h-[600px] "
            src="https://images.pexels.com/photos/5109665/pexels-photo-5109665.jpeg"
            alt=""
          />
        </div>
        <div className="w-96 relative">
          <img
            className="rounded-md h-[460px] w-auto md:h-[600px] "
            src="https://images.pexels.com/photos/20778681/pexels-photo-20778681/free-photo-of-a-black-and-white-photo-of-a-cathedral.jpeg"
            alt=""
          />
          {/* <div className=" ">
            <button className="btn btn-primary m-2  absolute   bottom-0  right-0 ">
              Download{" "}
            </button>
          </div> */}
        </div>
        <div className="w-96">
          <img
            className="rounded-md h-[460px] w-auto md:h-[600px] "
            src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Photos;
