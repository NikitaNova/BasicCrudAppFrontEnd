import React, { useState, useEffect, useRef } from "react"
import anime, {play, reverse, pause, add} from 'animejs/lib/anime.es.js';
import main from  "../style/main.sass"
import LogIn from "./LogIn.js"
import SignUp from "./SignUp.js"

const contentHeight= window.innerHeight;

function App(){

     function handleMouseOver(name){
          anime({
               targets:name,
               scale:1.2,
               duration:500,
               easing:'easeOutExpo',
               loop:false,
               autoplay:true
               })
     }

     function handleMouseLeave(name){
          anime({
               targets: name,
               scale:1,
               duration: 700,
               easing:'easeOutExpo',
               loop:false,
               autoplay:true
          })


     }

  
     return (
          <div className="headContainer" 
          style={{height:contentHeight}}>
               <header>
                    <h1  unselectable="on">Welcome</h1>
               </header>

               <div className="logContainer">
                    <LogIn  
                    onMouseOverMethod={handleMouseOver} 
                    onMouseLeaveMethod={handleMouseLeave} />

                    <SignUp 
                    onMouseOverMethod={handleMouseOver} 
                    onMouseLeaveMethod={handleMouseLeave} />
               
               </div>
          </div>
     )
}

export default App