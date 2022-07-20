import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <>
      <div>
        <h1>Choose a category</h1>
      </div>
      <Link to="/">
        <button className="buttonreturn" type="button">
          Return
        </button>
      </Link>
    </>
  );
}
