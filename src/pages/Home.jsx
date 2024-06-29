import "../component/css/Home.css";
import hero from "../assets/hero.jpg";

import ProductCart from "./cart/ProductCart";
import Service from "../service/ServiceData";
import { EmailService } from "../service/EmailService";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <h2 className="head">
          Pure Agriculture <br />
          Products
        </h2>
        <h3 className="pragraph">
          Welcome to AgroLink. We believe in better Agriculture for better
          Future
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed modi
          <br />
          esse consequuntur voluptates consectetur cum quisquam quod at quidem
          ipsum.
        </p>
        <div className="btn">
          <button className="home-btn">About us</button>
        </div>
      </div>

      <section>
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
            <div>
              <button className="home-btn">About us</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="service-info">
            <Service />
          </div>
        </div>
      </section>

      <section className="service">
        <h1 className="heading">products</h1>
        <ProductCart />
      </section>
      <section className="service contact">
        <h1 className="contac">contact us</h1>

        {/* <div className="inputbox">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Second name" />
          </div>
          <div className="inputbox">
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone number" />
          </div>

          <textarea name="" id="" placeholder="Massage"></textarea>
          <button className="home-btn btn">send</button> */}
        <EmailService />
      </section>
    </>
  );
};

export default Home;
