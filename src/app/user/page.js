"use client";

import React, { useEffect, useState } from "react";
// import useUser from "../hooks/useUser";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2 className="text-center p-5">Loading</h2>;
  }

  return (
    <div>
      <ul>
        {users?.map((user, index) => (
          <li key={index}>
            <a href="#!" className="hover:underline">
              {user?.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
