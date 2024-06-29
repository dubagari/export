import React from "react";
import { EmailService } from "../service/EmailService";

const Contactus = () => {
  return (
    <main>
      <section className="service contact">
        <h1 className="contac">contact us</h1>
        <EmailService />
      </section>
    </main>
  );
};

export default Contactus;
