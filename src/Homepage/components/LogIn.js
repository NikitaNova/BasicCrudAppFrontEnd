import React, {useState, useEffect} from "react"
import anime, {play} from "animejs/lib/anime.es"
import {logInReveal} from './animation/ButtonAnim'

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

     const handleClick = () =>{
          console.log("Click")
          anime.timeline({  
               autoplay: true,
               loop:false,
               easing: 'easeOutExpo'
          })
          .add({
               targets:'.logIn h4',
               'top':'20',
               'font-size':'50pt',
               duration: 900
          })
          .add({
               targets:'.logIn form',
               height: '100%',
               opacity:1,
               duration: 1500

          },'-=800')
          
     
     }


     return  (
          <div className="logIn" 
          onMouseMoveCapture={()=>prop.onMouseOverMethod(".logIn")} 
          onMouseLeave={()=>prop.onMouseLeaveMethod(".logIn")} onClick={()=>handleClick()}>
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