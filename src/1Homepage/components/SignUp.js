import React from "react"
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

function SignUp(prop){

    return (
        <div className="signUp"
               onClick={prop.onMouseClickMethod}>
               <h4 unselectable="on">Sign Up</h4>
               <form onSubmit={()=>prop.onSubmitMethod}>
                    <input put type="text" name="signUp_username"
                           className={"signUp_inputs"}
                    placeholder="username" 
                    onChange={prop.onChangeMethod} />

                    <input type="password" name="signUp_password"
                           className={"signUp_inputs"}
                    placeholder="password"
                    onChange={prop.onChangeMethod} />

                    <input type="text" name="signUp_firstName"
                           className={"signUp_inputs"}
                    placeholder="first name"
                     onChange={prop.onChangeMethod} />

                    <input type="text" name="signUp_lastName"
                           className={"signUp_inputs"}
                    placeholder="last name"
                     onChange={prop.onChangeMethod} />

                     <button onClick={prop.onSubmitMethod}>
                        submit
                     </button>
               </form>
          </div>
     )
}


export default connect()(SignUp)