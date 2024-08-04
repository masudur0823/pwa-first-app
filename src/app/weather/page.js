"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
// import useUser from "../hooks/useUser";

export default function User() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {photos?.map((item, index) => (
          <div key={index}>
            <a href="#!" className="hover:underline">
              <Image
                src={item?.thumbnailUrl}
                alt={item?.title}
                width={200}
                height={200}
              />
            </a>
            <p>{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
