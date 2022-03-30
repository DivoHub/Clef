const app = require('../app.js')

const request = require('supertest')

describe('/api/ping', () => {
    it('should be an active endpoint', async () => {
      const response = await request(app).get('/api/ping').send();
      expect(response.status).toEqual(200)
      expect(response.body.ping).toEqual("pong")
      console.log(response.body)
    
    it('this should be a valid Spotify URL', async () => {

        


    })
    
    
    
    
    });
  });