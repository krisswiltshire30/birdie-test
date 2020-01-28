import * as dotenv from "dotenv";

dotenv.config();

export default {

  mysql: {
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    port: 3306,
    user: 'test-read',
    password: process.env.DATABASE_PASSWORD,
    database: 'birdietest',
  }
};