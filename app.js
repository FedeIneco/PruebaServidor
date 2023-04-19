const express = require('express');
const { exec } = require('child_process');

const app = express();
var port = process.env.PORT || 8080
app.use(express.static('public'));

app.get('/', async (req, res) => {
  res.status(200).send({
    message:'FUNCIONO'
  })
})

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
  res.sendFile(__dirname  + '/index.html');
});

app.listen(port, () => {
  console.log('App running on port 8080');
});