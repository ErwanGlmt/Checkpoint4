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
      <div>
        {ready ? (
          <div>
            <InGame />
          </div>
        ) : (
          <div className="playcontainer">
            <div>
              <h1>Jouer une partie</h1>
            </div>
            {players.map((player) => (
              <li className="playername">{player}</li>
            ))}
            <form onSubmit={handlePlayers} className="addplayers">
              <input
                type="text"
                value={playersInput}
                onChange={(event) => setPlayersInput(event.target.value)}
                required
              />
              <button className="buttonaddplayer" type="button">
                Ajouter un joueur
              </button>
            </form>

            {ready ? (
              <div>
                <Link to="/">
                  <button
                    className="buttonplay"
                    type="button"
                    onChange={handlePlayers}
                  >
                    Retour
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
                      Jouer
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
                  <button className="buttonplay" type="button">
                    Retour
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
