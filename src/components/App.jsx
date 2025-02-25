import "../css/App.css";

import Header from "./Header";
import About from "./About";
import TechStack from "./Techstack";
import Project from "./Project";
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
        <Project />
      </div>

      <Footer />
    </>
  );
}

export default App;
