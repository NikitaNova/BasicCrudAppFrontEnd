import React from "react"
import Back from "../icons/Back.svg";

function SideBar(prop) {

    return (
        <aside>
            <div className="profilePhoto">
                <img src="" alt="Profile Photo"/>
            </div>
            <hr/>
            <h1>Info</h1>
            <div className="backIcon">
                <img src={Back} alt="Back Icon"
                     onMouseOverCapture={()=>prop.onMouseOverMethod(".backIcon")}
                     onMouseLeave={()=>prop.onMouseLeaveMethod(".backIcon")}
                    onClick={prop.onMouseClickMethod}/>
            </div>
        </aside>
    )
}

export default SideBar