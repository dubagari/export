import hero from "../assets/hero.jpg";
import "./css/Home.css";
import ProductCart from "./cart/ProductCart";
import Service from "../service/ServiceData";
import { EmailService } from "../service/EmailService";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <h2 className="head">Pure Agriculture Products</h2>
        <h3 className="pragraph">
          Welcome to AgroLink. We believe in better Agriculture for better
          Future
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia{" "}
          <br />
          cumque quibusdam ducimus totam omnis fuga quisquam facere sunt
          repellat sapiente?
        </p>

        <Link to="/about">
          <button className="home-btn">About us</button>
        </Link>
      </div>

      <section className="hero-container">
        <div className="hero">
          <div className="image">
            <img src={hero} alt="image" />
          </div>
          <div className="contain">
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              obcaecati iure corporis adipisci! Quae dolor sequi nemo velit
              consequatur quidem facere atque et dolorem odit distinctio facilis
              ratione, impedit hic nisi quasi saepe veritatis tempore,
              laboriosam fugit, animi optio quisquam aspernatur consequuntur.
              Dicta totam laborum autem nesciunt ipsam perspiciatis nihil?
            </p>
            <div>{/* <button className="home-btn">About us</button> */}</div>
          </div>
        </div>

        <div className="service-info">
          <Service />
        </div>
      </section>

      <section className="product">
        <h1 className="heading">products</h1>
        <ProductCart />
      </section>
      <section className="contact-info">
        <h1 className="contac">contact us</h1>
        <div className="email-contact">
          <EmailService />
        </div>
      </section>
    </>
  );
};

export default Home;
