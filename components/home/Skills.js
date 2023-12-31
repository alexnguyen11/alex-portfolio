import Image from "next/image";
import React from "react";
import Html from "@/public/assets/skills/html.png";
import Css from "@/public/assets/skills/css.png";
import Javascript from "@/public/assets/skills/javascript.png";
import ReactImg from "@/public/assets/skills/react.png";
import Tailwind from "@/public/assets/skills/tailwind.png";
import Git from "@/public/assets/skills/git.png";
import NextJS from "@/public/assets/skills/nextjs.png";
import NodeJS from "@/public/assets/skills/node.png";
import MongoDB from "@/public/assets/skills/mongo.png";
import Java from "@/public/assets/skills/java.webp";
import SpringBoot from "@/public/assets/skills/springboot.png";
import ChatGPT from "@/public/assets/skills/chatgpt.png";
import AdobeXD from "@/public/assets/skills/AdobeXD.png";
import Figma from "@/public/assets/skills/Figma.png";
import Oracle from "@/public/assets/skills/oracle.png";
import MUI from "@/public/assets/skills/mui.png";
import JWT from "@/public/assets/skills/jwt.png";

const Skills = () => {
  return (
    <div id="skills" className="py-10">
      <div className="mx-auto flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#176d51c4] dark:text-[#00ba7cc4]">
          Skills
        </p>
        <h2 className="py-4 dark:text-white">What I Can Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[0.6rem] md:text-base">
          <div className="rounded-xl shadow-none dark:shadow-xl dark:shadow-gray-950 p-4 flex flex-col bg-slate-50 dark:bg-gray-900">
            <h2 className="justify-center items-center text-center my-4 p-4 font-medium text-gray-600">
              Frontend Development
            </h2>
            <div className="grid grid-cols-2 md:ml-5">
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={Html} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={Javascript} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4  items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={Css} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={ReactImg} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React JS</h3>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={NextJS} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Next JS</h3>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={Tailwind} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind CSS</h3>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={MUI} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Material UI</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-none dark:shadow-xl dark:shadow-gray-950 p-4 flex flex-col bg-slate-50 dark:bg-gray-900">
            <h2 className="justify-center items-center text-center my-4 p-4  font-medium text-gray-600">
              Backend Development
            </h2>
            <div className="grid grid-cols-2 md:ml-5">
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={NodeJS} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Node JS</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={Javascript} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Express JS</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4  items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={Java} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Java</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={SpringBoot} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>SpringBoot</h3>
                </div>
              </div>

              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={JWT} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JSON Web Token</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-none dark:shadow-xl dark:shadow-gray-950 p-4 flex flex-col bg-slate-50 dark:bg-gray-900">
            <h2 className="justify-center items-center text-center my-4 p-4  font-medium text-gray-600">
              Database
            </h2>
            <div className="grid grid-cols-2 md:ml-5">
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={MongoDB} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>MongoDB</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={Oracle} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Oracle</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-none dark:shadow-xl dark:shadow-gray-950 p-4 flex flex-col bg-slate-50 dark:bg-gray-900">
            <h2 className="justify-center items-center text-center my-4 p-4  font-medium text-gray-600">
              Tools
            </h2>
            <div className="grid grid-cols-2 md:ml-5">
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={Git} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Git</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={ChatGPT} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>ChatGPT</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4  items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={AdobeXD} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Adobe XD</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center my-4">
                <div className="md:w-10 md:h-10 w-7 h-7">
                  <Image src={Figma} width="" height="" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Figma</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
