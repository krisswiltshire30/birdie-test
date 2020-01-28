import app from '../src/application';
import * as request from 'supertest';

describe('Gets a responce from the endpoint', () => {
  it('Successfully gets a responce', async () => {
    await request(app)
      .get('/events')
      .expect(404);
  });
});