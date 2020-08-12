import {POST_LOGIN} from "../../actionTypes"
import {getAccountPageEndpoint, logInEndpoint} from "../../domainName"

export default function (user, pass) {

    return async function() {
        let isSuccessful = false;

        return await fetch(logInEndpoint, {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Accept': 'text/html;charset=utf-8',
            },
            body: JSON.stringify({
                username: user,
                password: pass
            })
        }).then((res) => {
            if (res.headers.get('Authorization') != null) {
                let jwt = res.headers.get("Authorization")
                window.sessionStorage.setItem('JWT', jwt)
                isSuccessful = true
            }
            console.log('Log In: ' + isSuccessful)
        }).then(() => {
            if (isSuccessful) {
                fetch(getAccountPageEndpoint, {
                    method: 'GET',
                    headers: {
                        Accept: 'text/html;charset=utf-8',
                        Authorization: window.sessionStorage.getItem('JWT')
                    }
                }).then((res) => {
                    return res.text().then(value => value)
                }).then((html) => {
                    window.document.open()
                    window.document.write(html)
                    window.document.close()
                })
            }
        }).then(() => {
            window.sessionStorage.setItem('username', user)
            return ({
                type: POST_LOGIN,
                status: {
                    isSuccessful: isSuccessful
                }
            })
        })
    }
}