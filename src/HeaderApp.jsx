import { Link } from "react-scroll";

export const HeaderApp = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <img src="/assets/img/logo.png" alt="" />
          <h1 className="sitename">QuickStart</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li role="button">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={50}
                activeClass="active"
              >
                Inicio
              </Link>
            </li>
            <li role="button">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={50}
                activeClass="active"
              >
                Acerca de
              </Link>
            </li>
            <li role="button">
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={50}
                activeClass="active"
              >
                Características
              </Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};
