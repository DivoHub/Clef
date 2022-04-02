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

test('Send Deezer API a playlist GET request with userID as parameter, ensure that return is Promise', () => {
  expect(
    typeof getDeezerUserPlaylists(4902688642) == 'object' && typeof getDeezerUserPlaylists(4902688642).then == "function"
  ).toBe(true)
})


function verifyURL(){
  const spotApi = new SpotifyWebApi({
    clientId: 'b26491d4a12f481f9c8cd979e7151646',
    clientSecret: '0877bb4b043b472f8ff367700b27a08b',
    redirectUri: 'https://clefproject.herokuapp.com/login',
   });
   spotApi.setAccessToken('BQAJVSELjSwOeBLUCHkf2')
   let scopes = ['streaming','user-read-private']
   let URL = spotApi.createAuthorizeURL(scopes)
   return URL.includes("b26491d4a12f481f9c8cd979e7151646") 
}

test('Send Spotify API an authorization URL request with client key credientials. Should return true if request returns a valid URL with the ClientID corresponding to the credentials given in the request', () => {
  expect(
    verifyURL()
    ).toBe(true)
});



