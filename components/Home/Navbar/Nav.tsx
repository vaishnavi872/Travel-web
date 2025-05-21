"use client";
import { navLinks } from "@/constant/navLinks";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY > 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={` ${
        navBg ? " bg-blue-950 shadow-md ": "fixed"
       } w-full transition-all duration-200 h-[12vh] z-[1000] `
      }
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
            <TbAirBalloon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
             Dream Travelr
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex justify-end items-center space-x-10">
          {navLinks.map((link) => (
            <a href={link.url} key={link.id}>
              <p
                className="relative text-white text-base font-medium w-fit block
               after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 
               after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right"
              >
                {link.label}
              </p>
            </a>
          ))}
        </div>

        {/* Right section - Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Button (Desktop only) */}
          <button className="hidden lg:block bg-white text-blue-950 px-4 py-2 rounded-lg font-medium">
            Book Now
          </button>

          {/* Burger Menu (Mobile only) */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;



 