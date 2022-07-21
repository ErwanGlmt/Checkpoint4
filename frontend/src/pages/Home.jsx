import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Logo from "../assets/logocheckpoint.png";

export default function Home() {
  return (
    <div className="homecontainer">
      <div>
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="buttonlist">
        <Link to="/Play">
          <button className="buttonhomeplay" type="button">
            Play
          </button>
        </Link>
        <Link to="/Categories">
          <button className="buttonhomecat" type="button">
            Categories
          </button>
        </Link>
        <Link to="/AddRules">
          <button className="buttonhomerule" type="button">
            Add a Rule
          </button>
        </Link>
      </div>
    </div>
  );
}
