import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNOUT_USER,
    SIGNOUT_USER_SUCCESS,
    SIGNOUT_USER_FAIL           //signing out in progress
  } from './types';
  


export const emailChanged = (text) => {
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
};


export const passwordChanged = (text) => {
    return {
      type: PASSWORD_CHANGED,
      payload: text
    };
};
  
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
        //   console.log(error);
  
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch,error.message)); 
        });
    };
};

export const SignOut = () => {

    return(dispatch) => {
        dispatch({ type: SIGNOUT_USER });
        
        firebase.auth().signOut()
        .then( () => signOutSucces(dispatch) )
        .catch( (error) => signOutFail(dispatch, error)  )  
    }

};

const signOutSucces = (dispatch)=> {
    console.log("Signout succes!!") 
    dispatch({type: SIGNOUT_USER_SUCCESS}); 
};

const signOutFail = (dispatch, error)=> {
    dispatch({ type:SIGNOUT_USER_FAIL , payload: error });
};

const loginUserFail = (dispatch , error) => {
    dispatch({ type: LOGIN_USER_FAIL , payload: error }); 
};


const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
};