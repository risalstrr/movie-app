import { useRouter } from "next/router";
import React from "react";
import requests from "../../utils/requests";

export default function Navbar() {
    const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex space-x-10 sm:space-x-20 px-10 whitespace-nowrap overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            className="last:pr-24 cursor-pointer transition duration-150 transform hover:scale-125  hover:text-black active:text-white"
            key={key}
            onClick = {() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#e1c4ff] h-10 w-1/12" />
    </nav>
  );
}
