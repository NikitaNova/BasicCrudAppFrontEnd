import {ACCESS_DENIED_ERROR} from "../../actionTypes";

export default function(){
    return({
        type:ACCESS_DENIED_ERROR,
        payload:{
            description:'You do not have permission to be here!'
        }
    })
}
