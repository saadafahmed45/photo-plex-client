import Navbar from "@/app/shared/Navbar";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-conten  ">
          <div className="max-w-xl md:max-w-4xl  ">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">
              The best free stock photos, royalty free images & videos shared by
              creators
            </h1>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Type here...."
                className="input input-bordered input-md input-primary w-full max-w-md"
              />
            </div>
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
