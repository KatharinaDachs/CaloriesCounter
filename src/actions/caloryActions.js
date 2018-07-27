import { FETCH_CALORIES, NEW_CALORIES, DELETE_CALORIES, UPDATE_CALORIES, GET_CALORIES} from './types';
import { request } from 'graphql-request';
import { caloriesData } from '../data/CaloryData';


//Show all Calorien ...
export const fetchCalories = () => dispatch => {
  console.log('fetching Workouts');
  const gcEndPoint = `https://api.graph.cool/simple/v1/cjk2s6zye0f1w0154378prmx3`
  const gcQuery = `query {allCalorieses {id foodName calories}}`
  request (gcEndPoint, gcQuery)
  .then(users => {
    dispatch({
      type: FETCH_CALORIES,
      payload: users.allCalorieses
    })
  })
};

//getCalorien
export const getCalories = id => dispatch => {
  console.log('get Calories');
  const gcEndPoint = `https://api.graph.cool/simple/v1/cjk2s6zye0f1w0154378prmx3`
  const gcQuery = `query getOneCalories($id: ID!)
  { Calories(id: $id)
  { id foodName calories }
  }`
  const gcVariables = {
    "id": id,
  }
  request (gcEndPoint, gcQuery, gcVariables)
  .then(calory => {
    dispatch({
      type: GET_CALORIES,
      payload: calory.Calories
    })
  })
};

//User zu speichern
export const createCalories = caloriesData => dispatch => {
  console.log('Actioncreator Workouts');
  const gcEndPoint = `https://api.graph.cool/simple/v1/cjk2s6zye0f1w0154378prmx3`
  const gcQuery = `mutation createNewCalories($foodName: String!, $calories: Int!)
  {  createCalories (foodName: $foodName, calories: $calories )
    { id foodName calories }
  }`

  const gcVariables = {
    "foodName": caloriesData.foodName,
    "calories": caloriesData.calories,
  }
  request (gcEndPoint, gcQuery, gcVariables )
  .then(calory => {
    dispatch({
      type: NEW_CALORIES,
      payload: calory.createcreateCalories
    })
  })
};

//Update
export const updateCalories = caloriesData => dispatch => {
  console.log('Actioncreator updateWorkouts');
  const gcEndPoint = `https://api.graph.cool/simple/v1/cjk2s6zye0f1w0154378prmx3`
  const gcQuery = `mutation updateActCalories($id: ID!, $foodName: String!, $calories: Int!)
  {  updateCalories ( id: $id, foodName: $foodName, calories: $calories)
    { id foodName calories }
  }`

  const gcVariables = {
    "id": caloriesData.id,
    "foodName": caloriesData.foodName,
    "calories": caloriesData.calories,
  }
  request (gcEndPoint, gcQuery, gcVariables )
  .then(calory => {
    dispatch({
      type: UPDATE_CALORIES,
      payload: calory.updateCalories
    })
  })
};

//delete
export const deleteCalories = id => dispatch => {
  console.log('actioncreator deleteCalories');
  const gcEndPoint = `https://api.graph.cool/simple/v1/cjk2s6zye0f1w0154378prmx3`
  const gcQuery = `mutation deleteActCalories($id: ID!)
  {  deleteCalories ( id: $id )
    { id foodName calories }
  }`
  console.log('query deleteCalories');
  const gcVariables = {
    "id": id
  }
  request (gcEndPoint, gcQuery, gcVariables )
  .then(calory => {
    dispatch({
      type: DELETE_CALORIES,
      payload: calory.deleteCalories
    })
  })
};

/*mutation {
 deleteLoginData (id: "cjjuf37u30kxi0181l5s3nvlq" )
    { id gender name email password }
}*/
