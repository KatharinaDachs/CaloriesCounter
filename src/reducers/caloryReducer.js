import { FETCH_CALORIES, NEW_CALORIES, DELETE_CALORIES, UPDATE_CALORIES, GET_CALORIES} from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CALORIES:
      return{
        ...state,
        items: action.payload
      }
    case GET_CALORIES:
      return{
        ...state,
        item: action.payload
      }
    case NEW_CALORIES:
      return {
        ...state,
        item: action.payload
      }
    case UPDATE_CALORIES:
      return{
        ...state,
        item: action.payload
      }
    case DELETE_CALORIES:
      return{
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}
