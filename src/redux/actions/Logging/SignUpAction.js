import {POST_SIGNUP} from "../../actionTypes";
import {signUpEndpoint} from "../../domainName";
import IsLoadingAction from "../IsLoadingAction";

export default function(username, password,
                       firstName, lastName) {
    return async function(dispatch){
        let isSuccessful = false;

        dispatch(IsLoadingAction(true))
        return await fetch(signUpEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                first_name:firstName,
                last_name:lastName
            })
        }).then(res =>{
            console.log(res.headers.get("isSuccessful"))
            if(res.headers.get("isSuccessful") == "true") {
                isSuccessful = true
            }
            dispatch(IsLoadingAction(false))
            return {
                type: POST_SIGNUP,
                status: {isSuccessful: isSuccessful}
            }
        })




    }
}