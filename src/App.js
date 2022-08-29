import React, { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('about');
  
  const renderPage = () => {
    switch (currentTab) {
      case "about":
        return <About />
      case "portfolio":
        return <Portfolio />
      // case "resume":
      //   return <Resume />
      // case "contact":
      //   return <Contact />
      default:
        return <About />
    }
  };

  return (
    <div>
      <div className="headerSection">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>
      <div>
        <main>{renderPage()}</main>
      </div>
    </div>
    
  );
}

export default App;
