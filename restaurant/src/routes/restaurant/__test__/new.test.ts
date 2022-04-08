import request from 'supertest';
import { app } from '../../../../app';

it('responds with status code 200', async () => {
  const token = global.signin()

  const response = await request(app)
    .post('/api/restaurant')
    .set('Authorization', token)
    .send({
        name: "Lash ka dhaba",
        cousines: ["Chines", "Mughali", "  Seafood"],
        location: {
            latitude: 90,
            langitude: 90,
        }
    })
    .expect(200);
});
