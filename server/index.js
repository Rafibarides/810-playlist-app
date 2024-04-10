const express = require('express');
const songControllers = require('./controllers/songControllers');
const app = express();
const port = 8081; 

const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};
app.use(logRoutes);


app.use(express.json()); 

app.get('/api/songs', songControllers.serveSongs);
app.get('/api/songs/:id', songControllers.serveSong);
app.post('/api/songs', songControllers.createSong);
app.put('/api/songs/:id', songControllers.updateSong);
app.delete('/api/songs/:id', songControllers.deleteSong);

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

