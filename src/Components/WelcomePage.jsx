export default function WelcomePage(){
    return (
        <>
        <div className="home-start-screen">
        <h1 className="brand-name">Caraleto</h1>
        <h2 className="slogan">THE HOUSE OF COFFEE</h2>
        <button className="buy-button">Order Now</button>
      </div>

      <div className="welcome">
        <img
          className="welcome-image"
          src="https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,h_992,w_992/v1568926344/nktuaqru0dwsaob1z3pb.jpg"
          alt="Coffee"
        />
        <p className="welcome-text">
          Indulge in the exquisite flavors of our luxury coffee collection.
          Crafted from the finest beans worldwide, each cup promises a journey
          of sensory delight. Elevate your coffee ritual with our rich aromas
          and smooth textures, perfect for discerning connoisseurs seeking
          sophistication and refinement in every sip.
        </p>
      </div>
        </>
    )
}