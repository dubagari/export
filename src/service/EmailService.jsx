import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./EmailService.css";
import Head from "./Head";

export const EmailService = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lgkdbgy", "template_rfng0n7", form.current, {
        publicKey: "6VHoHEoLCO4rVvizB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="inputbox">
          <input type="text" placeholder="First name" name="from_name" />
          <input type="text" placeholder="Second name" name="from_name" />
        </div>
        <div className="inputbox">
          <input type="email" placeholder="Email" name="from_email" />
          <input type="number" placeholder="Phone number" name="from_phone" />
        </div>

        <textarea name="message" id="" placeholder="Massage"></textarea>
        <button type="submit" className="btn">
          send
        </button>
      </form>
    </>
  );
};
