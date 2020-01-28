// import app from './application';
import * as express from 'express';
import apiRouter from './controllers/db_request';

const port = process.env.PORT || 8000;
const app = express();

app.use(express.static('public'));
app.use(apiRouter);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
