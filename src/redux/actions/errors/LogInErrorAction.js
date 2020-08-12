import {LOGIN_ERROR} from "../../actionTypes";

export default function(){
    return({
        type:LOGIN_ERROR,
        payload:{
            description:'You do not have permission to be here!'
        }
    })
}
