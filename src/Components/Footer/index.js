import React from "react";

function Footer() {
  return(
    <footer className="footer">
      <div>
        <a href="https://github.com/MiaLaFleur">
          <img src={require('../../Assets/logos/pinkGitHub.png')} alt="GitHub" className="gitHubLogo"></img>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/mia-lafleur-02a494230/">
        <img src={require('../../Assets/logos/pinkLinkedIn.png')} alt="linkedIn" className="linkedInLogo"></img>
        </a>
      </div>
      <div>
        <a href="https://www.credly.com/badges/1e597255-b9c7-487a-98cc-75832704ab5c/public_url">
        <img src={require("../../Assets/imgs/picOfBadge.png")} className="picOfBadge" alt="badge"></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;