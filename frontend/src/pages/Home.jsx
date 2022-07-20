import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
      <div className="buttonlist">
        <Link to="/Play">
          <button className="buttonhome" type="button">
            Play
          </button>
        </Link>
        <Link to="/Categories">
          <button className="buttonhome" type="button">
            Categories
          </button>
        </Link>
        <Link to="/AddRules">
          <button className="buttonhome" type="button">
            Add a Rule
          </button>
        </Link>
      </div>
    </>
  );
}
