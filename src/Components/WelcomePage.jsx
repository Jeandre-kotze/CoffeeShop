export default function WelcomePage(){
    return (
        <>
        <div className="home-start-screen">
        <h1 className="brand-name">Caraleto</h1>
        <h2 className="slogan">THE HOUSE OF COFFEE</h2>
        <button className="buy-button">Order Now</button>
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 flex items-center w-screen">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="https://res.cloudinary.com/traveltripperweb/image/upload/c_fit,h_992,w_992/v1568926344/nktuaqru0dwsaob1z3pb.jpg" className="d-block img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis mb-3 px-3">Responsive left-aligned hero with image</h1>
          <p className="lead px-3">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        </div>
      </div>
        </>
    )
}