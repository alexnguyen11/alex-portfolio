import Image from "next/image";
import contactImg from "@/public/assets/contact.png"
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="py-10">
      <div className="m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <p className="uppercase text-xl tracking-widest text-[#176d51c4] dark:text-[#00ba7cc4]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 ">
            As a recently graduated software developer of Information Technology
            from Southern Alberta Institute of Technology, I have acquired a
            strong foundation in programming principles, software development
            methodologies, and industry-standard technologies.
          </p>
          <p className="py-2">
            With a passion for building innovative and efficient software
            solutions, I am equipped with the skills to analyze complex
            problems, design robust applications, and write clean and
            maintainable code.
          </p>
          <p className="py-2">
            As a dedicated and lifelong learner, I am eager to apply my
            knowledge and contribute to the success of software development
            projects in a professional setting.
          </p>
          <p className="py-2 underline cursor-pointer">
            <Link href="#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-70 md:w-70">
          <Image src={contactImg} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
