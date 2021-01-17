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

const navLink = document.querySelector('.nav')

navLink.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('prevented default')
})

const navBar = document.querySelector('.main-navigation')

navBar.addEventListener('mouseover', (event) => {
    event.target.style.color = 'dodgerblue';
    event.target.style.transform = 'scale(1.1)'
    event.target.style.transition = 'transform 1s'
    event.stopPropagation();
  event.target.addEventListener('mouseleave', event => event.target.style.transform = 'scale(1)')
})



const headers = document.querySelectorAll('h2')

headers.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.target.style.color = 'dodgerblue'
    })
})






