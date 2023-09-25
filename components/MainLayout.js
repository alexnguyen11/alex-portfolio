import { React } from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import { useState } from "react";

function MainLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Alex | Software Developer</title>
        <meta
          name="description"
          content="Alex Nguyen's Official Portfolio Website"
        />
        {/** Need to change ico - lenard */}
        <link rel="icon" href={"/logo.jpeg"} />
      </Head>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div id="mainContainer">{children}</div>
    </div>
  );
}

export default MainLayout;
