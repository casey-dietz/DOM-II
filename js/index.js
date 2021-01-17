// Your code goes here

const allImg = document.querySelectorAll('img')

allImg.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.transform = 'scale(1.15)';
        event.target.style.transition = 'transform 1s';
    element.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1)';
    })
    })  
});

const body = document.querySelector('body')

body.addEventListener('keydown', (event) => {
    console.log('user is pressing keyboard')
})

const navBar = document.querySelector('.main-navigation')

navBar.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('prevented default')
})
