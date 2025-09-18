import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
};

export default Index;
