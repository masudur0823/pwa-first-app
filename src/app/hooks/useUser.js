"use client";

import { useState, useEffect } from "react";

const useUser = (url) => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [url]);

  return { users };
};

export default useUser;
