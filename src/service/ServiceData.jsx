import React from "react";
import serviceData from "../assets/service.jsx";
import "./Service.css";

const ServiceData = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <div
          className="service-box"
          key={index}
          style={{ background: item.bg }}
        >
          <div className="truck">
            <i className={item.icon}></i>
          </div>
          <div className="text">
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            <p>{item.pragra}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceData;
