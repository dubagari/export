import "../component/css/About.css";

import image2 from "../assets/hero.jpg";
const About = () => {
  return (
    <main>
      <section>
        <div className="hero">
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
          </div>
          <div className="image">
            <img src={image2} alt="image" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
