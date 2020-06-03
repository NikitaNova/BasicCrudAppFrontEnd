import anime from "animejs/lib/anime.es.js"
console.log("Intro Anim")
document.addEventListener('DOMContentLoaded',()=>{
     
     anime.timeline({
          easing: 'easeOutExpo'
     })
     .add({
          targets:'h1',
          opacity:[
               {value: 0, duration: 500},
               {value: 1, duration:700}
          ],
          translateX:[
               {value:'+=200',duration:700},
               {value:'-=200',duration:600}
          ]
     },'-=200')
     .add({
          targets:'header',
          height:[
               {value:'0%',duration:900},
               {value:'32%',duration: 1000}
          ] 
     },'-=1500')
     .add({
          targets:".logIn,.signUp",
          opacity:[0,1],
          duration: 1500
     },'-=500')

})
     

