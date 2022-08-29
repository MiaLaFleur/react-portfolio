import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: 'BudgetTracker',
      desc: 'This is a progressive web application (PWA) that is designed to help you keep track of your spendings.',
      img: 'BudgetTracker.png',
      technologies: [
        'HTML/CSS',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'IndexedDB'
      ],
      depLink: 'https://secure-earth-08903.herokuapp.com/',
      gitLink: 'https://github.com/MiaLaFleur/BudgetTracker'
    },
    {
      name: 'List Hub',
      desc: 'An e-commerce store that allows users to upload products and purchase items and checkout using Stripe',
      img: 'List-Hub.jpeg',
      technologies: [
        'HTML/CSS',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'IndexedDB',
        'GraphQL',
        'React',
        'JSON Web Token',
        'Stripe'
      ],
      depLink: 'https://stormy-ravine-51670.herokuapp.com/',
      gitLink: 'https://github.com/TonyT504/list-hub'
    },
    {
      name: 'Around The World',
      desc: 'This is a website designed to give you information, such as events and current weather of that week, about a specific place.',
      img:'aroundTheWorld.png',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
      ],
      depLink: 'https://apollo-31.github.io/around-the-world/',
      gitLink: 'https://github.com/apollo-31/around-the-world'
    },
    {
      name: 'noteTakr',
      desc: 'This is a note taking application! You can take notes and view them whenever you want! Go wild!!',
      img: 'noteTakr.png',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Node.js',
        'Express.js',
      ],
      depLink: 'https://safe-dusk-26796.herokuapp.com/',
      gitLink: 'https://github.com/MiaLaFleur/noteTakr'
    },
    {
      name: 'readme-generator',
      desc: 'This is a CLI application that generates a README.md file based off user input into the command line.',
      img: 'readme-generator.png',
      technologies: [
        'Node.js',
        'Inquirer'
      ],
      depLink: 'This is a CLI (command line interface) application, it is not deployed.',
      gitLink: 'https://github.com/MiaLaFleur/readme-generator'
    }
  ];

  return (
    <section>
      <div>
        <h1 className="titleOfSect">My Portfolio</h1>
      </div>
      <div className="projects">
        <ul>
          <li className="project">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="project">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul>
        <li className="project">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="project">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
        <ul>
        <li className="project">
            <Project projects={projects[4]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;