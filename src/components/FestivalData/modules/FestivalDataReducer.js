import {
    GET_FESTIVAL_DATA,
    FESTIVAL_DATA,
    FESTIVAL_DATA_ERROR,
   } from "./FestivalDataActions";
  
  const FestivalDataReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_FESTIVAL_DATA:
      case FESTIVAL_DATA:
       return {
          ...state,
           response:action.response
        };
        case FESTIVAL_DATA_ERROR:
        return {
           ...state,
            error:action.error
         };
      default:
        return state;
    }
  };
  
  export default FestivalDataReducer;