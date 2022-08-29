import React from "react";

function About() {
  return (
    <section>
      <div id="about">
        <h1 className="titleOfSect">About Me</h1>
      </div>
      <div className="aboutMeSect">
        <div>
          <img src={require('../../Assets/imgs/picOfMe.jpg')} className="picOfMe" alt="profile" />
        </div>
        <div>
          <p>My name is Mia LaFleur! I am from North Texas and I am ready to begin my career in software development. I am very good at working with a team and quickly picking up new concepts and technologies. I am very creative and excited to learn and constantly be improving my new coding abilities!</p>
        </div>
      </div>
      
    </section>
  );
}

export default About;