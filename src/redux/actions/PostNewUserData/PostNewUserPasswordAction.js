import {POST_NEW_USER_PASSWORD, POST_USER_PASSWORD} from "../../actionTypes";
import {postNewUserPassword} from "../../domainName";
import IsLoadingAction from "../IsLoadingAction";

export default function(username, password){

    return async function(dispatch){
        dispatch(IsLoadingAction(true))
        return await fetch(postNewUserPassword + `?username=${username}`, {
            method: 'POST',
            headers: {
                Authorization: window.sessionStorage.getItem('JWT'),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                password: password
            })
        }).then(res =>{
            let isSuccessful = false
            console.log('isSuccessful:'+res.headers.get("isSuccessful"))
            if(res.headers.get("isSuccessful") == "true"){
                console.log('Post new user password SUCCESS')
                isSuccessful = true
            }
            dispatch(IsLoadingAction(false))
            return{
                type:POST_NEW_USER_PASSWORD,
                status: {
                    isSuccessful: isSuccessful
                }
            }
        })


    }
}