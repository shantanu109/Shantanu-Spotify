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
currentPlaylist:null
//new_releases:[]

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

    case "SET_ITEM":
        return {
            ...state,
            item: action.item,
            isLoggedIn:true
        };

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

    case "SET_PLAYLIST":
      return {
        ...state,
        playlistChecked:action.playlistChecked,
        currentPlaylist:action.currentPlaylist

      }
    case "SET_HOME":
      return {
        ...state,
        playlistChecked:action.playlistChecked,
        currentPlaylist:action.currentPlaylist

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
