import React from "react";
import { Link } from "react-router-dom";
import CategoryGame from "../components/CategoryGame";

export default function Categories() {
  return (
    <>
      <CategoryGame />
      <Link to="/">
        <button className="returnbutton" type="button">
          Return
        </button>
      </Link>
    </>
  );
}
