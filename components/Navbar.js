import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import Link from "next/link";
import Alex_Nguyen_Resume from "@/public/Alex_Nguyen_Resume.pdf";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="py-10 px-10 md:px-20 lg:px-40 flex justify-between text-gray-800 dark:text-slate-400 bg-white dark:bg-gray-900">
        <Link href="/" className="cursor-pointer">
          {" "}
          <h1 className="text-xl font-burtons">alexnguyen</h1>
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppcase hover:border-b cursor-pointer">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppcase hover:border-b cursor-pointer">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppcase hover:border-b cursor-pointer">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppcase hover:border-b cursor-pointer">Project</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppcase hover:border-b cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
        <ul className="hidden md:flex items-center">
          <li>
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl"
              onClick={() => setDarkMode(!darkMode)}
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href={Alex_Nguyen_Resume}
              download="Alex_Nguyen_Resume"
            >
              Resume
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-white dark:bg-gray-900 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="mb-12 flex items-center justify-between dark:text-white">
            <Link href="/" className="cursor-pointer">
              {" "}
              <h1 className="text-xl font-burtons">alexnguyen</h1>
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadown-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose size={35} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
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
            <div className="my-[4rem]">
              <p className="uppercase tracking-widest text-teal-600 dark:text-teal-400">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/alex-nguyen-ba80a622b/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>

                <a href="https://github.com/alexnguyen11" target="_blank">
                  <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>

                <a href="mailto:alex.khanh.nguyen@outlook.com" target="_blank">
                  <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>

                <a href="tel:4035605899" target="_blank">
                  {" "}
                  <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsPhone />
                  </div>
                </a>
              </div>
            </div>

            <ul className="flex flex-row-reverse items-center justify-between mt-10">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md "
                  href={Alex_Nguyen_Resume}
                  download="Alex_Nguyen_Resume"
                >
                  Resume
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
