import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="home-start-screen flex flex-col items-center justify-center text-white h-screen">
        <h1
          style={{ fontFamily: "Dancing Script" }}
          className="z-0 text-8xl font-bold text-[#E3C08D] drop-shadow-lg"
        >
          Caraleto
        </h1>
        <h2 className="text-2xl pb-4 tracking-widest text-[#FFD700]">
          THE HOUSE OF COFFEE
        </h2>
        <Link
          to="/products"
          className="text-white py-3 px-6 rounded-xl shadow-md text-lg font-medium tracking-wide transition-all duration-300 
          bg-[#B58338] hover:bg-[#8C6239]"
        >
          Order Now
        </Link>
      </div>

      {/* Information Row */}
      <div className="row flex flex-col-reverse lg:flex-row-reverse items-center justify-center py-10 px-5 bg-[#4E342E] text-white">
        {/* Image Section */}
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="/coffeeGroup.jpg"
            className="d-block img-fluid rounded-lg shadow-lg"
            alt="Coffee Collection"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 lg:px-6 text-center lg:text-left">
          <h1 className="text-4xl font-semibold mb-4 text-[#E3C08D]">
            Experience the Aroma of Perfection
          </h1>
          <p className="text-lg font-light text-[#D7A86E] leading-relaxed">
            Savor the rich, full-bodied flavors of our artisan coffee blends,
            crafted with passion and precision. Every cup is a journey through
            taste, designed to awaken your senses and elevate your coffee
            experience.
          </p>
        </div>
      </div>
    </>
  );
}
