import Hero from "../components/Home";
import NavBar from "../components/NavBar";
import About from "./About";
import Contact from "./Contact";
import Course from "./Course";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Course />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
