import image2 from "../assets/hero.jpg";

import Head from "../service/Head";
import ServiceData from "../service/ServiceData";
import "./css/About.css";

const About = () => {
  return (
    <main>
      <Head title="About us" />
      <section className="hero-container1">
        <div className="hero1">
          <div className="contain1">
            <h3>About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              obcaecati iure corporis adipisci! Quae dolor sequi nemo velit
              consequatur quidem facere atque et dolorem odit distinctio facilis
              ratione, impedit hic nisi quasi saepe veritatis tempore,
              laboriosam fugit, animi optio quisquam aspernatur consequuntur.
              Dicta totam laborum autem nesciunt ipsam perspiciatis nihil?
            </p>
          </div>
          <div className="image1">
            <img src={image2} alt="image" />
          </div>
        </div>

        <div className="service-info">
          <ServiceData />
        </div>
      </section>
    </main>
  );
};

export default About;
