import { FETCH_USERNAME, NEW_USER, LOGIN_USER } from '../actions/types';

const initialState = {
  items: [], // die von den Actions gesendeten Logins (Alle User?)
  item: {}, // einzlener User der hinzugefügt wird ...
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERNAME:
      console.log('reducer fetch');
      return{
        ...state,
        items: action.payload
      }
    case NEW_USER:
    console.log('reducer new user');
      return {
        ...state,
        item: action.payload
      }
    case LOGIN_USER:
    console.log('reducer login');
      return{
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}
