import React from "react"
import anime from "animejs";

function BasicInfoForm(prop){

    return(
        <form className="changeInfo" onSubmit={prop.onSubmitMethod}>
            <label>

                <h1>Basics</h1>

                <input type="text" name="firstName"
                       className={"basicInfoInput"}
                       placeholder="first name"
                       onChange={prop.onChangeMethod}/>

                <input type="text" name="lastName"
                       className={"basicInfoInput"}
                       placeholder="last name"
                       onChange={prop.onChangeMethod}/>

                <br/>

                <input type="text" name="username"
                       placeholder="username"
                       className={"basicInfoInput"}
                       onChange={prop.onChangeMethod}/>

                <button onMouseOverCapture={()=>prop.onMouseOverMethod(".changeInfo label button")}
                onMouseLeave={()=>prop.onMouseLeaveMethod(".changeInfo label button")}>
                    change
                </button>

            </label>
        </form>
    )
}

export default BasicInfoForm