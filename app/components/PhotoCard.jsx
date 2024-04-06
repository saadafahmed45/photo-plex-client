import React from "react";

const PhotoCard = ({ item }) => {
  const { id, url, alt, src, photographer } = item;
  console.log(item);
  return (
    <div>
      <div className="w-96 h-auto">
        <img
          className="rounded-md h-[460px] w-auto md:h-[600px] "
          src={src.portrait}
          alt=""
        />
      </div>
      <div className="ml-2">
        <h1 className="text-xl ml-2 font-semibold">{alt}</h1>
        <div className="flex justify-between m-2">
          <div>
            <a
              href={src.portrait}
              className="btn btn-outline btn-sm btn-primary">
              Download
            </a>
          </div>
          <div>
            <h2>{photographer}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
