import React, { useState, useEffect, useContext } from "react";
import RandomContext from "../contexts/RandomContext";
import RoundsContext from "../contexts/RoundsContext";
import PlayersContext from "../contexts/PlayersContext";
import alcoolgif from "../assets/alcoolgif.gif";
import "./NewQuestion.css";

export default function NewQuestion() {
  const { getId } = useContext(RandomContext);
  const { players } = useContext(PlayersContext);
  const { rounds } = useContext(RoundsContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/questions`)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const getRandomPlayer = getRandomInt(players.length);

  return (
    <div className="newcontainer">
      {rounds === 0 ? (
        <div className="beginstage">
          <img src={alcoolgif} className="gif" alt="begingame" />
        </div>
      ) : (
        <div className="newquestioncontainer">
          <h5>{rounds}/30</h5>
          {questions[getId].category === "Citation" ? (
            <div className="intoquestion">
              <h4 id="culture">Culture Test !</h4>
              <h2 className="randomplayer">{players[getRandomPlayer]}</h2>
              <h3 className="singlequestion">{questions[getId].question}</h3>
              <p>Bois une gorgée par mauvaise réponse, sinon donne les !</p>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Question" ? (
            <div className="intoquestion">
              <h4 id="champion">Quizz !</h4>
              <h2 className="randomplayer">{players[getRandomPlayer]}</h2>
              <h3 className="singlequestion">{questions[getId].question}</h3>
              <p>5 gorgées en jeu !</p>
              <div className="quizzvoid" />
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Qui" ? (
            <div className="intoquestion">
              <h4 id="qui">Qui pourrait ?</h4>
              <div className="voidtag" />
              <h3 className="singlequestion">{questions[getId].question}</h3>
              <p>La personne élue boira 3 gorgées !</p>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Jamais" ? (
            <div className="intoquestion">
              <h4 id="never">Je n'ai jamais ...</h4>
              <div className="voidtag" />
              <h3 className="singlequestion">{questions[getId].question}</h3>
              <p>Ceux qui ne l'on jamais fait boivent 3 gorgées</p>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Event" ? (
            <div className="intoquestion">
              <h4 id="event">Comment ça ? L'alcool c'est pas cool ?</h4>
              <div className="voidtagevent" />
              <h3 className="singlequestion">{questions[getId].question}</h3>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Vérité" ? (
            <div className="intoquestion">
              <h4 id="truth">Vérité</h4>
              <h2 className="randomplayer">{players[getRandomPlayer]}</h2>
              <h3 className="singlequestion">{questions[getId].question}</h3>
              <p>Réponds et tout le monde prend une gorgée !</p>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Action" ? (
            <div className="intoquestion">
              <h4 id="action">Action</h4>
              <h2 className="randomplayer">{players[getRandomPlayer]}</h2>
              <h3 className="singlequestion">{questions[getId].question}</h3>
              <p>Distribue 3 gorgées en cas de réussite !</p>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}
