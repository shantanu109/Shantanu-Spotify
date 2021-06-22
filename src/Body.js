import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import SongBox from "./SongBox";
import Songbox1 from "./Songbox1";

function Body({ spotify }) {
  const [{ discover_weekly, playlistChecked, currentPlaylist,displayPlaylist ,bodyLibrary,new_releases,recently_played}, dispatch] =
    useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcIE6rdDWv3Hg`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  if (!displayPlaylist){
    if (currentPlaylist){
      spotify.getPlaylist(`${currentPlaylist?.id}`).then((response) => {
        dispatch({
          type: "SET_CURRENT_BODY_PLAYLIST",
          displayPlaylist: response,
        });
      });
  

    }
    
  }
  

  const playPlaylist1 = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:${currentPlaylist?.id}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };



  return (
    <div>
      {bodyLibrary ? (<div className="body">
      <Header spotify={spotify} />
      {/* <div className="body__info"> */}
      <div className="body__infoText2">
        <h2>Latest Releases</h2>
        <div className="f6-display">
        {new_releases?.albums?.items.slice(0,15).map((item) => (
              <SongBox
                playPlaylist={playPlaylist1}
                album={item}
                key={item.id}
              />
            ))}
        </div>

      </div>
      <div className="body__infoText2">
        <h2>Recently Played</h2>
        <div className="f6-display">
        {recently_played?.items.slice(0,4).map((item) => (
              <Songbox1
                playSong={playSong}
                album={item.track.album}
                key={item.track.id}
                track={item.track}
              />
            ))}
        </div>

      </div>
      {/* </div> */}

      </div>) : !playlistChecked ? (
        <div className="body">
          <Header spotify={spotify} />
          <div className="body__info">
            <img src={discover_weekly?.images[0].url} alt="" />
            <div className="body__infoText">
              <strong>PLAYLIST</strong>
              <h2>Discover Weekly</h2>
              <p>{discover_weekly?.description}</p>
            </div>
          </div>

          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon
                className="body__shuffle"
                onClick={playPlaylist}
              />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>

            {discover_weekly?.tracks.items.map((item) => (
              <SongRow
                playSong={playSong}
                track={item.track}
                key={item.track.id}
              />
            ))}
          </div>
        </div>
      ) : 
      
      (<div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={displayPlaylist?.images[0].url ? displayPlaylist?.images[0].url : "https://play-lh.googleusercontent.com/zim-eMjkFdDeXUKv1dLiFuWgsUvy1cIdAJbOJDY7pg1P27A0TdyWxRXv1v0AO4Vn9gg"} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{displayPlaylist?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist1}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {displayPlaylist?.tracks.items.map((item) => (
          <SongRow
            playSong={playSong}
            track={item.track}
            key={item.track.id}
          />
        ))}
      </div>
    </div>)
        
      }
    </div>
  );
}

export default Body;
