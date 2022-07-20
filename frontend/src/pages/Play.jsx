import React from "react";
import { Link } from "react-router-dom";

export default function Play() {
  return (
    <>
      <div>
        <h1>Play a game</h1>
      </div>
      <Link to="/">
        <button className="buttonreturn" type="button">
          Return
        </button>
      </Link>
    </>
  );
}
