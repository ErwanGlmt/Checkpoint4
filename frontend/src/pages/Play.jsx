/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Play.css";
import PlayersContext from "../contexts/PlayersContext";
import InGame from "../components/InGame";

export default function Play() {
  const [players, setPlayers] = useState([]);
  const [playersInput, setPlayersInput] = useState("");
  const [ready, setReady] = useState(false);

  const handlePlayers = (event) => {
    event.preventDefault();
    setPlayersInput("");
    setPlayers([...players, playersInput]);
  };

  const handleReady = (event) => {
    event.preventDefault();
    setReady(true);
  };

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      <div className="playcontainer">
        {ready || players.length > 7 ? (
          <div>
            <InGame />
          </div>
        ) : (
          <div className="readycontainer">
            <div className="playhead">
              <h1>Lancer une partie</h1>
              <p>De 2 à 8 joueurs</p>
            </div>
            <div className="namemanager">
              <div className="playersection">
                {players.map((player) => (
                  <li className="playername">{player}</li>
                ))}
              </div>
            </div>
            <form onSubmit={handlePlayers} className="addplayers">
              <input
                className="inputplayer"
                type="text"
                placeholder="Nom du joueur"
                value={playersInput}
                onChange={(event) => setPlayersInput(event.target.value)}
                required
              />
              <button className="buttonaddplayer" type="submit">
                Ajouter un joueur
              </button>
            </form>

            {ready ? (
              <div>
                <Link to="/">
                  <button
                    className="buttonreturn"
                    type="button"
                    onChange={handlePlayers}
                  >
                    ⬅
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                {players.length >= 2 ? (
                  <div>
                    <button
                      className="buttonplay"
                      type="button"
                      onClick={handleReady}
                    >
                      Valider
                    </button>
                  </div>
                ) : (
                  <div>
                    <button className="buttonplay" type="button" disabled>
                      Il faut au moins 2 joueurs !
                    </button>
                  </div>
                )}
                <Link to="/">
                  <button className="buttonreturn" type="button">
                    ⬅
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </PlayersContext.Provider>
  );
}
