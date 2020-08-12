import anime from "animejs/lib/anime.es"

export var loadHomepage = () => {
    anime.timeline({
        autoplay: true,
        loop: false,
        easing: 'easeOutExpo'
    }).add({
        targets: 'header',
        height: [0, '30%'],
        duration: 1000
    }).add({
        targets: 'header h1',
        opacity: [0, 1],
        duration: 500
    }, '-=600').add({
        targets: '.logContainer',
        opacity: [0, 1],
        duration: 1000
    }, '-=200')
}

export var mouseLeaveButtonHomepage = (name) => {
    anime.timeline({
        easing: 'easeOutExpo',
        loop: false,
        autoplay: true
    }).add({
        targets: `${name}`,
        scale: 1,
        duration: 500
    }).add({
        targets: `${name} h4`,
        'font-size': '60pt',
        top: '75pt',
        duration: 600,
    }, '-=450')
        .add({
            targets: `${name} form`,
            height: '0%',
            duration: 600
        }, '-=700')
        .add({
            targets: `${name} form *`,
            opacity: '0',
            duration: 400
        }, '-=800')

}

export var handleMouseClickHomepage = (name) => {
    return anime.timeline({
        autoplay: false,
        loop: false,
        easing: 'easeOutExpo'
    }).add({
        targets: name,
        scale: 1.1,
        duration: 500,
    }).add({
        targets: `${name} h4`,
        'top': '20pt',
        'font-size': '50pt',
        duration: 700
    }, '-=400')
        .add({
            targets: `${name} form`,
            height: '100%',
            duration: 700
        }, '-=700')
        .add({
            targets: `${name} form *`,
            opacity: 1,
            duration: 500
        }, '-=800')
}