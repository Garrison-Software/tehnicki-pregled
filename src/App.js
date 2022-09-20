import "./App.css";
import Header from "./sections/Header/Header";
import NavMenu from "./sections/NavigationMenu/NavMenu";
import Hero from "./sections/HeroBanner/Hero";
import Footer from "./sections/Footer/Footer";
import AboutUs from "./sections/AboutUs/AboutUs";
function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
