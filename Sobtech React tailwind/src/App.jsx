import Demo from "./components/Slider";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import SectionC from "./components/SectionC";
import Pricing from "./components/Pricing";
import Blogs from "./components/Blogs.jsx";
import Faq from "./components/Faq.jsx";
import Alias from "./components/Alias.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/Projects.jsx";
import Slider2 from "./components/Slider2.jsx";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <SectionA />
      <SectionB />
      <Demo />
      <SectionC />
      <Projects />
      <Pricing />
      <Slider2 />
      <Alias />
      <Blogs />
      <Faq />
      <Footer />
    </div>
  );
}
export default App;
