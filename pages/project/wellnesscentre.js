import massageImg from "@/public/assets/projects/massagetherapy.png";
import { RiRadioButtonFill } from "react-icons/ri";
import { PiCaretDoubleLeftBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

const wellnesscentre = () => {
  return (
    <div className="w-full bg-white  dark:bg-gray-900">
      <div className="w-screen h-[50vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={massageImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 px-10">
          <h2 className="py-2 text-white">Wellness Centre</h2>
          <h3 className="text-white">NextJS / ReactJS / Tailwind</h3>
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-40 mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2 className="py-4">Overview</h2>
          <p>
            The wellness center is a web application thoughtfully developed
            using Next.js routing and Tailwind CSS for responsive design.
            Next.js routing ensures smooth navigation through various sections
            of the application, creating an intuitive user experience.
            Meanwhile, Tailwind CSS ensures a visually appealing and responsive
            interface that adapts seamlessly to different devices and screen
            sizes.
          </p>
          <a
            href="https://github.com/alexnguyen11"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 md:mt-[4rem]">Code</button>
          </a>
          <a
            href="https://taichicentre.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 md:mt-[4rem]">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl dark:shadow-gray-950 shadow-gray-300 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:-translate-x-20">
          <Link href="/#projects">
            <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <PiCaretDoubleLeftBold className="text-[#00ba7cc4]" size={27} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default wellnesscentre;
