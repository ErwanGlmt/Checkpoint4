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
            Jouer
          </button>
        </Link>
        <Link to="/Categories">
          <button className="buttonhomecat" type="button">
            Catégories
          </button>
        </Link>
        <Link to="/AddRules">
          <button className="buttonhomerule" type="button">
            Ajouter une règle
          </button>
        </Link>
      </div>
    </div>
  );
}
