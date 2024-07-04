import React from "react";
import { EmailService } from "../service/EmailService";
import Head from "../service/Head";

const Contactus = () => {
  return (
    <main>
      <section className="service contact">
        {/* <h1 className="contac">contact us</h1> */}
        <Head title="contact us" />
        <EmailService />
      </section>
    </main>
  );
};

export default Contactus;
