import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundImg, projectUrl, technolog }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl dark:shadow-gray-950 shadow-gray-300 rounded-xl md:p-4 group hover:bg-[#1E313B]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute md:top-[50%] left-[50%] translate-x-[-50%] translate-y[-50%]">
        <h3 className="md:text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{technolog}</p>
        <Link href={projectUrl}>
          <p className="text-center md:py-3 rounded-lg md:bg-white !text-teal-400 underline font-bold text-sm md:text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
