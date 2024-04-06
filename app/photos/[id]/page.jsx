"use client";

import React, { useEffect, useState } from "react";

const SinglePhoto = ({ params }) => {
  const photoId = params.id;
  // console.log(photoId);
  // data fetch
  const [photos, setPhotos] = useState([]);
  const apiKey = "ASYUoMdBCN15pFc1skFWKGV45q2nOW00BjBPBX2LFcGt4uTEKaFGiIYP";

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  const { id, url, alt, src, photographer } = photos;

  return (
    <div className="h-screen px-24">
      <h2>id: {id}</h2>
      <h1>{alt}</h1>
      <h1>{photographer}</h1>
    </div>
  );
};

export default SinglePhoto;
