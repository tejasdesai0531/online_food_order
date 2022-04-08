import request from 'supertest';
import { app } from '../../../../app';

it('responds with status code 200', async () => {
  const token = global.signin()

  const response = await request(app)
    .get('/api/restaurant')
    .set('Authorization', token)
    .send()
    .expect(200);
});
