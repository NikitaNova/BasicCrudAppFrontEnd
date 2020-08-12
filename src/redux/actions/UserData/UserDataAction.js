import {FAIL_FETCH_USER_DATA, FETCH_USER_DATA} from "../../actionTypes";
import {fetchUserDataEndpoint} from "../../domainName";
import AccessDeniedErrorAction from "../errors/AccessDeniedErrorAction";
import IsLoadingAction from "../IsLoadingAction";
import RecieveUserDataAction from "./RecieveUserDataAction";

export function userData(username) {
    if (window.sessionStorage.getItem('JWT') == null ||
        window.sessionStorage.getItem('JWT') == '') {
        return AccessDeniedErrorAction()
    }
    return async function(dispatch){
        let firstName;
        let lastName;
        let bio;
        let isSuccessful;

        dispatch(IsLoadingAction(true))

        return await fetch(fetchUserDataEndpoint + `?username=${username}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: window.sessionStorage.getItem('JWT')
            }
        }).then((res) => {
            return res.json()
        }).then(value => {
            console.log(value)
            firstName = value.first_name
            lastName = value.last_name
            bio = value.bio
            console.log(`${firstName} ${lastName} ${bio}`)
            if (firstName == null && lastName == null && bio == null) {
                isSuccessful = false
            } else {
                isSuccessful = true
            }
            console.log(`isSuccessful: ${isSuccessful}`)
            if (isSuccessful) {
                dispatch(IsLoadingAction(false))
                console.log('FETCH_USER_DATA action DONE ' + bio )
                dispatch(RecieveUserDataAction(firstName,lastName,bio))
            }
            dispatch(IsLoadingAction(false))
            console.log('FAIL_FETCH_USER_DATA action DONE')
            return {
                type: FAIL_FETCH_USER_DATA,
            }
        }).finally(() => {
            console.log('Fetch User Data Action DONE!')
        })
    }
}