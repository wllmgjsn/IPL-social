import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${8080}`);
});

export default app;