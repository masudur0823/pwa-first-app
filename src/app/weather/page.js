"use client";

// import Image from "next/image";
import React, { useEffect, useState } from "react";
// import useUser from "../hooks/useUser";

export default function User() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2 className="text-center p-5">Loading</h2>;
  }

  return (
    <div>
      <div className="flex justify-center gap-2 flex-wrap p-2">
        {photos?.map((item, index) => (
          <div key={index} className="w-[200px] border p-5">
            <a href="#!" className="hover:underline">
              {/* <Image
                src={item?.thumbnailUrl}
                alt={item?.title}
                width={200}
                height={200}
              /> */}
            </a>
            <p className="capitalize">{item?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
