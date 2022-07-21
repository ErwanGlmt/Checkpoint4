import React from "react";

export default function CategoryGame() {
  return (
    <div className="categorypage">
      <div className="categoryhead">
        <h1>Choississez une catégorie</h1>
      </div>
      <div className="categoryselect">
        <div className="singlecat">
          <h2>Je n'ai jamais</h2>
        </div>
        <div className="singlecat">
          <h2>Qui pourrait ?</h2>
        </div>
        <div className="singlecat">
          <h2>Action</h2>
        </div>
        <div className="singlecat">
          <h2>Vérité</h2>
        </div>
        <div className="singlecat">
          <h2>Quizz !</h2>
        </div>
        <div className="singlecat">
          <h2>Culture Test !</h2>
        </div>
      </div>
    </div>
  );
}
