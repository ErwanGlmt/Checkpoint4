import React, { useState, useEffect } from "react";
import "./CategoryGame.css";

export default function CategoryGame() {
  const [selectCat, setSelectCat] = useState("");
  const [setQuestions] = useState([]);

  const handleSelectCat = (event) => {
    event.preventDefault();
    setSelectCat(event.target.value);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/questions`)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div className="categorypage">
      {selectCat === "" ? (
        <div>
          <div className="categoryhead">
            <h1>Catégories</h1>
          </div>
          <div className="categoryselect">
            <div className="singlecat">
              <button
                className="catbutton"
                type="button"
                onClick={handleSelectCat}
                value="never"
              >
                Je n'ai jamais
              </button>
            </div>
            <div className="singlecat">
              <button
                className="catbutton"
                type="button"
                onClick={handleSelectCat}
                value="who"
              >
                Qui pourrait ?
              </button>
            </div>
            <div className="singlecat">
              <button
                className="catbutton"
                type="button"
                onClick={handleSelectCat}
                value="dare"
              >
                Action
              </button>
            </div>
            <div className="singlecat">
              <button
                className="catbutton"
                type="button"
                onClick={handleSelectCat}
                value="truth"
              >
                Vérité
              </button>
            </div>
            <div className="singlecat">
              <button
                className="catbutton"
                type="button"
                onClick={handleSelectCat}
                value="quizz"
              >
                Quizz !
              </button>
            </div>
            <div className="singlecat">
              <button
                className="catbutton"
                type="button"
                onClick={handleSelectCat}
                value="test"
              >
                Culture Test !
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Tu as choisi la catégorie {selectCat}</p>
        </div>
      )}
    </div>
  );
}
