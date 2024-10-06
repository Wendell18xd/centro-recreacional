export const HeroApp = () => {
  return (
    <section id="hero" className="hero section">
      <div className="hero-bg">
        <img src="assets/img/hero-bg-light.webp" alt="" />
      </div>
      <div className="container text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>
            Welcome to <span>QuickStart</span>
          </h1>
          <p>
            Quickly start your project now and set the stage for success
            <br />
          </p>
          <img
            src="assets/img/hero-services-img.webp"
            className="img-fluid hero-img"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
