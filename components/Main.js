import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-6 text-teal-600 dark:text-teal-400 font-medium  md:text-6xl">
          Alex Nguyen
        </h2>
        <h3 className="text-2xl py-4 dark:text-gray-300 md:text-3xl">
          Full Stack Software Developer
        </h3>
        <p className="uppercase text-sm tracking widest py-2">
          Connecting Ideas, Transforming Technology
        </p>
        <p className="text-md py-5 leading-8 dark:text-gray-400 max-w-xl mx-auto md:text-xl">
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
            href="https://github.com/alexnguyen11"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaGithub />
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
          <Link href="mailto:alex.khanh.nguyen@outlook.com">
            <AiOutlineMail />
          </Link>
        </div>
        <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <Link href="tel:4035605899">
            <BsPhone />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
