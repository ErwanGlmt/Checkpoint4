import React from "react";
import { Link } from "react-router-dom";
import CategoryGame from "../components/CategoryGame";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="categoriescontainer">
      <CategoryGame />
      <div>
        <Link to="/">
          <button className="returnbutton" type="button">
            ⬅
          </button>
        </Link>
      </div>
    </div>
  );
}
