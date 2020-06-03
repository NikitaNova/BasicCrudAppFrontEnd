import React, { useState, useEffect, useRef } from "react"
import anime, {play, reverse, pause, add} from 'animejs/lib/anime.es.js';
import main from  "../style/main.sass"
import LogIn from "./LogIn.js"
import SignUp from "./SignUp.js"

const contentHeight= window.innerHeight;
const headerHeight = contentHeight*.3
const mainBodyHeight = contentHeight-headerHeight

function App(){

     function handleMouseOver(name){
          anime.timeline({
               easing:'easeOutExpo',
               loop:false,
               autoplay:true
               })
               .add({
                    targets:name,
                    scale:1.1,
                    duration:500,
               })
               // .add({
               //      targets:`${name} h4`,
               //      'padding-bottom':'20px',
               //      duration: 200
               // },'-=200')
     }

     function handleMouseLeave(name){
          anime.timeline({
               easing:'easeOutExpo',
               loop:false,
               autoplay:true
          })
          .add({
               targets: name,
               scale:1,
               duration: 700,
          })
          .add({
               targets:`${name} form`,
               opacity: 0,
               duration: 600
          },'-=100')
          .add({
               targets:`${name} form`,
               height: '30%',
               duration: 600
          },'-=600')
          .add({
               targets:`${name} h4`,
               'font-size':'90pt' ,
               top:'70pt',
               duration: 600,
               easing:'easeOutQuint'
          },'-=700')

          
     }

  
     return (
          <div className="headContainer" 
          style={{height:contentHeight}}>
               <header style={{"height":headerHeight}} >
                    <h1  unselectable="on">Welcome</h1>
               </header>

               <div className="logContainer" style={{"height":mainBodyHeight}}>
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