import React, { useState } from "react";

function Project(props) {
  const currentProject = useState(props)[0].projects;

  const name = currentProject.name;
  const desc = currentProject.desc;
  const img = currentProject.img;
  const technologies = currentProject.technologies;
  const depLink = currentProject.depLink;
  const gitLink = currentProject.gitLink;

  function getTechnologies(techArr) {
    let usedTech = "";

    for(var i = 0; i < techArr.length; i++) {
      if (i === techArr.length - 1) {
        usedTech += techArr[i];
      } else {
        usedTech += techArr[i] + ", ";
      }
    }
    return usedTech;
  }

  return (
    <div className="">
      <img
        className="imgs"
        src={require(`../../Assets/imgs/${img}`)}
        alt="screenshot of project"
      />
      <h3 className="projName">{name}</h3>
      <p className="projDesc">{desc}</p>
      <p>Technologies that were used: </p>
      <p className="projTech">{getTechnologies(technologies)}</p>
      <a className="projDepLink" href={depLink}>{name}</a><br></br>
      <a className="projGitLink" href={gitLink}>{name} Repo</a>
    </div>
  );
}

export default Project;