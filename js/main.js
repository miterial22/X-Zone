document.addEventListener("DOMContentLoaded", ready);
window.addEventListener('scroll', function() {
    initAnimation();
});
function ready() {
    initAnimation()
    hamburgerInit()
    submitForm()
    VanillaTilt.init(document.querySelectorAll(".parallax"), {
        max: 15,
        speed: 400
    });
    document.querySelector('.year').innerHTML = new Date().getFullYear()
}

function initAnimation () {
    const elements = document.querySelectorAll('.animation')

    elements.forEach(element => {
        const speed = element.dataset.speed || 0.5
        element.style.animationDuration = speed + 's';
        Visible(element);
    })
}

function Visible(element) {
    const elementPosition = {
            top: window.pageYOffset + element.getBoundingClientRect().top,
            bottom: window.pageYOffset + element.getBoundingClientRect().bottom
        },
        windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (elementPosition.bottom > windowPosition.top && elementPosition.top < windowPosition.bottom ) {
        element.classList.add('active')
    }
}

function hamburgerInit() {
    const burgers = document.querySelectorAll('.header__hamburger')
    burgers.forEach(burger => burger.addEventListener('click', function () {
        burgers.forEach(item => item.classList.toggle('active'))
        if (burger.classList.contains('active')){
            document.querySelector('.navbar').classList.add('active')
            document.body.style.overflow = 'hidden'
        }else {
            document.querySelector('.navbar').classList.remove('active')
            document.body.style.overflow = 'unset'
        }
    }))
}
function submitForm() {
    const form = document.querySelector('.subscribe__form')
    form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        evt.target.querySelector('input').value = ''
        evt.target.querySelector('.sub').style.display = 'none'
        evt.target.querySelector('.success').style.display = 'block'
        setTimeout(() => {
            evt.target.querySelector('.sub').style.display = 'block'
            evt.target.querySelector('.success').style.display = 'none'
        }, 2000)
    })
}