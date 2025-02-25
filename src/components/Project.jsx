function Project({
  Project = "Untitled Project",
  PreviewImage = "/logos/logo-noPreview.png",
  Description = "No description available",
  FrontEndStack = "",
  BackEndStack = "",
  GitHubRepositoryURL = "",
  ProductionSiteURL = "",
  Contributors = "Amal Kariyawasam",
  License = "GPL-3.0",
  LastUpdated = "Unknown",
}) {
  const projectInfo = {
    Project,
    PreviewImage,
    Description,
    FrontEndStack,
    BackEndStack,
    GitHubRepositoryURL,
    ProductionSiteURL,
    Contributors,
    License,
    LastUpdated,
  };

  return (
    <div className="individualProjectDiv">
      <h2>{projectInfo.Project}</h2>
      <img
        src={projectInfo.PreviewImage}
        alt="Project Preview Image"
        className="previewImage"
      />
      <p>
        <strong></strong> {projectInfo.Description}
      </p>

      <p>
        <strong>Front End Stack:</strong> {projectInfo.FrontEndStack}
      </p>
      <p>
        <strong>Back End Stack: </strong>
        {projectInfo.BackEndStack}
      </p>

      <p>
        <strong>Contributors: </strong>
        {projectInfo.Contributors}
      </p>
      <p>
        <strong>License: </strong>
        {projectInfo.License}
      </p>
      <p>
        <strong>Last Updated: </strong>
        {projectInfo.LastUpdated}
      </p>

      <a href={projectInfo.GitHubRepositoryURL} target="_blank">
        <img
          src="/logos/logo-github.svg"
          alt="GitHub Repository URL"
          className="externalLinkLogos"
        />
      </a>

      <a href={projectInfo.ProductionSiteURL} target="_blank">
        <img
          src="/logos/logo-cloud.png"
          alt="Production Site URL"
          className="externalLinkLogos"
        />
      </a>
    </div>
  );
}

export default Project;
