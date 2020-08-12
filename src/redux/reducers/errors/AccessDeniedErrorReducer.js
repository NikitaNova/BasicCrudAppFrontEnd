import {ACCESS_DENIED_ERROR} from "../../actionTypes";
import {initialState} from "../../InitialState";

export default function(state, action){
    switch (action.type) {
        case ACCESS_DENIED_ERROR:
            return {
                ...state,
                errors:{
                    ...action.payload
                }
            }
            break
        default:
            return null

    }
}