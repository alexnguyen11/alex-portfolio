import React from "react";
import { useState, useEffect } from "react";
import {
  Close,
  ArrowCircleDown,
  Menu,
  NightsStay,
  LightMode,
} from "@mui/icons-material";
import Link from "next/link";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [navBg, setNavBg] = useState("rgb(30 41 59 / var(--tw-bg-opacity))");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="sticky top-0 py-10 px-10 md:px-20 lg:px-40  flex justify-between items-center text-gray-800 dark:text-slate-400 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-10 border-b border-gray-200 dark:border-gray-800">
        <Link href="/" className="cursor-pointer">
          {" "}
          <h1 className="text-xl font-burtons">alexnguyen</h1>
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppcase hover:border-b cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppcase hover:border-b cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppcase hover:border-b cursor-pointer">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppcase hover:border-b cursor-pointer">
                Project
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppcase hover:border-b cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <ul className="hidden md:flex items-center">
          {darkMode ? (
            <li>
              <LightMode
                className="cursor-pointer text-2xl"
                onClick={() => setDarkMode(!darkMode)}
              />
            </li>
          ) : (
            <li>
              <NightsStay
                className="cursor-pointer text-2xl"
                onClick={() => setDarkMode(!darkMode)}
              />
            </li>
          )}
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white flex flex-row items-center text-center   px-4 py-2 border-none rounded-md ml-8"
              href="/Alex_Nguyen_Resume.pdf"
              download="Alex_Nguyen_Resume"
            >
              <p className="text-white">Resume</p>

              <ArrowCircleDown className="text-medium ml-1" />
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <Menu />
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen z-50 text-gray-800 dark:text-slate-400 "
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen p-10 ease-in duration-500 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-10"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="mb-12 flex items-center justify-between dark:text-white">
            <Link href="/" className="cursor-pointer">
              {" "}
              <h1 className="text-xl font-burtons">alexnguyen</h1>
            </Link>
            <div onClick={handleNav} className="cursor-pointer">
              <Close />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4 uppercase text-[0.6rem] tracking-widest">
              Connecting Ideas, Transforming Technology
            </p>
          </div>
          <div className="py-4 flex flex-col ">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm cursor-pointer">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm cursor-pointer">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm cursor-pointer">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm cursor-pointer">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm cursor-pointer">Contact</li>
              </Link>
            </ul>

            <ul className="flex flex-row-reverse items-center justify-between">
              {darkMode ? (
                <li>
                  <LightMode
                    className="cursor-pointer text-2xl absolute bottom-[4rem]"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </li>
              ) : (
                <li>
                  <NightsStay
                    className="cursor-pointer text-2xl absolute bottom-[4rem]"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </li>
              )}
              <li className="">
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white flex flex-row items-center text-center px-3 py-1 border-none rounded-md text-sm absolute bottom-[4rem]"
                  href="/Alex_Nguyen_Resume.pdf"
                  download="Alex_Nguyen_Resume"
                >
                  <p className="text-white">CV</p>
                  <ArrowCircleDown className="text-sm ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
