import "../css/App.css";

import Header from "./Header";
import About from "./About";
import TechStack from "./Techstack";
import ProjectList from "./ProjectList"
import Footer from "./Footer";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="aboutDiv">
        <About />
      </div>
      <div>
        <TechStack />
      </div>

      <div className="projectsDiv">
        <h2>Projects</h2>
        <ProjectList />
      </div>

      <Footer />
    </>
  );
}

export default App;
