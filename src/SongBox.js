import React from 'react';
import './SongRow.css';
import { useDataLayerValue } from "./DataLayer";

function SongBox({album,playPlaylist}){
    const [{ spotify}, dispatch] = useDataLayerValue();

    const playPlaylist2 = (id) => {
        spotify
          .play({
            context_uri: `spotify:album:${album?.id}`,
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
            <figure className="f6-song-img-2">

            <img className="songbox__img" src={album.images[0].url} alt="" onClick={playPlaylist2}/>
            
                <figcaption>
                <h4 className="caption-name">{album.name}</h4>
                <span className="caption-date">
                    {album.artists.map((artist) => artist.name).join(", ")} 
                    {/* {album.release_date} */}

                </span>
                </figcaption>
            </figure>

         </div>
    )
}

export default SongBox;