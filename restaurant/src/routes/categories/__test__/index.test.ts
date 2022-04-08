import request from 'supertest';
import { app } from '../../../../app';

it('responds with status code 200', async () => {

  const response = await request(app)
    .get('/api/restaurant/categories')
    .send()
    .expect(201);
});
