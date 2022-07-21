import React, { useState } from "react";
import { Link } from "react-router-dom";
import EndGame from "./EndGame";
import RoundGames from "./RoundGames";
import RoundsContext from "../contexts/RoundsContext";
import "./InGame.css";

export default function InGame() {
  const [rounds, setRounds] = useState(0);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RoundsContext.Provider value={{ rounds, setRounds }}>
      <div className="ingamecontainer">
        {rounds > 30 ? (
          <div>
            <EndGame />
          </div>
        ) : (
          <div className="ingamesecond">
            <div>
              {rounds === 0 ? <h1>Let's go !</h1> : ""}
              <RoundGames />
            </div>
            <Link to="/">
              <button className="buttoningame" type="button">
                Fin de partie
              </button>
            </Link>
          </div>
        )}
      </div>
    </RoundsContext.Provider>
  );
}
