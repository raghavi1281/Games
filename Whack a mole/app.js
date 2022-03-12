const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const time_left = document.querySelector('#time_left')

let score = document.querySelector('#result')

let result = 0
let currentTime = time_left.textContent

function randomSquare() {
    square.forEach( className => { className.classList.remove('mole') })

    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition)
        {
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}



function countDown() {
    currentTime--
    time_left.textContent = currentTime
    if(currentTime === 0)
    {
        //clearInterval(timerId)
        alert('GAMEOVER and your Score is:' + result)
        time_left.textContent = 60
        currentTime = 60
        score.textContent = null
        result = 0
    }
}

let timerId = setInterval(countDown, 1000)
moveMole()