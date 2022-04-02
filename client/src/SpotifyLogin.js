import React from 'react';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=b26491d4a12f481f9c8cd979e7151646&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-library-modify%20user-library-read%20playlist-modify-private%20playlist-read-collaborative%20user-read-email%20playlist-read-private%20playlist-modify-public"

export default function SpotifyLogin(){
    
    return (
        <Container> 
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
            Login with Spotify
            </a></Container> 
        )
}


//BQBwRNLSocES515rIuS25_XDVdhv251IpqKlF67v630rtzVfBKL6lxtJwvUQUPZagdflq2GwWBjWqqnLJFfopWmLr6Q2M4QZq0gH9G0Ver8TPZcfV9ekBho9zf1_CKsQlY2DNe66dEOpXAJgJNun0cza2oWlkeqLHY9ReYX58yRPdDIL7t-7XH7pZ745-tRRT8ODQ6-tuaXU4fHgXoTw3QWihhcnuehmbxEHA21BYEzPbWduHX8Cfh1x1U4LIMQqv-kTR5n8F3g1 ||| AQD2PSoiQ5iVk0cbtEYtNOFANros91BVmivMYL0dqM-7Y4jEyjb_eK-hdhW6UZOYt29lC2dqb9CinCJhRRnqwQYflQpsOIdbQEnXo8c04nB1rfUWYPBneWKtTGGMxSv7a276vmyHIAgMf0B1cDHNMfrpRby1-1xRmzNQE3yPnXWcTcvOgoMLaU7oGlaFw6_ptizRngx65Oh3jb5lcITsF5U7TjxBZ0p9ck4_Tc3VekzvGwWj7Jv4QXdWAOEaJM7fVXQ_D2UBENlafcMFsKfM4ezXKvnubQUl7XmJJksjip0cccW8X66uz9T5LIpfk6k4_-8gz80m6vfzvToFb1iDQAsJiPCWP-cr07XSZo6WcBZEGM6VcTmGuQXaeYWul58xC2k



["OKAY (feat. Vory)","Tears, Sweat, Blood","Gone","Passion","Sainte Journée","Oceans","Day by Day","Back To My Bed","ADMIT IT","Dr. Suess","Ryder","Rocky","Bonfires","The Waiting","Teen Scene (ft. Buddy)","The Jackie (with J. Cole & Lil Tjay)","These Times","Let's Go Outside","A Dream of You","Conversations","Body & Soul (feat. Biig Piig)","Night Moves","Be Thankful for What You've Got - David Todd Remix (Radio Edit)","Come Over","West Coast Love","Moi, je prouve.","So Cool","On Sight","Inner Light","MANGO (Remix) [feat. Adeline & Masego]","Awake (with Mahalia)","Moving to Neptune","Too Late","Time to Walk Away","Powerlines","New Theory","Alone With You","Burning Hour","Pressure (with SG Lewis)","southside","You Do You","Anemone","Safe","Devil's Advocate","Cold Heart - PNAU Remix","Show Your Face","Midnight Love","Slowdiving","Sunday Funday","Mazza","Love on the Ground","Somewhere (feat. Gus Dapperton)","Music Sounds Better with You","Go for Gold","Slipping Away","Haze","I'll Be Here A While","Lets Get Naked","Panopticon","Shimmer","Northern Blues","Sea Urchin","Lucid (feat. Nathan Ball)","Peaches","Sweep Me Off My Feet","Foreign Affair","Don't Wake Me Up","Soma","Time Moves Slow","~Outro"]