import {ON_CHANGE_SIGN_UP} from "../../actionTypes";

export default function(valSet){
    return{
        type: ON_CHANGE_SIGN_UP,
        payload: {
            ...valSet
        }
    }
}