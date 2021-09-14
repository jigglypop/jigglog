import express from 'express';
import rootRouter from './router';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(rootRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
