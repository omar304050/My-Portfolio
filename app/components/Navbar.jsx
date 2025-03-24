"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({isDarkMode , setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false);
  const sidMenuRef = useRef();
  const openMenu = () => {
    sidMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sidMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4  flex justify-between items-center z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/50" : ""
        } `}
      >
        <a href="">
          <Image
            src={ isDarkMode ? assets.logo_dark:assets.logo}
            alt=""
            className="w-28 mr-14 cursor-pointer"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${
            isScroll ? "" : "bg-white/50  shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a className="fontOvo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="fontOvo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="fontOvo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="fontOvo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="fontOvo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={()=>setIsDarkMode(prev => !prev)} className="cursor-pointer">
            <Image src={ isDarkMode ? assets.sun_icon:assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 fontOvo dark:border-white/50"
          >
            {" "}
            Contact
            <Image src={isDarkMode? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="" />
          </a>

          <button onClick={openMenu} className="block md:hidden ml-3">
            <Image
              src={isDarkMode? assets.menu_white : assets.menu_black  }
              alt=""
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* mobile menu */}

        <ul
          ref={sidMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dartHover dark:text-white"
        >
          <div className="absolute top-6 right-6">
            <Image
              onClick={closeMenu}
              src={isDarkMode?assets.close_white : assets.close_black}
              className="w-5 cursor-pointer"
              alt=""
            />
          </div>

          <li>
            <a onClick={closeMenu} className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="fontOvo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="fontOvo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="fontOvo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="fontOvo" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
