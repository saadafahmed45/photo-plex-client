"use client";
import React, { useContext, useEffect, useState } from "react";
import { createClient } from "pexels";
import { Context } from "@/context/Context";

const Photos = () => {
  const client = createClient(
    "jCS9KVx1hRI7y877Kg5NO1lkeIfFs9dXz28MxIWlQ4Z4lqPRndtrZRsy"
  );
  const [photos, setPhotos] = useState([]);
  const { searchPicGlobal } = useContext(Context); // search er value astache but kaj kore na keno?
  console.log(searchPicGlobal);
  useEffect(() => {
    // Fetch photos from the Pexels API
    client.photos
      // query thek jekono kichu search kora jabe.
      .search({ query: "car", per_page: 10 })
      .then((response) => {
        setPhotos(response.photos);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []); // Run once on component mount

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
      <div>
        {/* {client.map((item, index) => console.log(item.url))} */}
        <div className="flex-col flex ">
          <div className="grid grid-cols-4 gap-3">
            {photos.map((photo) => (
              <img
                className="w-full h-[350px] object-cover "
                key={photo.id}
                src={photo.src.medium}
                alt={photo.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
