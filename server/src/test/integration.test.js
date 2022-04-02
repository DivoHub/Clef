const app = require('../app')
const request = require('supertest')
const utils = require('../utils/utils');

describe('/api/ping', () => {
    it('should be an active endpoint', async () => {
        const response = await request(app).get('/api/ping').send();
        expect(response.status).toEqual(200);
        expect(response.body.ping).toEqual("pong");
    });
});

describe('/api/deezer/me', () => {
  it('has route handler listening for get requests on /api/deezer/me', async () => {
      const response = await request(app).get('/api/deezer/me').send();
      expect(response.status).not.toEqual(404);
  });
});

describe('/api/spotify/me', () => {
  it('has route handler listening for get requests on /api/spotify/me', async () => {
      const response = await request(app).get('/api/deezer/me').send();
      expect(response.status).not.toEqual(404);
  });
});

