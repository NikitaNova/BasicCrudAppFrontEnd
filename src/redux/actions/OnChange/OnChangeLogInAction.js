import {ON_CHANGE_LOG_IN} from "../../actionTypes";

export default function(valSet){
    return {
        type: ON_CHANGE_LOG_IN,
        payload: {
            ...valSet
        }
    }

}