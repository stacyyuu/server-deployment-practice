const server = require('./server');
const supertest = require('supertest');

const request = supertest(server);

test('cat endpoint', async () => {
  const response = await request.get('/cat');
  expect(response.text).toBe('I am a cat!');
});

test('dog endpoint', async () => {
  const response = await request.get('/dog');
  expect(response.text).toBe('I am a dog!');
});
