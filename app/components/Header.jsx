"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

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
    <header className="px-2 flex items-center justify-between w-full h-full">
      <Link
        href="/"
        className="cursor-pointer font-bold self-center text-4xl mr-auto"
      >
        V.P.
      </Link>
      <nav className=" drop-shadow-xl hidden md:flex items-center">
        <ul className="flex items-center">
          <li>
            <Link href="/" className="cursor-pointer mr-8">
              Home
            </Link>
          </li>
          <li>
            <ScrollLink to="about" className="cursor-pointer mr-8">
              About
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="skills" className="cursor-pointer mr-8">
              Skills
            </ScrollLink>
          </li>
          <li>
            <Link href="/portfolio" className="cursor-pointer mr-8">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
      {/* burger */}
      <button type="button" onClick={handleNav} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="py-4 ">
            <ul className="uppercase flex flex-col w-fit">
              <li className="py-4 text-sm">
                <Link href="/" onClick={() => setNav(false)}>
                  Home
                </Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="/#about" onClick={() => setNav(false)}>
                  About
                </Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="/#skills" onClick={() => setNav(false)}>
                  Skills
                </Link>
              </li>
              <li className="py-4 text-sm">
                <Link href="/portfolio" onClick={() => setNav(false)}>
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
