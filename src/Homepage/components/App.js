import React, { useState } from "react"
import main from  "../style/main.sass"
const contentHeight= window.innerHeight;

function App(){
     let [username, setUsername] = useState("")
     let [password, setPassword] = useState("")
     
     let [new_username, setNewUsername] = useState("")
     let [new_password, setNewPassword] = useState("")
     let [firstName, setFirstName] = useState("")
     let [lastName, setLastName] = useState("")




     const handleTextInput = (event) => {
          if(event.target.name == "username"){
               setUsername(event.target.value);
          } else if(event.target.name == "password"){
               setPassword(event.target.value)
          } else if(event.target.name =="signUpUsername"){
               setNewUsername(event.target.value)
          } else if(event.target.name =="signUpPassword"){
               setNewPassword(event.target.value)
          } else if(event.target.name =="firstName"){
               setFirstName(event.target.value)
          }else if(event.target.name =="lastName"){
               setLastName(event.target.value)
          } else {
               alert("There is no input matching where you are typing")
          }
     }

     const handleLogInSubmit = (e) => {
          e.preventDefault();
          console.log("Username: " + username  + "\n" + 
                    "Password: " + password)
     }

     const handleSignUpSubmit = (e) => {
          e.preventDefault();
          console.log("Username: " + new_username + "\n" +
                    "Password: " + new_password +  "\n" + 
                    "First Name: " + firstName + "\n" +  
                    "Last Name: " + lastName)
     }

     return (
          <div className="headContainer" 
          style={{height:contentHeight}}>
               <header>
                    <h1  unselectable="on">Welcome</h1>
               </header>

               <div className="logContainer">
                    <div className="logIn">
                         <h4 unselectable="on">Log In</h4>
                         <form style={{display:"none"}} onSubmit={handleLogInSubmit}>
                              <label>
                                   <input type="text" name="username" placeholder="username" onChange={handleTextInput}/>
                                   <input type="text" name="password" placeholder="password" onChange={handleTextInput}/>
                              </label>
                              <button>Submit</button>
                         </form>
                    </div>
                    <div className="signUp">
                         <h4 unselectable="on">Sign Up</h4>
                         <form style={{display:"none"}} onSubmit={handleSignUpSubmit}>
                              <label>
                                   <input type="text" name="signUpUsername" placeholder="username" onChange={handleTextInput}/>
                                   <input type="text" name="signUpPassword" placeholder="password" onChange={handleTextInput}/>
                                   <input type="text" name="firstName" placeholder="First Name" onChange={handleTextInput}/>
                                   <input type="text" name="lastName" placeholder="Last Name" onChange={handleTextInput}/>
                              </label>
                              <button>Submit</button>
                         </form>
                         
                    </div>
               </div>
          </div>
     )
}

export default App