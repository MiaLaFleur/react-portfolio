import React from "react";

function Nav(props) {

  const { currentTab, setCurrentTab } = props;

  return (
    <nav>
      <ul className="navSect">
        <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("about")}>About Me</span>
        </li>
        <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("portfolio")}>My Portfolio</span>
        </li>
        <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("resume")}>My Resume</span>
        </li>
        <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentTab("contact")}>Contact Me</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;