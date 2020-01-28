import * as express from 'express';
import Database from '../database';

export const dbRequest = express.Router();

dbRequest.get('/events', async (_, res) => {
  try {
    let events = await Database.Events.all();
    res.json(events);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export default dbRequest;