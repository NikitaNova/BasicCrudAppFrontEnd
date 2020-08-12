import {IS_LOADING} from "../actionTypes";

export default function(bool){
    return{
        type:IS_LOADING,
        payload:{
            loading: bool
        }
    }
}

