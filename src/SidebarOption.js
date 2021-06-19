import React from "react";
import "./SidebarOption.css";
import { Link } from 'react-router-dom';
import { useDataLayerValue } from "./DataLayer";




function SidebarOption({ title, Icon,playlist }) {
  const [{ playlists }, dispatch] = useDataLayerValue();

const togglePlaylist = () => { 
  console.log('PLAYLIST',playlist)

  dispatch({
    type:"SET_PLAYLIST",
    playlistChecked:true,
    currentPlaylist:playlist

  })
  
}
const toggleHome = () => { 
  
  dispatch({
    type:"SET_HOME",
    playlistChecked:false,
    currentPlaylist:null
  })
  
}

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4 onClick={toggleHome}>{title}</h4> : <p onClick={togglePlaylist}>{title}</p>}
      
      
    </div>
  );
}

export default SidebarOption;
