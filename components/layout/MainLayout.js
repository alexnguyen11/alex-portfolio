import { React } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import { useState } from "react";

function MainLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark bg-gray-900" : ""}>
      <Head>
        <title>Alex | Software Developer</title>
        <meta
          name="description"
          content="Alex Nguyen's Official Portfolio Website"
        />
        <link rel="icon" href='/logo.png' />
      </Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div id="mainContainer">{children}</div>
    </div>
  );
}

export default MainLayout;
