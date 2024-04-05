import Navbar from "@/app/shared/Navbar";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40">
          {/* <Navbar /> */}
          <div className=" flex  h-full justify-center items-center">
            <div className="flex">
              <div>
                <h2 className="text-4xl w-[60%] mx-auto">
                  {" "}
                  The best free stock photos, royalty free images & videos
                  shared by creators.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
