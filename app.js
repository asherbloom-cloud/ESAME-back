const express = require('express');
const app = express();
const port = 3000;

// Middleware per il parsing del corpo delle richieste in formato JSON
app.use(express.json());

// Dati in memoria per i biglietti
let biglietti = [];

// Endpoint per ottenere tutti i biglietti
app.get('/biglietti', (req, res) => {
  res.json(biglietti);
});

// Endpoint per creare un nuovo biglietto
app.post('/biglietti', (req, res) => {
  const nuovoBiglietto = {
    id: biglietti.length + 1,
    evento: req.body.evento,
    data: req.body.data,
    prezzo: req.body.prezzo
  };
  biglietti.push(nuovoBiglietto);
  res.status(201).json(nuovoBiglietto);
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});