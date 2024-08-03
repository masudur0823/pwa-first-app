"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="bg-cyan-400">
      <ul className="py-5 flex justify-center">
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "bg-white py-4 px-5" : "py-4 px-5"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/user"
            className={
              pathname === "/user" ? "bg-white py-4 px-5" : "py-4 px-5"
            }
          >
            User
          </Link>
        </li>
        <li>
          <Link
            href="/news"
            className={
              pathname === "/news" ? "bg-white py-4 px-5" : "py-4 px-5"
            }
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href="/weather"
            className={
              pathname === "/weather" ? "bg-white py-4 px-5" : "py-4 px-5"
            }
          >
            Weather
          </Link>
        </li>
      </ul>
    </div>
  );
}
