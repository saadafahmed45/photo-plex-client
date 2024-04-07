"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const PhotoContext = createContext();

export const usePhotoContext = () => {
  return useContext(PhotoContext);
};

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const apiKey = "ASYUoMdBCN15pFc1skFWKGV45q2nOW00BjBPBX2LFcGt4uTEKaFGiIYP";
  useEffect(() => {
    if (!query) {
      // Fetch curated photos if no search query
      fetchPhotos("photography");
    } else {
      // Fetch photos based on search query
      fetchPhotos(query);
    }
  }, []);

  const fetchPhotos = (searchQuery) => {
    fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=12`, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos);
        setLoading(false); // Set loading state to false when fetching completes
      })
      .catch((error) => console.error("Error fetching photos:", error));
  };

  // saearch
  const [query, setQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchPhotos(query);
  };

  // catagory
  const [category, setCategory] = useState("all");

  // loader
  const [loading, setLoading] = useState(true);

  return (
    <PhotoContext.Provider
      value={{
        photos,
        loading,
        query,
        setQuery,
        fetchPhotos,
        handleSearchSubmit,
        handleSearchInputChange,
      }}>
      {children}
    </PhotoContext.Provider>
  );
};
