import Project from "./Project";

const Project_1 = {
  Project: "www.amalk.au",
  PreviewImage:"project-previews/project-portfolio-website.png",
  Description: "Software Engineering Portfolio",
  FrontEndStack: "JavaScript, HTML, CSS, GitHub Pages",
  BackEndStack: "N/a",
  GitHubRepositoryURL: "https://github.com/amaldevelops/amaldevelops.github.io",
  ProductionSiteURL: "https://www.amalk.au",
  Contributors: "Amal Kariyawasam",
  License: "GPL-3.0",
  LastUpdated: "25/02/2025",
};

const Project_2 = {
  Project: "",
  Description: "",
  FrontEndStack: "",
  BackEndStack: "",
  GitHubRepositoryURL: "",
  ProductionSiteURL: "",
  Contributors: "",
  License: "",
  LastUpdated: "",
};

function ProjectList() {
  return (
    <div>
      <Project {...Project_1} />
      <Project {...Project_2} />
      <Project {...Project_1} />
    </div>
  );
}

export default ProjectList;
