import React from 'react';
import './SongRow.css';
import { useDataLayerValue } from "./DataLayer";

function Songbox1({album,playSong,track}){
    const [{ spotify}, dispatch] = useDataLayerValue();

    
    return (
        <div>
            <figure className="f6-song-img-2">

            <img className="songbox__img" src={album.images[0].url} alt="" onClick={() => playSong(track.id)}/>
            
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

export default Songbox1;