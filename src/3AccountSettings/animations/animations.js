import anime from "animejs"

export function introAnimAccountSettings(){
    anime.timeline({
        ease:"easeOutExpo",
        autoplay: true,
        loop:false
    })
        .add({
            targets:'aside',
            opacity:[0,1],
            width: ['0%','30%'],
            duration: 800
        })
        .add({
            targets:'aside *',
            opacity: [0,1],
            duration: 600,
            easing:'easeOutQuad'
        },'-=900')
        .add({
            targets:'form *',
            opacity: [0,1],
            duration:1000
        },'-=700')
        .add({
            targets:'.deleteAcc',
            opacity:[0,1],
            duration: 500,
            easing:'easeOutQuad'
        },'-=800')
}

export function onMouseOverAnim(name){
    anime({
        targets:name,
        scale: 1.1,
        duration: 400,
        autoplay:true
    })
}

export function onMouseLeaveAnim(name){
    anime({
        targets:name,
        scale: 1,
        duration: 500,
        autoplay: true
    })
}