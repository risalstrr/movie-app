import React from "react";

export default function HeaderItem({ Icon, title }) {
  return (
    <>
      <div className="flex flex-col items-center w-12 sm:w-20 group cursor-pointer hover:text-black">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" />
        <p className="tracking-widest opacity-0 group-hover:opacity-100">
          {title}
        </p>
      </div>
    </>
  );
}
