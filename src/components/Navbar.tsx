import React from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { motion } from "framer-motion";
// import { motion } from "framer-motion";
// import { Link as Link, animateScroll as scroll } from "react-scroll";

interface Props {
  openNav: () => void;
}

const Navbar: React.FC<Props> = ({ openNav }) => {
  return (
    <motion.div className="w-[100%] top-0 h-[12vh] shadow-md bg-[#27272a]">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[30px] text-white font-bold">
          <Link href={"/"}>
            <span className="text-white text-2xl md:text-3xl">◯DineMart</span>
          </Link>
        </h1>

        <Link href={"/male"}>
          <div className="nav-effect">Male</div>
        </Link>

        <Link href={"/female"}>
          <div className="nav-effect">Female</div>{" "}
        </Link>

        <Link href={"/kids"}>
          <div className="nav-effect">Kids</div>
        </Link>

        <Link href={"/products"}>
          <div className="nav-effect">All Products</div>
        </Link>
        <Link href={"/cart"}>
          <figure className="h-12 w-12 text-white flex items-center justify-center rounded-full hover:scale-110 transition-all duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // strokewidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 hover:scale-110 transform transition-all duration-300 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </figure>
        </Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
