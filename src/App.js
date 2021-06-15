import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

  //const [{ user,token }, dispatch] = useDataLayerValue();
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    //const _token = hash.access_token;
    let _token = hash.access_token;

    if (_token) {

      spotify.setAccessToken(_token);

      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
      
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcIE6rdDWv3Hg').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
      })

      spotify.getMyTopArtists().then((response) =>{
        dispatch({
          type:"SET_TOP_ARTISTS",
          top_artists:response
        })
      });

      dispatch({
        type:"SET_SPOTIFY",
        spotify:spotify
      });

    }

  }, [token,dispatch]);

  
  // return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  )
}

export default App;
