import logo from "./logo.svg";
import "./App.css";
import Header from "./sections/Header/Header";
import NavMenu from "./sections/NavigationMenu/NavMenu";
import Hero from "./sections/HeroBanner/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <Hero/>
    </div>
  );
}

export default App;
