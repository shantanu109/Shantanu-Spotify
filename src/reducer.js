import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify:null,
  discover_weekly:null,
  top_artists:null,
  playing: false,
  item: null,
//   token:
//     "BQCSpyqVODgEn4LmVZRI30nMOKOvMhfin8jhnPmKwSlua4wgYDVWxmL-XK0UkPYgQGfC-17GSnVwV0T6Cd_KifOyrxfT912lr1CxQCsKjPMxPAqdMOma4DQ1HXB7k_coinhIgOWqnP-n3jpZbSPXTZ4PxDuxsOSoqc4igkcQzMYbpbaIKWPh",
token:null,
isLoggedIn:false,
playlistChecked:false,
currentPlaylist:null,
//new_releases:[]
displayPlaylist:null,
bodyLibrary:false,
new_releases:null,
recently_played:null,
top_tracks:null,
party_playlist:null,
bollywood_playlist:null,
chill_playlist:null,
indie_playlist:null,


};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
        isLoggedIn:true
      };

    case "SET_PLAYING":
        return {
            ...state,
            playing: action.playing,
            isLoggedIn:true
        };

    case "SET_TOP_TRACKS":
      return {
        ...state,
        top_tracks:action.top_tracks
      }

    case "SET_ITEM":
        return {
            ...state,
            item: action.item,
            isLoggedIn:true
        };

    case "SET_NEW_RELEASES":
      return {
        ...state,
        new_releases:action.new_releases
      }

    case "SET_TOP_ARTISTS":
        return {
            ...state,
            top_artists: action.top_artists,
            isLoggedIn:true
        };
    
    case "SET_SPOTIFY":
        return {
            ...state,
            spotify: action.spotify,
            isLoggedIn:true
        };

    case "SET_CURRENT_BODY_PLAYLIST":
      return {
        ...state,
        displayPlaylist:action.displayPlaylist,
      }
    
    

    case "SET_PLAYLIST":
      return {
        ...state,
        playlistChecked:action.playlistChecked,
        currentPlaylist:action.currentPlaylist,
        displayPlaylist:action.displayPlaylist,
        bodyLibrary:action.bodyLibrary

      }
    
    case "SET_RECENTLY_PLAYED_TRACKS":
      return {
        ...state,
        recently_played:action.recently_played
      }
    
    case "SET_BODY_LIBRARY":
      return {
        ...state,
        bodyLibrary:action.bodyLibrary,
      }

    case "SET_HOME":
      return {
        ...state,
        playlistChecked:action.playlistChecked,
        currentPlaylist:action.currentPlaylist

      }
    
    case "SET_PARTY_PLAYLIST":
      return {
        ...state,
        party_playlist:action.party_playlist
      }

    case "SET_BOLLYWOOD_PLAYLIST":
      return {
        ...state,
        bollywood_playlist:action.bollywood_playlist
      }
    case "SET_CHILL_PLAYLIST":
      return {
        ...state,
        chill_playlist:action.chill_playlist
      }
    
    case "SET_INDIE_PLAYLIST":
      return {
        ...state,
        indie_playlist:action.indie_playlist
      }
  


    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
        isLoggedIn:true
      };

    case "SET_PLAYLISTS":
        return {
            ...state,
            playlists: action.playlists,
            isLoggedIn:true
        }

    case "SET_DISCOVER_WEEKLY":
        return{
            ...state,
            discover_weekly:action.discover_weekly,
            isLoggedIn:true
        }

    // case "SET_NEW_RELEASES":
    //     return{
    //         ...state,
    //         new_releases:action.new_releases,
    //     }

    default:
      return state;
  }
};

export default reducer;
