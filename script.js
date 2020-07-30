import { messages } from './messages.js'

let pageNumber = 0

const prevButton = document.querySelector('.footer--prev')
const randomButton = document.querySelector('.footer--random')
const nextButton = document.querySelector('.footer--next')
const message = document.querySelector('.message-box__message')
const circle = document.querySelector('.message-box__circle')
const body = document.querySelector('body')

const next = () => {
  pageNumber += 1
  if (pageNumber >= messages.length) {
    pageNumber = 0
  }
  updateSection()
}

const previous = () => {
  pageNumber -= 1
  if (pageNumber < 0) {
    pageNumber = messages.length - 1
  }
  updateSection()
}

const random = () => {
  pageNumber = Math.floor(Math.random() * messages.length)
  updateSection()
}

const updateSection = () => {
  message.innerHTML = messages[pageNumber].copy
  circle.style.backgroundColor = messages[pageNumber].circle
  body.style.backgroundColor = messages[pageNumber].background
}

nextButton.addEventListener('click', () => {
  next()
})

prevButton.addEventListener('click', () => {
  previous()
})

randomButton.addEventListener('click', () =>
  random()
)

document.addEventListener('keyup', (e) => {
  if (e.keyCode === 37) {
    previous()
  } else if (e.keyCode === 39) {
    next()
  } else {
    random()
  }
})
