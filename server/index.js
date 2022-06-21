const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'tictactoeSystem',
});

app.post('/saveGame', (req, res) => {
  const savedGame = req.body.savedGame;
  const winner = req.body.winner;

  db.query(
    'INSERT INTO games (savedGame, winner) VALUES (?, ?)',
    [savedGame, winner],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

app.get("/getSavedGames", (req, res) => {
  db.query("SELECT * FROM games", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log('server running');
});
