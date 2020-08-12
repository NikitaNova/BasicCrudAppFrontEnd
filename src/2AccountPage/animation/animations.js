import anime from "animejs/lib/anime.es"

export function loadInAnimAccountPage() {
    anime.timeline({
        easing: 'easeOutExpo',
        autoplay: true
    })
        .add({
            targets: 'header',
            height: [0, '32%'],
            duration: 800,
            autoplay: false
        })
        .add({
            targets: 'main .bioPage',
            opacity: 1,
            height: ['0%', '50%'],
            duration: 800
        }, '-=800')
        .add({
            targets: 'header img, header div',
            opacity: [0, 1],
            duration: 900
        }, '-=800')
        .add({
            targets: 'main .infoDisplay img, main .infoDisplay h4',
            opacity: [0, 1],
            duration: 800
        }, '-=800')
}

export function mouseOverAnim(name){
    anime({
        targets: name,
        scale: [1 , 1.1],
        duration: 1000,
        autoplay:true
    })
}

export function mouseLeaveAnim(name){
    anime({
        targets: name,
        scale:[1.1 , 1],
        duration: 1100,
        autoplay: true
    })
}
