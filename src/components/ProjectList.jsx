import Project from "./Project";

const Project1 = {
  Project: "amaldevelops.github.io",
  Description: "Software Engineering Portfolio",
  FrontEndStack: "JavaScript, HTML, CSS, GitHub Pages",
  BackEndStack: "N/a",
  GitHubRepositoryURL: "https://github.com/amaldevelops/amaldevelops.github.io",
  ProductionSiteURL: "https://www.amalk.au",
  Contributors: "Amal Kariyawasam",
  License: "GPL-3.0",
  LastUpdated: "25/02/2025",
};

function ProjectList() {
  return (
    <div>
      <Project {...Project1} />
    </div>
  );
}

export default ProjectList;
