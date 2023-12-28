"use client";
import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import {CiShoppingCart} from "react-icons/ci"

type Props = {};

const Navbar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <div>
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl">
            <Link href={"/"}>SEINE</Link>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
                <li>
                    <Link href={'/'} className="py-3 inline-block w-full">Shop</Link>
                </li>
                <li>
                    <Link href={'filters'} className="py-3 inline-block w-full">Filters</Link>
                </li>
                <li>
                    <Link href={'myproducts'} className="py-3 inline-block w-full">My Products</Link>
                </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
            <SearchBar />
            <div onClick={() => setShowProfile(!showProfile)} className="relative cursor-pointer">
                <img src="user.jpg" className="w-[35px] h-[35px] rounded-full object-cover" alt="" />
                <div className={`absolute bg-white z-[2] rounded-lg shadow-lg ${showProfile ? "": "hidden"}`}>
                    <Link href='/sign'>SignIn</Link>
                </div>
            </div>
                <Link href='/cart'>
                    <div className="p-2 bg-gray-100 rounded-full ">
                        <CiShoppingCart size={20} />
                    </div>
                </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
