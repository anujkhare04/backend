import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, From backend');
});

app.get('/health', (req, res) => {
  res.send('Hello, From backend is fine Anuj v2');
});

const PORT = process.env.PORT || 5000;      


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});