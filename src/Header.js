import React ,{useState,useEffect} from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";
import TrackSearchResult from './TrackSearchResult';
import Players from './Players';


function Header({ spotify }) {
  const [{ user, token }, dispatch] = useDataLayerValue();
  // const [search,setSearch] = useState('');
  // const [searchResults,setSearchResults] = useState([]);
  const [playingTrack,setPlayingTrack] = useState();

  function chooseTrack(track){
      setPlayingTrack(track)
      
  }
  

  // useEffect(() => {
  //     if (!token){
  //         return
  //     }
  //     spotify.setAccessToken(token)

  // }, [token])

  // useEffect(() => {
  //   if(!search) return setSearchResults([])
  //   if (!token) return

  //   let cancel = false
  //   spotify.searchTracks(search).then(res => {
  //       if (cancel) return
  //       setSearchResults(res.tracks.items.map(track => {
  //           const smallestAlbumImage = track.album.images.reduce((smallest,image) => {
  //               if (image.height < smallest.height) return image
  //               return smallest
  //           },track.album.images[0])

  //           return {
  //               artist: track.artists[0].name,
  //               title:track.name,
  //               uri:track.uri,
  //               albumUrl:smallestAlbumImage.url
  //           }
  //       }))
  //   })

  //   return () => cancel = true

  // },[search,token])

  const handleSearch = (e) => {
    const searchText = e.target.value;

    let cancel = false;
    if (searchText.length ===0) {
      dispatch({
        type:"SET_SEARCH",
        search:false
      })
    }
    spotify.searchTracks(searchText).then((response) => {
      if (cancel) return

      dispatch({
        type:"SET_SEARCH_RESULTS",
        searchResults:response,
        search:true

      })
    })


    return () => cancel = true



  }

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        {/* <form> */}
          <input
            placeholder="Search for Artists,Songs, or Podcasts"
            type="text"
            onChange={handleSearch}
            style={{outline:'none'}}
          />
        </div>
        {/* </form> */}
        {/* <div className="flex-grow-1 my-2" style={{overflowY:"auto"}}>
            {searchResults.map(track => (
                <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack}/>
            ))} */}
        {/* </div> */}
        {/* <div style={{marginTop:'70'}}>
        <Players token={token} trackUri={playingTrack?.uri}/>

        </div> */}
        
      {/* // </div> */}
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
