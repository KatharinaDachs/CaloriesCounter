import { FETCH_CALORIES, NEW_CALORIES, DELETE_CALORIES, UPDATE_CALORIES, GET_CALORIES} from '../actions/types';

const initialState = {
  items: [], // die von den Actions gesendeten Logins (Alle User?)
  item: {} // einzlener User der hinzugefügt wird ...
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CALORIES:
      console.log('reducer_workouts_fetch');
      return{
        ...state,
        items: action.payload
      }
    case GET_CALORIES:
      console.log('reducer_workouts_get');
      return{
        ...state,
        item: action.payload
      }
    case NEW_CALORIES:
    console.log('reducer_workouts_new');
      return {
        ...state,
        item: action.payload
      }
    case UPDATE_CALORIES:
    console.log('reducer_workouts_update');
      return{
        ...state,
        item: action.payload
      }
    case DELETE_CALORIES:
    console.log('reducer_workouts_delete');
      return{
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}
