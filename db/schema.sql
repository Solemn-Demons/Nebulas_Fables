-- dropping database
DROP DATABASE IF EXISTS starchart_db;


-- creating database
CREATE DATABASE starchart_db;

-- dropping db
DROP DATABASE IF EXISTS mythos_db;

-- creating db
CREATE DATABASE mythos_db;

-- user db

DROP DATABASE IF EXISTS users_db;

CREATE DATABASE users_db;

-- drop tables for user, comment, post if they exist
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS post;

-- create table for user
CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL UNIQUE,
    password VARCHAR (255) NOT NULL
);



