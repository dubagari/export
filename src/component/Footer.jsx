import { Link } from "react-router-dom";
import "./footer.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 10);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-items">
            <div className="item1">
              <h1>welcome</h1>
              <h3>beezet</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Sapiente, laboriosam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                odio ex blanditiis dolorum autem, corrupti nostrum explicabo
                distinctio, cumque corporis quam dignissimos ipsa sed nam
                sapiente odit, impedit sunt deleniti architecto. Hic sunt rerum
                illo maxime, commodi eaque dolor? Nemo?
              </p>
            </div>
            <div className="item2">
              <h2>contact us</h2>
              <div className="links">
                <div className="link">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>{" "}
                  <h3>@gmail.com</h3>
                </div>
                <div className="link">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>{" "}
                  <h3>+233 244756175</h3>
                </div>
                <div className="link">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>{" "}
                  <h3>Ghana</h3>
                </div>
                <div className="link">
                  <span>
                    <i className="ri-links-line"></i>
                  </span>{" "}
                  <h3>abc.com</h3>
                </div>
              </div>
            </div>
            <div className="item3">
              <h2>useful link</h2>
              <h3>
                <Link to="/" className="cta">
                  home
                </Link>
              </h3>
              <h3>
                <Link to="/about" className="cta">
                  about
                </Link>
              </h3>
              <h3>
                <Link to="/contactus" className="cta">
                  contact
                </Link>
              </h3>
            </div>
            <div className="item4">
              <h2>availabel category</h2>
              <h3>Industrial Palm Oil</h3>
              <h3>Habiscus Flower</h3>
              <h3>Sheabutter</h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
