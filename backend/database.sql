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

DROP TABLE IF EXISTS themes;

CREATE TABLE themes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    theme VARCHAR(500) NOT NULL
); 

INSERT INTO questions (question, category) VALUES
("Ne pas se laver pendant une semaine", "Multi"),
("Donne le nom de 3 personnages de", "Citation"),
("Combien y a t'il d'habitants en Thaïlande ?", "Questions"),
("Cite 3 capitales d'Amérique du Sud", "Questions"),
("Vous devez tous vous vouvoyez, manants!", "Evènements"),
("Tu dois faire 10 pompes", "Action"),
("Quelle est ta plus grande phobie", "Vérité");

INSERT INTO themes (theme) VALUES
("Harry Potter"),
("Star Wars"),
("Marvel"),
("DC Comics"),
("League of Legends"),
("Naruto");