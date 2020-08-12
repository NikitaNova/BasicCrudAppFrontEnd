import React, {useEffect, useState} from "react"
import {handleMouseClickHomepage, loadHomepage, mouseLeaveButtonHomepage} from "../animation/animations"
import {connect} from "react-redux"
import LogIn from "./LogIn.js"
import SignUp from "./SignUp.js"
import OnChangeLogInAction, {default as onChangeLogInAction} from '../../redux/actions/OnChange/OnChangeLogInAction'
import OnChangeSignUpAction, {default as onChangeSignUpAction} from '../../redux/actions/OnChange/OnChangeSignUpAction'
import LogInAction from "../../redux/actions/Logging/LogInAction";
import SignUpAction from "../../redux/actions/Logging/SignUpAction";
import IsLoadingAction from "../../redux/actions/IsLoadingAction";

function App(prop) {
    let [isLogInOpen, setIsLogInOpen] = useState(false)
    let [isSignUpOpen, setIsSignUpOpen] = useState(false)


    useEffect(() => {
        loadHomepage()
    }, [])

    function handleLogIn(event) {
        event.preventDefault()
        let username = prop.store.input.logIn.username
        let password = prop.store.input.logIn.password
        prop.dispatch(LogInAction(username, password)).then(res => {
            if (!res.status.isSuccessful) {
                alert("Wrong username or password. Try Again")
            } else {
                let logInInputs = document.getElementsByClassName("logInInputs")
                for (let i = 0; i < logInInputs.length; i++) {
                    logInInputs.item(i).value = ''
                }
                prop.dispatch(OnChangeLogInAction({username: ''}))
                prop.dispatch(OnChangeLogInAction({password: ''}))

                prop.dispatch(IsLoadingAction(false))
            }
        })
    }

    function handleSignUp(event) {
        event.preventDefault()
        console.log(prop.store)
        let username = prop.store.input.signUp.username
        let firstName = prop.store.input.signUp.firstName
        let lastName = prop.store.input.signUp.lastName
        let password = prop.store.input.signUp.password

        if (username != '' || firstName != '' || lastName != '' || password != '') {
            prop.dispatch(SignUpAction(username, password, firstName, lastName)).then(res => {
                console.log(res)
                if (res.status.isSuccessful) {
                    prop.dispatch(IsLoadingAction(false))
                    let elList = document.getElementsByClassName("signUp_inputs")
                    for (let i = 0; i < elList.length; i++) {
                        elList.item(i).value = ''
                    }
                    alert("Account Created Successfully!")
                    prop.dispatch(OnChangeSignUpAction({username: ''}))
                    prop.dispatch(OnChangeSignUpAction({firstName: ''}))
                    prop.dispatch(OnChangeSignUpAction({lastName: ''}))
                    prop.dispatch(OnChangeSignUpAction({password: ''}))

                } else {
                    alert("Something went wrong. Please try Again...")
                }
            })

        } else {
            alert("All Sign Up fields are required")
        }
    }

    function handleChange(event) {
        let {name, value} = event.target
        switch (name) {
            // LOGIN
            case 'logIn_username':
                prop.dispatch(onChangeLogInAction({username: value}))
                break
            case 'logIn_password':
                prop.dispatch(onChangeLogInAction({password: value}))
                break
            // SIGN UP
            case 'signUp_username':
                prop.dispatch(onChangeSignUpAction({username: value}))
                break
            case 'signUp_password':
                prop.dispatch(onChangeSignUpAction({password: value}))
                break
            case 'signUp_firstName':
                prop.dispatch(onChangeSignUpAction({firstName: value}))
                break
            case 'signUp_lastName':
                prop.dispatch(onChangeSignUpAction({lastName: value}))
                break
            default:
                console.log('Cant find a place to store this type of data')
                break
        }
        console.log(`${name}: ${value}`)
    }

    // UI Animation

    function handleLogClick(e) {
        e.stopPropagation()
        let name = e.target.className
        switch (name) {
            case 'logIn':
                let openLogInAnim = handleMouseClickHomepage('.logIn')
                openLogInAnim.play()
                setIsLogInOpen(true)
                break
            case 'signUp':
                let openSignUpAnim = handleMouseClickHomepage('.signUp')
                openSignUpAnim.play()
                setIsSignUpOpen(true)

                break
        }
    }

    function handleCloseLogs(e) {
        let name = e.target.className
        if (name == 'logContainer') {
            if (isLogInOpen) {
                mouseLeaveButtonHomepage('.logIn')
                setIsLogInOpen(false)
            } else if (isSignUpOpen) {
                mouseLeaveButtonHomepage('.signUp')
                setIsSignUpOpen(false)
            } else {
                console.log('You did something really wrong!')
            }
        }
    }

    return (
        <div className="headContainer">
            <header>
                <h1 unselectable="on">Welcome</h1>
            </header>

            <div className="logContainer" onClickCapture={isLogInOpen || isSignUpOpen ? handleCloseLogs : undefined}>

                <LogIn onMouseClickMethod={!isLogInOpen ? handleLogClick : undefined}
                       onSubmitMethod={handleLogIn}
                       onChangeMethod={handleChange}/>

                <SignUp onMouseClickMethod={!isSignUpOpen ? handleLogClick : undefined}
                        onSubmitMethod={handleSignUp}
                        onChangeMethod={handleChange}/>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {store: state}
}

export default connect(mapStateToProps, null)(App)