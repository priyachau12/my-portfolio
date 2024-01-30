import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Exp from "./components/experience/exp";
// import Testi from './components/Testi/Testi';
import Services from "./components/Services/Services";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import PortProjects from "./components/PortProjects/PortProjects";
import GitHubCalendar from "react-github-calendar";
// import githubAPI from "./components/GithubAPI/githubAPI";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Exp />
      <Services />
      <PortProjects />
      <GitHubCalendar
        class="react-activity-calendar"
        username="priyachau12"

        // theme={{
        //   level0: "#161b22",
        //   level1: "#39ff43c7",
        //   level2: "#68e700c7",
        //   level3: "#007e06",
        //   level4: "#004e04c7",
        // }}
      />
      <img
        id="github-streak-stats"
        style={{ display: "block", margin: "auto" }}
        src="https://github-readme-streak-stats.herokuapp.com/?user=priyachau12&theme=bear&hide_border=false"
      />
      <img
        id="github-stats-card"
        style={{ display: "block", margin: "auto" }}
        src="https://github-readme-stats.vercel.app/api?username=priyachau12&theme=bear&show_icons=true&hide_border=false&count_private=true"
      />
      <img
        style={{ display: "block", margin: "auto" }}
        id="github-top-langs"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=priyachau12&theme=bear&show_icons=true&hide_border=false&layout=compact"
      />
      {/* <githubAPI /> */}

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
