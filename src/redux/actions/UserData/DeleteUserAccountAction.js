import IsLoadingAction from "../IsLoadingAction";
import {deleteAccount} from "../../domainName";
import {DELETE_USER} from "../../actionTypes";

export default function(username){
    return async function (dispatch) {
        let isSuccessful = false

        dispatch(IsLoadingAction(true))

        return await fetch(deleteAccount + `?username=${username}`, {
            method: 'DELETE',
            headers: {
                Authorization: window.sessionStorage.getItem('JWT')
            }
        }).then(res => {
            res.headers.forEach((key,value)=>{
                console.log(value+ ":"+key)
            })
            if (res.headers.get("isAccountDeleted") == "true") {
                console.log('Account Deletion Success!')
                isSuccessful = true
            }
             window.sessionStorage.clear()
            dispatch(IsLoadingAction(false))
            return {
                type: DELETE_USER,
                status: {
                    isSuccessful: isSuccessful
                },
                payload: {
                    username: '',
                    firstName: '',
                    lastName: '',
                    bio: ''
                }
            }
        })


    }


}