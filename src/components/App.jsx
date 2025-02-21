import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import "../css/App.css";

import Header from "./Header";
import About from "./About";
import Project from "./Project";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <About />
      <div className="card"></div>

      <Project />
      <Footer />
    </>
  );
}

export default App;
