import * as express from "express";
import { pingController } from "./controllers/ping";
import { dbRequest } from "./controllers/db_request";

const app = express();

app.use(pingController);
app.use(dbRequest);


export default app;
