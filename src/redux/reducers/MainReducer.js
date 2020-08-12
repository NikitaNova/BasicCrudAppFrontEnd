import {
    FAIL_FETCH_USER_DATA,
    FAIL_POST_USER_DATA,
    FETCH_USER_DATA,
    IS_LOADING,
    IS_SUCCESSFUL,
    ON_CHANGE_LOG_IN,
    ON_CHANGE_SIGN_UP,
    ON_CHANGE_USER,
    POST_LOGIN,
    POST_NEW_USER_BASIC_INFO,
    POST_NEW_USER_BIO,
    POST_NEW_USER_PASSWORD,
    POST_SIGNUP,
    RECIEVE_USER_DATA
} from "../actionTypes";
import {initialState} from "../InitialState";

export default function (state = initialState, action) {
    switch (action.type) {
        // LOGGING
        case POST_LOGIN:
            return {
                ...state,
                ...action.status
            }
            break
        case POST_SIGNUP:
            return {
                ...state,
                ...action.status
            }
            break
        // ON CHANGE
        case ON_CHANGE_LOG_IN:
            return {
                ...state,
                input: {
                    logIn: {
                        ...state.input.logIn,
                        ...action.payload
                    },
                    signUp:{
                        ...state.input.signUp
                    }
                }
            }
            break
        case ON_CHANGE_SIGN_UP:
            console.log('ON_CHANGE_SIGN_UP')
            return {
                ...state,
                input: {
                    logIn:{
                        ...state.input.logIn
                    },
                    signUp: {
                        ...state.input.signUp,
                        ...action.payload
                    }
                }
            }
            break
        case ON_CHANGE_USER:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...action.payload
                }
            }
            break

        // GET USER DATA
        case FETCH_USER_DATA:
            console.log('FETCH_USER_DATA IN PROGRESS')
            return {
                ...state
            }
            break
        case RECIEVE_USER_DATA:
            console.log('RECIEVE_USER_DATA IN PROGRESS')
            return {
                ...state,
                userData: {
                    ...state.userData,
                    ...action.payload
                }
            }
            break

        // POST NEW USER DATA
        case POST_NEW_USER_BASIC_INFO:
            console.log('POST_NEW_USER_BASIC_INFO')
            return {
                ...state,
                ...action.status,
                userData: {
                    ...state.userData,
                    ...action.payload
                }
            }
            break
        case POST_NEW_USER_BIO:
            console.log('POST_NEW_USER_BIO')
            return {
                ...state,
                ...action.status,
                userData: {
                    ...state.userData,
                    ...action.payload
                }
            }
            break
        case POST_NEW_USER_PASSWORD:
            console.log('POST_NEW_USER_PASSWORD')
            return {
                ...state,
                ...action.status
            }
            break

        // SUCCESSFUL TRANSACTION
        case IS_SUCCESSFUL:
            console.log('IS_SUCCESSFUL')
            return {
                ...state,
                ...action.payload
            }
            break
        // FAIL
        case FAIL_FETCH_USER_DATA:
            console.log('FAIL_FETCH_USER_DATA IN PROGRESS')
            return {
                ...state
            }
            break
        case FAIL_POST_USER_DATA:
            console.log('FAIL_POST_USER_DATA')
            return {
                ...state,
            }
            break
        // LOADING
        case IS_LOADING:
            console.log('IS_LOADING')
            return {
                ...state,
                ...action.payload
            }
            break
        default:
            return {
                ...state
            }
            break
    }
}