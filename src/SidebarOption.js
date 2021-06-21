import React from "react";
import "./SidebarOption.css";
import { Link } from 'react-router-dom';
import { useDataLayerValue } from "./DataLayer";




function SidebarOption({ title, Icon,playlist,check }) {
  const [{ playlists ,currentPlaylist,spotify,displayPlaylist,bodyLibrary}, dispatch] = useDataLayerValue();

const togglePlaylist = () => { 
  console.log('PLAYLIST',playlist)

  dispatch({
    type:"SET_PLAYLIST",
    playlistChecked:true,
    currentPlaylist:playlist,
    displayPlaylist:null,
    bodyLibrary:false

  })


  // if (!displayPlaylist){
  //   spotify.getPlaylist(`${currentPlaylist?.id}`).then((response) => {
  //     dispatch({
  //       type: "SET_CURRENT_BODY_PLAYLIST",
  //       displayPlaylist: response,
  //     });
  //   });

  // }
  

  // console.log('DISPLAY PLAYLISTSSSSS',displayPlaylist)

  
}
const toggleHome = () => { 
  
  dispatch({
    type:"SET_HOME",
    playlistChecked:false,
    currentPlaylist:null,
  })

  if (check){
    dispatch({
      type:"SET_BODY_LIBRARY",
      bodyLibrary:true
  
    })
  }
  else{
    dispatch({
      type:"SET_BODY_LIBRARY",
      bodyLibrary:false
  
    })

  }
  
}

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4 onClick={toggleHome}>{title}</h4> : <p onClick={togglePlaylist}>{title}</p>}
      
      
    </div>
  );
}

export default SidebarOption;
