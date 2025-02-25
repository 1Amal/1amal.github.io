function Project(props) {
  const projectInfo = {
    Project: props.Project,
    PreviewImage:props.PreviewImage,
    Description: props.Description,
    FrontEndStack: props.FrontEndStack,
    BackEndStack: props.BackEndStack,
    GitHubRepositoryURL: props.GitHubRepositoryURL,
    ProductionSiteURL: props.ProductionSiteURL,
    Contributors: props.Contributors,
    License: props.License,
    LastUpdated: props.LastUpdated,
  };

  return (
    <div className="individualProjectDiv">
      <h2>{projectInfo.Project}</h2>
      <img src={projectInfo.PreviewImage} alt="Project Preview Image" className="previewImage"/>
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
