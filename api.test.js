const request = require('supertest');

describe('Prueba API - JSONPlaceholder', () => {
  test('GET /posts/1 debe responder 200 y retornar el post', async () => {
    const response = await request('https://jsonplaceholder.typicode.com')
      .get('/posts/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('title');
  });
});