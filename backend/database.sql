DROP DATABASE IF EXISTS alcool;

CREATE DATABASE alcool
DEFAULT CHARACTER SET = utf8;

USE alcool;

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question VARCHAR(255) NOT NULL,
    category VARCHAR (255) NOT NULL
); 

INSERT INTO questions (question, category) VALUES
("Ne pas se laver pendant une semaine", "Qui"),
("Courir à poil sur les Champs-Elysées", "Qui"),
("Brûler un billet de 50 euro pour 10 euro", "Qui"),
("Voyagé hors de l'Europe", "Jamais"),
("Fait de saut en parachute", "Jamais"),
("Consommé de drogue (Y'as pas cool dans drogue)", "Jamais"),
("Donne le nom de 3 personnages de Friends", "Citation"),
("Combien y a t'il d'habitants en Thaïlande ? (à 5 millions près)", "Question"),
("Cite 3 capitales d'Amérique du Sud", "Citation"),
("Vous devez tous vous vouvoyez à partir de maintenant, 1 gorgée à chaque manque !", "Event"),
("Le joueur le plus jeune invente une règle!", "Event"),
("Le joueur le plus vieux invente une règle!", "Event"),
("Le joueur le plus grand invente une règle!", "Event"),
("Le joueur le plus petit invente une règle!", "Event"),
("5 gorgées pour toutes les femmes", "Event"),
("5 gorgées pour tout les hommes", "Event"),
("Il est interdit de regarder son téléphone (sauf pour le jeu) 1 gorgée à chaque oubli", "Event"),
("Tout le monde change de place et boit une gorgée", "Event"),
("Gorgées double pendant 5 rounds !", "Event"),
("Tu dois faire 10 pompes", "Action"),
("Dans Harry Potter, cite 3 sorciers de Gryffondor", "Citation"),
("Dans Harry Potter, cite 3 sorciers de Serpentard", "Citation"),
("Dans Harry Potter, cite 3 sorciers de Serdaigle", "Citation"),
("Dans Harry Potter, cite 3 sorciers de Pouffsouffle", "Citation"),
("Cite 3 antoganistes d'Harry Potter", "Citation"),
("Cite 3 antoganistes de Star Wars", "Citation"),
("Cite 3 héros de Star Wars", "Citation"),
("Cite 3 héros de Marvel", "Citation"),
("Cite 3 antagonistes de Marvel", "Citation"),
("Cite 3 antagonistes de DC Comics", "Citation"),
("Cite 3 héros de DC Comics", "Citation"),
("Cite 3 personnages de League of Legends", "Citation"),
("Cite 3 personnages de Naruto", "Citation"),
("Quelle est ta plus grande phobie", "Vérité");