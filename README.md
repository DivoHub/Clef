# Clef

Clef is a Web Application that helps users transfer playlists between music streaming services.

Link: [Clef](https://clefproject.herokuapp.com/)

## Services

Service | Status
--- | --- 
**Spotify** | `Supported` 
**Deezer** | `Supported` 
**Apple Music** | `In Progress`
**Amazon Music** | `Not Supported`
**Tidal** | `Not Supported`


## Usage

1.User selects streaming services to transfer between
2.User is redirected to an authorization URL to confirm permissions and generate token
3.User selects from a list of playlists and a direction
4.Clef will query target service for songs and then append them into 
a new playlist


## Contributing

Fellow developers are welcome to send pull requests to implement any changes.

## License
[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)

## Tech Stack / Dependencies
React.js, Express.js, Node.js, Spotify Web API Node, Deezer Public API, Jest
