
import "./App.css";
import Header from "./sections/Header/Header";
import NavMenu from "./sections/NavigationMenu/NavMenu";
import Hero from "./sections/HeroBanner/Hero";
import AboutUs from "./sections/AboutUs/AboutUs";
import Card from "./components/card/Card";
import img1 from "./assets/icons/repair/pexels-cottonbro-4489765.jpg"


function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <Hero/>
      <AboutUs/>
      <div>
    
      <Card
      src={img1}
      alt="alt"
      price="100"
      title="tehnicki pregled"
      href1="#"
      href2="#"
      Link1Text="Get a Quote"
      Link2Text="reaad more"
      overlayTitle="Tehnicki pregled"
      overlaySubtitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis ut in quasi nesciunt deleniti amet, libero repellat, eius facilis quas reprehenderit eveniet ipsum enim? Rerum quam consequatur qui perferendis."
      overlayHref="#"
      overlayLinkText="read More"
      />
      </div>
    </div>
  );
}

export default App;
