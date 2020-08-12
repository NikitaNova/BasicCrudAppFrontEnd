import React, {useState, useEffect} from "react"
import anime from "animejs";

function NewPasswordForm(prop){

    return(
    <form className="changePassword" onSubmit={prop.onSubmitMethod}>
        <label>
            <h1>New Password</h1>

            <input type="password"
                   className={"passwordInput"}
                   name="oldPassword"
                   placeholder="old-password"
                   onChange={prop.onChangeMethod} />
            <br/>

            <input type="password"
                   className={"passwordInput"}
                   name="newPassword"
                   placeholder="new-password"
                   onChange={prop.onChangeMethod} />

            <input type="password" name="reNewPassword"
                   className={"passwordInput"}
                   placeholder="re-new-password"
                   onChange={prop.onChangeMethod} />

            <button onMouseOverCapture={()=>prop.onMouseOverMethod(".changePassword label button")}
                    onMouseLeave={()=>prop.onMouseLeaveMethod(".changePassword label button")}>
                change
            </button>
        </label>
    </form>)
}
export default NewPasswordForm