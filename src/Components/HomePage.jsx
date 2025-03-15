import Navbar from "./Navbar";
import WelcomePage from "./WelcomePage.jsx"
import ProductsSlider from "./ProductsSlider.jsx";

function HomePage() {

  return (
    <div style={{ backgroundColor: "#4E342E"}}>
      <Navbar />
      <WelcomePage />
      <div className="w-full h-full">
        <ProductsSlider />
      </div>
    </div>
  );
}

export default HomePage;
