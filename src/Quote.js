import React from "react";
import "./Quote.css";

const Quote = ({ show, setShow }) => {
  return (
    <div className="quote">
      <div className="box">
        <h1>Advice of the day</h1>
        <h3>{show}</h3>
      </div>
    </div>
  );
};

export default Quote;
