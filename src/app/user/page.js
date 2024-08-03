"use client";
import React, { useEffect, useState } from "react";

export default function User() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setusers(json))
      .catch((err) => console.log("fecth error", err));
  }, []);

  return (
    <div>
      <ul>
        {users?.map((user, index) => (
          <li key={index}>
            <a href="#!">{user?.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
