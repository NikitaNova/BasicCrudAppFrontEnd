import {IS_SUCCESSFUL} from "../actionTypes";

export default function(bool){
    return{
        type: IS_SUCCESSFUL,
        payload: {
            isSuccessful: bool
        }
    }
}