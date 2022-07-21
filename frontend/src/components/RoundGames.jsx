import React, { useState, useEffect, useContext } from "react";
import RoundsContext from "../contexts/RoundsContext";
import RandomContext from "../contexts/RandomContext";
import NewQuestion from "./NewQuestion";
import "./RoundGames.css";

export default function RoundGames() {
  const { setRounds } = useContext(RoundsContext);
  const [questions, setQuestions] = useState([]);
  const [getId, setGetId] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/questions`)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  const getRandomId = (max) => {
    return Math.floor(Math.random() * max);
  };
  const randomId = getRandomId(questions.length);

  const handleRounds = (event) => {
    event.preventDefault();
    setRounds((oldRound) => oldRound + 1);
    setGetId(randomId);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RandomContext.Provider value={{ getId }}>
      <div className="roundcontainer">
        <NewQuestion />
        <button className="buttonround" type="button" onClick={handleRounds}>
          Next
        </button>
      </div>
    </RandomContext.Provider>
  );
}
