import React,{useState, useEffect} from "react"


function LogIn(prop){
     let [username, setUsername] = useState("")
     let [password, setPassword] = useState("")

     const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Username: " + username + "\n" +  
                    "Password:  "  + password);
     } 

     const handleChange = (e) =>{
          e.preventDefault()
          if(e.target.name ==  "username"){
               setUsername(e.target.value)
               console.log(username)
          } else if(e.target.name == "password"){
               setPassword(e.target.value)
               console.log(password)
          } else{
               console.log("This does not exist")
          }

     }

     useEffect(()=>{
          console.log("Log-In is Working")
     })


     return  (
          <div className="logIn" 
          onMouseMoveCapture={()=>prop.onMouseOverMethod(".logIn")} 
          onMouseLeave={()=>prop.onMouseLeaveMethod(".logIn")} >
               <h4 unselectable="on">Log In</h4>
               <form onSubmit={handleSubmit}>
                    <input type="text" 
                    name="username" placeholder="username" 
                    onChange={()=>prop.onChangeMethod} />

                    <input type="text" 
                    name="password" placeholder="password" 
                    onChange={()=>prop.onChangeMethod} />
                    <button>
                         submit
                    </button>
               </form>
          </div>
     )
}

export default LogIn