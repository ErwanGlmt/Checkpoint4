import React, { useState, useEffect, useContext } from "react";
import RandomContext from "../contexts/RandomContext";
import RoundsContext from "../contexts/RoundsContext";

export default function NewQuestion() {
  const { getId } = useContext(RandomContext);
  const { rounds } = useContext(RoundsContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/questions`)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div>
      {rounds === 0 ? (
        <div>
          <p>C'est parti !</p>
        </div>
      ) : (
        <div>
          <p>{getId}</p>
          {questions[getId].category === "Citation" ? (
            <div>
              <p>Culture Test !</p>
              <p>Bois une gorgée par mauvaise réponse, sinon donne les !</p>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Question" ? (
            <div>
              <p>Question pour un champion !</p>
              <p>5 gorgées en jeu !</p>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Multi" && rounds % 2 === 0 ? (
            <div>
              <p>Qui pourrait ?</p>
              <p>La personne élue boira 3 gorgées !</p>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Multi" && rounds % 2 !== 0 ? (
            <div>
              <p>Je n'ai jamais ...</p>
              <p>Ceux qui n'ont jamais boivent 3 gorgées</p>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Event" ? (
            <div>
              <p>Comment ça ? L'alcool c'est pas cool ?</p>
              <p>y'as le mot cool dans alcool</p>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Vérité" ? (
            <div>
              <p>Vérité</p>
              <p>Réponds et tout le monde prend une gorgée !</p>
            </div>
          ) : (
            ""
          )}
          {questions[getId].category === "Action" ? (
            <div>
              <p>Action</p>
              <p>Distribue 3 gorgées en cas de réussite !</p>
            </div>
          ) : (
            ""
          )}
          <p>{rounds}</p>
          <p>{questions[getId].question}</p>
        </div>
      )}
    </div>
  );
}
