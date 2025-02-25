function Project(props) {
  const projectInfo = {
    Project: props.Project,
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
      <h3>{projectInfo.Project}</h3>
      <p>{projectInfo.Description}</p>
      <p>{projectInfo.FrontEndStack}</p>
      <p>{projectInfo.BackEndStack}</p>
      <p>{projectInfo.GitHubRepositoryURL}</p>
      <p>{projectInfo.ProductionSiteURL}</p>
      <p>{projectInfo.Contributors}</p>
      <p>{projectInfo.License}</p>
      <p>{projectInfo.LastUpdated}</p>
    </div>
  );
}

export default Project;
