import About from "./About";
import Toolbar from "./Toolbar";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
        <About />
        <Projects />
      </header>
    </div>
  );
}

export default App;
