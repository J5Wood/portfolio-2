import "./App.css";
import { Nav } from "./Nav";
import img from "./assets/original-portfolio-picture.png";
import { AboutMe } from "../AboutMe";

function App() {
  return (
    <main className="app">
      <Nav />
      <img className="portfolio-picture" src={img} />
      <AboutMe />
    </main>
  );
}

export default App;
