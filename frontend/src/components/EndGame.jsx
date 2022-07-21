import React from "react";
import { Link } from "react-router-dom";
import giflouis from "../assets/giflouis.gif";
import "./EndGame.css";

export default function EndGame() {
  return (
    <div className="endcontainer">
      <div className="endtitle">
        <h1>Partie Terminée</h1>
      </div>
      <div>
        <img src={giflouis} className="giflouis" alt="endgame" />
      </div>
      <div>
        <Link to="/">
          <button className="buttonend" type="button">
            Retourner au menu
          </button>
        </Link>
      </div>
    </div>
  );
}
