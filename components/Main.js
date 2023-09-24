import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import profileImg from "@/public/assets/profile.png";

const Main = () => {
  return (
    <div id="main">
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Alex Nguyen
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Full Stack Software Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Motivated and detail-oriented software developer with a strong IT
          foundation and a passion for coding. Seeking to join a dynamic team,
          enhance skills, and contribute to innovative software solutions. Eager
          to learn from experienced professionals, solve problems, and deliver
          high-quality code to project success.
        </p>
      </div>

      <div className="flex justify-center gap-4 md:gap-16 py-3 text-gray-600 dark:text-gray-400">
        <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <a
            href="https://www.linkedin.com/in/khanh-nguyen-ba80a622b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <a
            href="https://github.com/khanhn11"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaGithub />
          </a>
        </div>
        <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <Link href="#contact">
            <AiOutlineMail />
          </Link>
        </div>
        <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <Link href="/resume">
            <BsPersonLinesFill />
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Main;
