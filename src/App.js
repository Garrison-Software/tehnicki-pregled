
import "./App.css";
import Header from "./sections/Header/Header";
import NavMenu from "./sections/NavigationMenu/NavMenu";
import Hero from "./sections/HeroBanner/Hero";
import AboutUs from "./sections/AboutUs/AboutUs";
import Footer from "./sections/Footer/Footer";
import Promo from "./sections/TheirPromotions/Promo";
import CardSection from "./sections/CardSection/CardSection";




function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <Hero/>
      <AboutUs/>
      <CardSection/>
      <Promo/>
      <Footer />
    </div>
  );
}

export default App;
