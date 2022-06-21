# Tic Tac Toe Game
Created with React, MaterialUI, Node, Express and MySQL.



## Installation and Setup Instructions

Clone down this repository. You will need `node`, `npm` and `mysql` installed globally on your machine.  

Client Installation:
(Inside client folder)

`npm install`  

To Start Client:

`npm start`  

To Visit App:

`localhost:3000/`  

Server Installation:
(Inside server folder)

`npm install`  

To Start Server:

`node index.js` 

To Create Database run this script:

CREATE DATABASE  IF NOT EXISTS `tictactoeSystem`;
USE 'tictactoeSystem';

CREATE TABLE `games` (
  `id` int NOT NULL AUTO_INCREMENT,
  `savedGame` text NOT NULL,
  `winner` text,
  PRIMARY KEY (`id`)
);


## Enjoy Playing!
