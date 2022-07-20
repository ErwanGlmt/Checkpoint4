import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div>
        <h1>Contact us</h1>
      </div>
      <Link to="/">
        <button className="buttonreturn" type="button">
          Return
        </button>
      </Link>
    </>
  );
}
