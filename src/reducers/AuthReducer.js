import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNOUT_USER,
    SIGNOUT_USER_SUCCESS,
    SIGNOUT_USER_FAIL 
  } from '../actions/types';


const INITIAL_STATE = {

    email: '',
    password: '',
    user: null ,
    error: '',
    loading: false,
    signingOut: false,
    signOutError: ''

};

export default AuthReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state , email:action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return {...state,...INITIAL_STATE ,user: action.payload };
        case LOGIN_USER_FAIL:
            return {...state , error:action.payload , password:'' , loading: false };
        case LOGIN_USER:
            return { ...state , loading: true , error: ''}; 
        case SIGNOUT_USER:
            return {...state, signingOut:true, signOutError: '' };
        case SIGNOUT_USER_SUCCESS:
            return {...INITIAL_STATE } ;
        case SIGNOUT_USER_FAIL:
            return {...state, signingOut:false , signOutError: action.payload };          
        default:
            return state;                 


    }

};