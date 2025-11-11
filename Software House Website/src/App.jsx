import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
function App() {
  return (
    <div>
      <Intro />
      <Navbar />
      <Hero />
      <SectionA />
      <SectionB />
    </div>
  );
}

export default App;
