import { FETCH_USERNAME, NEW_USER, LOGIN_USER } from './types';
import { request } from 'graphql-request';
import { userData } from '../data/UserData';


//Show all User ...
export const fetchUser = () => dispatch => {
  console.log('fetch');
  const gcEndPoint = `https://api.graph.cool/simple/v1/cjk2s6zye0f1w0154378prmx3`
  const gcQuery = `query {allLoginDatas {id email gender name password}}`
  request (gcEndPoint, gcQuery)
  .then(users => {
    dispatch({
      type: FETCH_USERNAME,
      payload: users.allLoginDatas
    })
  })
};

//Registrieren
export const createUser = userData => dispatch => {
  console.log('action create my user');
  const gcEndPoint = `https://api.graph.cool/simple/v1/cjk2s6zye0f1w0154378prmx3`
  const gcQuery = `mutation createAccount($gender: String!, $name: String!, $email: String!, $password: String!)
  {  createUser(
        authProvider: {
          email: {
            email: $email,
            password: $password
          }
        }, gender: $gender, name: $name)
    { email id }
  }`

  const gcVariables = {
    "gender": userData.gender,
    "name": userData.name,
    "email": userData.email,
    "password": userData.password
  }
  request (gcEndPoint, gcQuery, gcVariables )
  .then(user => {
    dispatch({
      type: NEW_USER,
      payload: user.createUser
    })
  })
};

//Login
export const loginUser = userData => dispatch => {
  console.log('action login user');
  const gcEndPoint = `https://api.graph.cool/simple/v1/cjk2s6zye0f1w0154378prmx3`
  const gcQuery = `mutation createAccount($email: String!, $password: String!)
  {  signinUser(
        email: {
          email: $email,
          password: $password
        })
    {token}
  }`

  const gcVariables = {
    "email": userData.email,
    "password": userData.password
  }
  console.log('send login request');
  request (gcEndPoint, gcQuery, gcVariables )
  .then(user => {
    dispatch({
      type: LOGIN_USER,
      payload: user.signinUser
    })
  })
};