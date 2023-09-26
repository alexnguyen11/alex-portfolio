import Image from "next/image";
import contactImg from "../public/assets/contact.jpeg";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="py-10">
      <p className="text-xl tracking-widest uppercase text-[#176d51c4] dark:text-[#00ba7cc4]">
        Contact
      </p>
      <h2 className="py-4">Get In Touch</h2>
      <div className="">
        {/* left */}
        <div className=" md:shadow-xl md:dark:shadow-gray-950 md:rounded-xl">
          <div className="lg:p-4 h-full flex md:flex-row flex-col">
            <div className="md:m-4">
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={contactImg}
                alt="/"
              />
            </div>
            <div className="md:mx-2 md:my-0 my-4">
              <div className="md:m-4">
                <h2 className="py-2">Alex Nguyen</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and Let's talk.
                </p>
              </div>
              <div className="md:m-4">
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex justify-center gap-4 md:gap-16 py-3 text-gray-600 dark:text-gray-400">
                  <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/alex-nguyen-ba80a622b/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="">
          <div className="rounded-full shadow-lg dark:shadow-gray-950 shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#00ba7cc4]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
