import React from "react";
import {
  HomeIcon,
  UserIcon,
  SearchIcon,
  LightningBoltIcon,
  CollectionIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

export default function HeaderNav() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center h-auto m-5">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="Home" Icon={HomeIcon} />
          <HeaderItem title="User" Icon={UserIcon} />
          <HeaderItem title="Search" Icon={SearchIcon} />
          <HeaderItem title="Trending" Icon={LightningBoltIcon} />
          <HeaderItem title="Collections" Icon={CollectionIcon} />
          <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        </div>
        <h1>Movies</h1>
      </div>

    </>
  );
}
