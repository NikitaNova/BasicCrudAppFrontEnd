import {RECIEVE_USER_DATA} from "../../actionTypes";

export default function(firstName, lastName, bio){
    return{
        type:RECIEVE_USER_DATA,
        payload:{
            firstName: firstName,
            lastName: lastName,
            bio: bio
        }
    }

}