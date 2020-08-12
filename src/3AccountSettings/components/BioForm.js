import React, {useState} from "react"
import Back from "../icons/Back.svg";
import anime from "animejs";

function BioForm(prop){

    return(
        <form className="changeBio" onSubmit={prop.onSubmitMethod}>
            <label>

                <h1>Bio</h1>

                <textarea
                    name="bio"
                    placeholder="Say something nice..."
                    onChange={prop.onChangeMethod}
                    id={"bioInput"}>
                </textarea>

                <button onMouseOverCapture={()=>prop.onMouseOverMethod(".changeBio label button")}
                        onMouseLeave={()=>prop.onMouseLeaveMethod(".changeBio label button")}>
                    change
                </button>
            </label>
        </form>
    )

}

export default BioForm