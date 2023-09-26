import { useState } from "react";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
