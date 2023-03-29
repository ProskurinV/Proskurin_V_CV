"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav className="bg-slategrey p-4 sticky top-0 drop-shadow-xl ">
      <h1 className="flex ">
        <Link
          href="/"
          className="cursor-pointer  font-bold self-center text-4xl mr-auto"
        >
          V.P.
        </Link>

        <Link href="/" className="cursor-pointer mr-8">
          Home
        </Link>
        <Link href="/portfolio" className="cursor-pointer mr-8">
          Portfolio
        </Link>
      </h1>

      <button type="button" onClick={handleNav} className="md:hidden">
        <AiOutlineMenu size={25} />
      </button>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
          }
        >
          <div className="w-fit">
            <button
              type="button"
              className="flex w-full items-center justify-between "
            >
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </button>
          </div>
          <div className="py-4 ">
            <ul className="uppercase flex flex-col w-fit">
              <Link
                href="/"
                onClick={() => setNav(false)}
                className="py-4 text-sm"
              >
                V.P.
              </Link>
              <Link
                href="/"
                onClick={() => setNav(false)}
                className="py-4 text-sm"
              >
                Home
              </Link>
              <Link
                href="/#about"
                onClick={() => setNav(false)}
                className="py-4 text-sm"
              >
                About
              </Link>
              <Link
                href="/#skills"
                onClick={() => setNav(false)}
                className="py-4 text-sm"
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                onClick={() => setNav(false)}
                className="py-4 text-sm"
              >
                Projects
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
