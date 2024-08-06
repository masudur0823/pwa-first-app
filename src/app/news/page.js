"use client";

import React, { useEffect, useState } from "react";

export default function User() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // get data
  useEffect(() => {
    setLoading(true);
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 10,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  const handleUpdate = () => {};
  const handleDelete = () => {};

  if (loading) {
    return <h2 className="text-center p-5">Loading</h2>;
  }

  return (
    <div>
      <div className="p-5">
        <button
          className="py-2 px-5 bg-green-500 text-white"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div className="flex justify-center py-5 gap-5 flex-wrap">
        {posts?.map((post, index) => (
          <div key={index} className="border w-[200px] p-5">
            <div className="p-2 bg-cyan-500 text-white">
              <p>User ID:{post?.userId}</p>
              <p>Post ID:{post?.id}</p>
            </div>
            <h4>{post?.title.slice(0, 10)}</h4>
            <br />
            <p>{post?.body.slice(0, 50)}..</p>
          </div>
        ))}
      </div>
    </div>
  );
}
