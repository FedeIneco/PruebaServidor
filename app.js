const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();

app.use(cors()); // Agrega el middleware cors

app.use(express.static('public'));

app.get('/run-script', (req, res) => {
  exec('node script.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).send('Error');
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      res.status(500).send('Error');
      return;
    }
    res.send(stdout);
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
