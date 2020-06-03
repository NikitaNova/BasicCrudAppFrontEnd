import React ,{useState, useEffect} from "react"
import anime from "animejs/lib/anime.es.js"
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

     const handleClick = () =>{
          console.log("Sign Up")
          anime.timeline({
               easing:'easeOutExpo',
               autoplay:true,
               loop:false
          })
          .add({
               targets:'.signUp h4',
               top:'20pt',
               'font-size':'50pt',
               duration: 900
          })
          .add({
               targets:'.signUp form',
               height:'100%',
               opacity:1,
               duration: 1500
          },'-=500')
     }

     return (
          <div className="signUp" 
          onMouseMoveCapture={()=>prop.onMouseOverMethod(".signUp")} 
          onMouseLeave={()=>prop.onMouseLeaveMethod(".signUp")} onClick={()=>handleClick()}>
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