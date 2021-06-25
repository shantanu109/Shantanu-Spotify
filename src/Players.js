import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import './Footer.css'
export default function Players({ token, trackUri }) {
    const [play,setPlay] = useState(false)
    useEffect(() => setPlay(true), [trackUri])
  if (!token) return null;

  return (
    <div className="player__footer">
    <SpotifyPlayer
      token={token}
      showSaveIcon
      callback={state => {
          if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      styles={{activeColor:'#1DB954',bgColor:'#282828',sliderColor:'#1DB954',color:'#ffffff',trackNameColor:'#ffffff',sliderHandleColor:'#ffffff',trackArtistColor:'#ccc'}}
    />
    </div>
  );
}
