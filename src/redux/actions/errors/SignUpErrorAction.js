import {SIGNUP_ERROR} from "../../actionTypes";

export default function(){
    return({
        type:SIGNUP_ERROR,
        payload:{
            description:'Something went wrong when you tried to Sign Up'
        }
    })
}