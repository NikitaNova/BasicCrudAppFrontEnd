import React ,{useState, useEffect} from "react"

function SignUp(prop){
     let [new_username, setNewUsername] = useState("")
     let [new_password, setNewPassword] = useState("")
     let [firstName, setFirstName] = useState("")
     let [lastName, setLastName] = useState("")

     const handleSubmit = (e) =>{
          e.preventDefault()
          console.log(e)
     }

     useEffect(()=>{
          console.log("Sign-Up is Working")
     })

     return (
          <div className="signUp" 
          onMouseMoveCapture={()=>prop.onMouseOverMethod(".signUp")} 
          onMouseOut={()=>prop.onMouseLeaveMethod(".signUp")}>
               <h4 unselectable="on">Sign Up</h4>
               <form onSubmit={handleSubmit}>
                    <input type="text" name="signUpUsername" 
                    placeholder="username" 
                    onChange={prop.onChangeMethod} />

                    <input type="text" name="signUpPassword" 
                    placeholder="password" 
                    onChange={prop.onChangeMethod} />

                    <input type="text" name="firstName" 
                    placeholder="first name"
                     onChange={prop.onChangeMethod} />

                    <input type="text" name="lastName" 
                    placeholder="last name"
                     onChange={prop.onChangeMethod} />

                    <button>
                         submit
                    </button>
               </form>
          </div>
     )
}

export default SignUp