import {POST_NEW_USER_BASIC_INFO} from "../../actionTypes";
import {postNewUserBasicInfo} from "../../domainName";
import IsLoadingAction from "../IsLoadingAction";


export default function postNewUserBasicInfoAction(username, firstName, lastName){

    return async function(dispatch){
        let isSuccessful = false
        dispatch(IsLoadingAction(true))

        return await fetch(postNewUserBasicInfo+
        `?oldUsername=${window.sessionStorage.getItem('username')}&username=${username}&firstName=${firstName}&lastName=${lastName}`, {
            method: 'POST',
            headers:{
                Authorization: window.sessionStorage.getItem('JWT')
            }
        }).then((res)=>{
            console.log(res.headers.get('isSuccessful'))
            if(res.headers.get('isSuccessful') == 'true'){
                isSuccessful = true
                if(username !="<empty string>" && !(username === "")) {
                    console.log('Changing username to: ' + username)
                    window.sessionStorage.setItem('username', username)
                } else {
                    console.log('Deciding NOT to change the username')
                }
            }
            dispatch(IsLoadingAction(false))
            return{
                type: POST_NEW_USER_BASIC_INFO,
                status: {
                    isSuccessful: isSuccessful
                },
                payload: {
                    username: username,
                    firstName: firstName,
                    lastName: lastName
                }
            }
        })
    }

}