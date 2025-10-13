import NavBar from "./components/project/NavBar";
import MacHero from "./components/project/MacHero";
import MacSpecs from "./components/project/MacSpecs";
import Products from "./components/project/Products";
import SwitchToMac from "./components/project/SwitchToMac";
import AppleShopCard from "./components/project/AppleShopCard";
import SignificantOthers from "./components/project/SignificantOthers";
import MacEssentials from "./components/project/MacEssentials";
import Footer from "./components/project/Footer";

function App() {
  return (
    <div className='mx-20'>
      <NavBar />
      <MacHero />
      <MacSpecs />
      <Products />
      <SwitchToMac />
      <AppleShopCard />
      <SignificantOthers />
      <MacEssentials />
      <Footer />
    </div>
  );
}

export default App;
