import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import fs from 'fs';

// import expressSession from 'express-session';
// import errorMiddleware from './middleware/errorMiddleware';
// import { sequelize } from './models';
// import rootRouter from './router';
// import corsMiddleware from './middleware/corsMiddleware';

config();
const app = express();
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cookieParser());
app.listen(3000, () => {
  fs.readdir('./src/pages', function(error, filelist) {
    console.log(filelist);
  });
  console.log('http://localhost:3000');
});
