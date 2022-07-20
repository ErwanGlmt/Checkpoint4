import React from "react";
import { Link } from "react-router-dom";

export default function AddRules() {
  return (
    <>
      <div>
        <h1>Add a Rule</h1>
      </div>
      <Link to="/">
        <button className="buttonreturn" type="button">
          Return
        </button>
      </Link>
    </>
  );
}
