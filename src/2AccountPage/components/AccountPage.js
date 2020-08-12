import React, {useEffect} from "react"
import Back from "../icons/Back.svg"
import Settings from "../icons/Settings.svg"
import {loadInAnimAccountPage, mouseLeaveAnim, mouseOverAnim} from "../animation/animations"
import {getAccountSettingsEndpoint as accountSettings} from "../../redux/domainName";
import {connect} from "react-redux";
import {userData} from "../../redux/actions/UserData/UserDataAction";

function AccountPage(prop) {

    function loadInUserData() {
        console.log('Loading In User Data...')
        prop.dispatch(userData(window.sessionStorage.getItem('username')))
    }

    //Animations
    useEffect(async () => {
        await loadInUserData()
        console.log('User Data Loaded in!')
        console.log(prop.store)
        loadInAnimAccountPage()
    }, [])

    function handleMouseOver(e) {
        mouseOverAnim(e.target)
    }

    function handleMouseLeave(e) {
        mouseLeaveAnim(e.target)
    }

    function goToAccountSettings(e) {
        fetch(accountSettings, {
            method: 'GET',
            headers: {
                Accept: 'text/html;charset=utf-8',
                Authorization: window.sessionStorage.getItem('JWT')
            }
        }).then((val) => {
            val.text().then(val => {
                console.log(val)
                window.document.open()
                window.document.write(val)
                window.document.close()
            })
        })

    }

    function goBack() {
        fetch('/').then(r => {
            r.text().then(r => {
                window.document.open()
                window.document.write(r)
                window.document.close()
            })
        }).catch(v=>console.log(v)).finally(()=>console.log('Finished Loading Homepage!'))
    }

    return (
        <div className="pageContainer">
            <header>
                    <img src={Back} alt="Go Back Icon"
                         onMouseOverCapture={handleMouseOver}
                         onMouseLeave={handleMouseLeave}
                         onClick={goBack}/>
                <div className="profilePic">
                </div>
            </header>
            <main>
                <section className="infoDisplay">
                        <img src={Settings} alt="Settings"
                             onMouseOverCapture={handleMouseOver}
                             onMouseLeave={handleMouseLeave}
                            onClick={goToAccountSettings}/>
                    <h4>{prop.firstName != null ? prop.firstName : 'First Name'},
                        <br/>{prop.lastName != null ? prop.lastName : 'Last Name'}</h4>
                </section>
                <section className="bioPage">
                    <h5>
                        Bio
                    </h5>
                    <p>
                        {prop.bio}
                    </p>
                </section>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        firstName: state.userData.firstName,
        lastName: state.userData.lastName,
        bio: state.userData.bio,
        store: state
    }
}

export default connect(mapStateToProps, null)(AccountPage)