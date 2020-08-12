import {POST_NEW_USER_BIO} from "../../actionTypes";
import {postNewUserBio} from "../../domainName";
import IsLoadingAction from "../IsLoadingAction";

export default function postNewUserBioAction(username ,bio){
    return async function(dispatch){
        let isSuccessful = false

        dispatch(IsLoadingAction(true))

        return await fetch(postNewUserBio+`?username=${username}&bio=${bio}`, {
            method: 'POST',
            headers:{
                Authorization: window.sessionStorage.getItem('JWT')
            }
        }).then((res)=>{
            console.log(res.headers.get("isSuccessful"))
            if(res.headers.get("isSuccessful") == "true"){
                isSuccessful = true
            }
            dispatch(IsLoadingAction(false))
            return{
                type: POST_NEW_USER_BIO,
                status: {
                    isSuccessful: isSuccessful
                },
                payload: {
                    bio:bio
                }
            }

        })

    }
}