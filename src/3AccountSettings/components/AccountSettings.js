import React, {useEffect, useState} from "react"
import BasicInfoForm from "./BasicInfoForm";
import NewPasswordForm from "./NewPasswordForm";
import BioForm from "./BioForm";
import SideBar from "./SideBar";
import {introAnimAccountSettings, onMouseLeaveAnim, onMouseOverAnim} from "../animations/animations"
import {connect} from "react-redux";
import OnChangeUserAction from "../../redux/actions/OnChange/OnChangeUserAction";
import PostNewUserPasswordAction from "../../redux/actions/PostNewUserData/PostNewUserPasswordAction";
import {getAccountPageEndpoint, verifyOldPassword} from "../../redux/domainName";
import postNewUserBasicInfoAction from "../../redux/actions/PostNewUserData/PostNewUserBasicInfoAction";
import postNewUserBioAction from "../../redux/actions/PostNewUserData/PostNewUserBioAction";
import DeleteUserAccountAction from "../../redux/actions/UserData/DeleteUserAccountAction";
import IsSuccessfulAction from "../../redux/actions/IsSuccessfulAction";
import {userData} from "../../redux/actions/UserData/UserDataAction";

const contentHeight = window.innerHeight

function AccountSettings(prop) {
    let [oldPassword, setOldPassword] = useState('')
    let [newPassword, setNewPassword] = useState('')
    let [reNewPassword, setReNewPassword] = useState('')

    // Animations
    useEffect(() => {
        console.log('Account Settings page is loading...')
        prop.dispatch(userData(window.sessionStorage.getItem('username')))
        introAnimAccountSettings()
        console.log('Account Settings page is done loading!!!')
        console.log(prop.store)
    }, [])

    // Functional
    function handleChange(e) {
        let {name, value} = e.target
        switch (name) {
            case 'username':
                prop.dispatch(OnChangeUserAction({username: value}))
                break
            case 'firstName':
                prop.dispatch(OnChangeUserAction({firstName: value}))
                break
            case 'lastName':
                prop.dispatch(OnChangeUserAction({lastName: value}))
                break
            case'bio':
                prop.dispatch(OnChangeUserAction({bio: value}))
                break
            case'oldPassword':
                setOldPassword(value)
                break
            case'newPassword':
                setNewPassword(value)
                break
            case'reNewPassword':
                setReNewPassword(value)
                break
            default:
                console.log('This input should not exist')
        }
    }

    function goToAccountPage() {
        fetch(getAccountPageEndpoint, {
            method: 'GET',
            headers: {Authorization: window.sessionStorage.getItem('JWT')}
        }).then(res => res.text()).then(html => {
            console.log(html)
            window.document.open()
            window.document.write(html)
            window.document.close()
        })
    }

    function handleBasicInfoUpdate(e) {
        e.preventDefault()
        prop.dispatch(postNewUserBasicInfoAction(prop.username, prop.firstName, prop.lastName)).then(res => {
            if (res.status.isSuccessful) {
                prop.dispatch(IsSuccessfulAction(false))

                let basicInfoInputs = document.getElementsByClassName("basicInfoInput")
                for (let i = 0; i < basicInfoInputs.length; i++) {
                    basicInfoInputs.item(i).value = ''
                }
                prop.dispatch(OnChangeUserAction({username: ''}))
                prop.dispatch(OnChangeUserAction({firstName: ''}))
                prop.dispatch(OnChangeUserAction({lastName: ''}))

                alert('User data updated successfully!')
            } else {
                alert('Something went wrong. Try again...')
            }
        })

    }

    async function handlePasswordUpdate(e) {
        e.preventDefault()
        if (oldPassword != '' && newPassword != '' && reNewPassword != '') {
            const username = window.sessionStorage.getItem('username')
            let isOldPassValid = await fetch(verifyOldPassword + `?username=${username}`, {
                method: 'POST',
                headers: {
                    Authorization: window.sessionStorage.getItem('JWT'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password: oldPassword
                })
            }).then(res => {
                return res.headers.get("isPasswordsMatching") == "true" ? true : false
            })

            if (isOldPassValid) {
                let isMatchingPasswords = (newPassword == reNewPassword)

                if (isMatchingPasswords) {

                    prop.dispatch(PostNewUserPasswordAction(username, newPassword)).then(res => {
                        console.log(res)

                        if (res.status.isSuccessful) {
                            prop.dispatch(IsSuccessfulAction(false))
                            let passwordInputs = document.getElementsByClassName("passwordInput")
                            for (let i = 0; i < passwordInputs.length; i++) {
                                passwordInputs.item(i).value = ''
                            }
                            setOldPassword('')
                            setNewPassword('')
                            setReNewPassword('')
                            alert("Your password was changed successfully")
                        } else {
                            alert("Something went wrong! Try again...")
                        }
                    })

                } else {
                    alert('New Passwords do not match')
                }
            } else {
                alert('Old Password does not match your current password')
            }
        } else {
            alert('All password fields must be filled')
        }
    }

    function handleBioUpdate(e) {
        e.preventDefault()
        if (prop.bio != null || prop.bio != '') {
            prop.dispatch(postNewUserBioAction(window.sessionStorage.getItem('username'), prop.bio)).then(res => {
                console.log(res)
                if (res.status.isSuccessful) {
                    prop.dispatch(IsSuccessfulAction(false))
                    document.getElementById("bioInput").value = ''
                    prop.dispatch(OnChangeUserAction({bio: ''}))
                    alert("Your Bio was successfully updated")
                } else {
                    alert("Something went wrong! Try again...")
                }
            })
        } else {
            alert("Bio field cannot be empty")
        }
    }

    function handleDeleteAcc(e) {
        e.preventDefault()
        prop.dispatch(DeleteUserAccountAction(window.sessionStorage.getItem('username')))
            .then(res => {
                console.log(res)
                if (!res.status.isSuccessful) {
                    alert('Something went wrong. Try again...')
                } else {
                    prop.dispatch(IsSuccessfulAction(false))
                    fetch('/').then(res=>res.text()).then(html=>{
                        window.document.open()
                        window.document.write(html)
                        window.document.close()
                    })
                }
            })
    }

    return (
        <div className="pageContainer" style={{height: contentHeight}}>
            <SideBar onMouseOverMethod={onMouseOverAnim}
                     onMouseLeaveMethod={onMouseLeaveAnim}
                     onMouseClickMethod={goToAccountPage}/>
            <main>
                <BasicInfoForm onMouseOverMethod={onMouseOverAnim}
                               onMouseLeaveMethod={onMouseLeaveAnim}
                               onSubmitMethod={handleBasicInfoUpdate}
                               onChangeMethod={handleChange}/>

                <NewPasswordForm onMouseOverMethod={onMouseOverAnim}
                                 onMouseLeaveMethod={onMouseLeaveAnim}
                                 onSubmitMethod={handlePasswordUpdate}
                                 onChangeMethod={handleChange}/>

                <BioForm onMouseOverMethod={onMouseOverAnim}
                         onMouseLeaveMethod={onMouseLeaveAnim}
                         onSubmitMethod={handleBioUpdate}
                         onChangeMethod={handleChange}/>

                <div className="deleteAcc">

                    <button onMouseOverCapture={() => onMouseOverAnim(".deleteAcc button")}
                            onMouseLeave={() => onMouseLeaveAnim(".deleteAcc button")}
                            onClick={handleDeleteAcc}>
                        delete account
                    </button>

                </div>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.userData.username,
        firstName: state.userData.firstName,
        lastName: state.userData.lastName,
        bio: state.userData.bio,
        isSuccessful: state.isSuccessful,
        store: state
    }
}

export default connect(mapStateToProps, null)(AccountSettings)