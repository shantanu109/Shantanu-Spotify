import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';


const spotify = new SpotifyWebApi();
const PrivateRoute = (privateRouteProps) => {
  const { isLoggedIn, path, component: Component } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};


function App() {

  //const [{ user,token }, dispatch] = useDataLayerValue();
  const [{ token ,playlists,isLoggedIn,new_releases,discover_weekly,recently_played,top_tracks,top_artists,party_playlist,bollywood_playlist,artist_tracks}, dispatch] = useDataLayerValue();
  
  
  useEffect(() => {
    
    const hash = getTokenFromUrl();
    //window.location.hash = "";
    

    //const _token = hash.access_token;
    let _token = hash.access_token;
    console.log('TOKKEEENNN',_token)
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

      spotify.getCategoryPlaylists('party').then((response) => {
        dispatch({
          type:"SET_PARTY_PLAYLIST",
          party_playlist:response
        })
      })

      spotify.getCategoryPlaylists('bollywood').then((response) => {
        dispatch({
          type:"SET_BOLLYWOOD_PLAYLIST",
          bollywood_playlist:response
        })
      })

      spotify.getCategoryPlaylists('chill').then((response) => {
        dispatch({
          type:"SET_CHILL_PLAYLIST",
          chill_playlist:response
        })
      })

      spotify.getCategoryPlaylists('rock').then((response) => {
        dispatch({
          type:"SET_INDIE_PLAYLIST",
          indie_playlist:response
        })
      })

      

      spotify.getCategoryPlaylists('workout').then((response) => {
        dispatch({
          type:"SET_WORKOUT_PLAYLIST",
          workout_playlist:response
        })
      })

      spotify.getCategoryPlaylists('classical').then((response) => {
        dispatch({
          type:"SET_ENGLISH_PLAYLIST",
          english_playlist:response
        })
      })

      spotify.getCategoryPlaylists('country').then((response) => {
        dispatch({
          type:"SET_COUNTRY_PLAYLIST",
          country_playlist:response
        })
      })

      




      

      

      
      });
      // spotify.getNewReleases().then((response) =>{
      //   dispatch({
      //     type:"SET_NEW_RELEASES",
      //     new_releases:response
      //   })
      // })

      spotify.getNewReleases().then((response) => {
        dispatch({
          type:"SET_NEW_RELEASES",
          new_releases:response
        })
      })

      spotify.getMyRecentlyPlayedTracks().then((response) => {
        dispatch({
          type:"SET_RECENTLY_PLAYED_TRACKS",
          recently_played:response
        })
      })

      spotify.getMyTopTracks().then((response) => {
        dispatch({
          type:"SET_TOP_TRACKS",
          top_tracks:response
        })
      })

      
      
      
      dispatch({
        type:"SET_SPOTIFY",
        spotify:spotify
      });

    }

  }, [token,dispatch]);

  

  console.log('BOLLLYWOOWOWOWOW PLALLAL',bollywood_playlist);
  console.log('ARTTTISSISITT TOPPP TRACCKS',artist_tracks);
  console.log('ARTISSSSS',top_artists);

  
  // return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
  //console.log("APP KI PLAYLIST",playlists?.items?.[0])
  // console.log('new____RELEASES___',new_releases)
  return (
    <Router>
      <div className="wrapper">
      <div className="app">
        
        {!token && <Login />}
        {token && <Player spotify={spotify} />}
      </div>
      </div>
    </Router>
  )
}

export default App;
