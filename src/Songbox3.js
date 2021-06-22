import React from 'react';
import './SongRow.css';
import { useDataLayerValue } from "./DataLayer";

function Songbox3({artist,id}){
    const [{ spotify}, dispatch] = useDataLayerValue();

    
    return (
        <div>
            <figure className="f6-song-img-2">

            <img className="songbox__img" style={{borderRadius:'50%'}}src={artist.images[0].url} alt="" />
            
                <figcaption>
                <h4 className="caption-name">{artist.name}</h4>
                {/* <span className="caption-date">
                    {album.artists.map((artist) => artist.name).join(", ")}  */}
                    {/* {album.release_date} */}

                {/* </span> */}
                </figcaption>
            </figure>

         </div>
    )
}

export default Songbox3;