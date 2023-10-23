import Link from "next/link";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Main = () => {
  return (
    <div id="main">
      <div className="text-center md:p-10 py-10">
        <h1 className="py-6 text-teal-600 dark:text-teal-400 font-medium  ">
          Alex Nguyen
        </h1>
        <h3 className="text-xl py-4 dark:text-gray-300 md:text-3xl">
          Full Stack Software Developer
        </h3>
        <p className="uppercase text-[0.7rem] md:text-sm tracking-widest py-2">
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

      <div className="flex justify-center gap-4 md:gap-7 py-3 text-gray-600 dark:text-gray-400">
        <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-3 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <a
            href="https://www.linkedin.com/in/alex-nguyen-ba80a622b/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </div>
        <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-3  md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <a
            href="https://github.com/alexnguyen11"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
