import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import YouTubeVideo from "./Components/Vedio";
import ImageSlider from "./Components/Gallery";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <YouTubeVideo />
      <Work />
      <ImageSlider /> 
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
