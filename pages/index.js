import { useState } from "react";
import Main from "@/components/home/Main";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <main className=" px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Main />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
