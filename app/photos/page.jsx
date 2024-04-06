"use client";
import React, { useEffect, useState } from "react";
import PhotoCard from "../components/PhotoCard";
import { usePhotoContext } from "../Context/PhotoContext";

const Photos = () => {
  const {
    photos,
    loading,
    query,
    setQuery,
    fetchPhotos,
    handleSearchSubmit,
    handleSearchInputChange,
  } = usePhotoContext();

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
      {/* search bar  */}
      <div>
        {/* Search bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex justify-center mb-4">
          <input
            type="text"
            value={query}
            onChange={handleSearchInputChange}
            placeholder="Search for photos..."
            className="border-2 border-gray-300 px-4 py-2 rounded-md"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
            Search
          </button>
        </form>
      </div>
      {/* Loading indicator */}
      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 place-content-center  gap-8 py-8">
        {photos.map((item) => (
          <PhotoCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
