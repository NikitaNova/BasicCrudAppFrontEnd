import anime from "animejs/lib/anime.es"

const handleMouseOver = (name) => anime({
     targets:name,
     scale:1.2,
     duration:500,
     easing:'easeOutExpo',
     loop:false,
     autoplay:true
     })

const handleMouseLeave = (name) =>anime({
     targets: name,
     scale:1,
     duration: 700,
     easing:'easeOutExpo',
     loop:false,
     autoplay:true
})

const logInReveal =
     anime.timeline({  
          autoplay: false,
          loop:false
     })
     .add({
          targets:'.logIn h4',
          opacity: [0,1],
          duration: 700
     });

export {handleMouseOver,handleMouseLeave,logInReveal}