import React, { useState } from "react";
import { Link } from "react-router-dom";
import EndGame from "./EndGame";
import RoundGames from "./RoundGames";
import RoundsContext from "../contexts/RoundsContext";

export default function InGame() {
  const [rounds, setRounds] = useState(0);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RoundsContext.Provider value={{ rounds, setRounds }}>
      <div>
        {rounds >= 100 ? (
          <div>
            <EndGame />
          </div>
        ) : (
          <div>
            <div>
              <h1>InGame</h1>
              <RoundGames />
            </div>
            <Link to="/">
              <button className="buttonreturn" type="button">
                Retour
              </button>
            </Link>
          </div>
        )}
      </div>
    </RoundsContext.Provider>
  );
}
