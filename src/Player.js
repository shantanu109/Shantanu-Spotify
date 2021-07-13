import React,{useEffect} from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from './Footer';
import Players from './Players';
import { useDataLayerValue } from "./DataLayer";


function Player({ spotify }) {
const [{token}, dispatch] = useDataLayerValue();
useEffect(() => {
  window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function (event){
      window.history.pushState(null, document.title,  window.location.href);
  });

},[]);


  return (
    <div>
      <div className="player">
        {/* <div className="player_body"> */}
          <Sidebar />
          <Body spotify={spotify}/>
        </div>
        {/* <Footer spotify={spotify}/> */}
        <Players token={token} />
      {/* </div> */}
    </div>
  );
}

export default Player;
