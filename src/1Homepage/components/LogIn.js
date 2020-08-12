import React from "react"
import {connect} from "react-redux";

function LogIn(prop) {

     return (
         <div className="logIn"
              onClick={prop.onMouseClickMethod}>

              <h4 unselectable="on">Log In</h4>

              <form>
                   <input type="text"
                          className={"logInInputs"}
                          name="logIn_username" placeholder="username"
                          onChange={prop.onChangeMethod}/>

                   <input type="password" name="logIn_password" placeholder="password"
                          className={"logInInputs"}
                          onChange={prop.onChangeMethod}/>
                       <button onClick={prop.onSubmitMethod}>
                            submit
                       </button>
              </form>
         </div>

     )
}

export default connect()(LogIn)