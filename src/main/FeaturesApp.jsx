export const FeaturesApp = () => {
  return (
    <section id="features" className="features section">
      <div className="container section-title">
        <h2>Features</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center">
            <ul className="nav nav-tabs" data-aos-delay="100">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-1"
                >
                  <i className="bi bi-binoculars"></i>
                  <div>
                    <h4 className="d-none d-lg-block">
                      Modi sit est dela pireda nest
                    </h4>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-2"
                >
                  <i className="bi bi-box-seam"></i>
                  <div>
                    <h4 className="d-none d-lg-block">
                      Unde praesenti mara setra le
                    </h4>
                    <p>
                      Recusandae atque nihil. Delectus vitae non similique
                      magnam molestiae sapiente similique tenetur aut voluptates
                      sed voluptas ipsum voluptas
                    </p>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-3"
                >
                  <i className="bi bi-brightness-high"></i>
                  <div>
                    <h4 className="d-none d-lg-block">
                      Pariatur explica nitro dela
                    </h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                      Debitis nulla est maxime voluptas dolor aut
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
            <div className="tab-content" data-aos-delay="200">
              <div className="tab-pane fade active show" id="features-tab-1">
                <img src="assets/img/tabs-1.jpg" alt="" className="img-fluid" />
              </div>

              <div className="tab-pane fade" id="features-tab-2">
                <img src="assets/img/tabs-2.jpg" alt="" className="img-fluid" />
              </div>

              <div className="tab-pane fade" id="features-tab-3">
                <img src="assets/img/tabs-3.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
