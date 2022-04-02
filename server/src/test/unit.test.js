const { sanitizeName, serializeSpotifySearchQuery } = require('../utils/utils');

describe('sanitizeName', () => {
    it('should remove special characters out of the string', async () => {
      const nameToSanitize = 'Hémisphère Paradis';
      const sanitizedNamed = 'Hemisphere Paradis';
      expect(sanitizeName(nameToSanitize)).toEqual(sanitizedNamed);
    });

    it('should remove any parentheses or brackets out of the string', async () => {
      const nameToSanitize = 'song name (by artist)';
      const sanitizedNamed = 'song name';
      expect(sanitizeName(nameToSanitize)).toEqual(sanitizedNamed);
    });
});

describe('serializeSpotifySearchQuery', () => {
    it('should parse the track and artist name in correctly formatted spotify query', async () => {
      const track = 'fuck the police';
      const artist = 'NWA';

      const query = serializeSpotifySearchQuery(track, artist);
      expect(query).toContain(`track:${track}`);
      expect(query).toContain(`artist:${artist}`);
    });

    it('should remove any parentheses or brackets out of the artist and/or track name', async () => {
      const track = 'fuck the police (coming straight from the underground)';
      const artist = 'NWA (N**** with attitude)';

      const query = serializeSpotifySearchQuery(track, artist);
      expect(query).toContain('track:fuck the police');
      expect(query).toContain('artist:NWA');
    });
});
