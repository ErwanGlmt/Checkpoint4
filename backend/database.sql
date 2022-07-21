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
("Ne pas se laver pendant une semaine", "Multi"),
("Donne le nom de 3 personnages de", "Citation"),
("Combien y a t'il d'habitants en Thaïlande ? (à 5 millions près)", "Question"),
("Cite 3 capitales d'Amérique du Sud", "Citation"),
("Vous devez tous vous vouvoyez, manants!", "Event"),
("Tu dois faire 10 pompes", "Action"),
("Dans Harry Potter, cite 3 sorcier de Gryffondor", "Citation"),
("Dans Harry Potter, cite 3 sorcier de Serpentard", "Citation"),
("Dans Harry Potter, cite 3 sorcier de Serdaigle", "Citation"),
("Dans Harry Potter, cite 3 sorcier de Pouffsouffle", "Citation"),
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