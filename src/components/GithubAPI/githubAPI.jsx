import React from "react";
import GitHubCalendar from "react-github-calendar";
// import PortProjects from "./components/PortProjects/PortProjects";

const githubAPI = () => {
  return (
    <>
     

      {/* we can use testimonials here and using swiper we can add pagination n all --npm inatall swiper*/}
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
    </>
  );
};

export default githubAPI;
