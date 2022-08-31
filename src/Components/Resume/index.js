import React from "react";

function Resume() {
  return (
    <section className="resumeSect">
      <div className="resumeTitle">
        <h1>My Resume</h1>
      </div>
      <div className="resumeLinkDiv">
        <a href="https://www.canva.com/design/DAFK1XPRnU8/_5fLFR359GKEnXE6Lmdi9g/view?utm_content=DAFK1XPRnU8&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" className="resumeLink">
          <img src={require("../../Assets/imgs/picOfResume.png")} alt="resume" className="picOfResume"></img>
        </a>
      </div>
      <div className="proficiencies">
        <h4>Proficiencies</h4>
        <ul className="profList">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>Node.js</li>
          <li>Express.js</li>
           <li>MySQL</li>
          <li>Sequelize</li>
          <li>NoSQL</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>IndexedDB</li>
          <li>Model View Controller(MVC)</li>
          <li>REST</li>
          <li>Progressive Web Applications(PWA)</li>
         <li>React</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;