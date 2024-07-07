import Navbar from "./Navbar";
import WelcomePage from "./WelcomePage.jsx"
import ProductsSlider from "./ProductsSlider.jsx";

function HomePage() {

  return (
    <>
      <Navbar />
      <WelcomePage />
      <div className="w-full h-full">
        <ProductsSlider />
      </div>
    </>
  );
}

export default HomePage;
