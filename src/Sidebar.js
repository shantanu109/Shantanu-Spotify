import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";
import {getTokenFromUrl} from './spotify';

function Sidebar() {
  const [{ playlists ,bodyLibrary}, dispatch] = useDataLayerValue();
  console.log('SHAAAAAN PLAYLIST',playlists);
  
    
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" check={false}/>
      {/* <SidebarOption Icon={SearchIcon} title="Search" /> */}
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" check={true}/>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} key={playlist.name} playlist={playlist} check={false}/>
      ))}
    </div>
  );
}

export default Sidebar;
