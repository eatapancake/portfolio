import About from "./About";
import Toolbar from "./Toolbar";
import Projects from "./Projects";
import "./App.css";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
        <About />
        <Projects />
        <Contact />
      </header>
    </div>
  );
}

export default App;
