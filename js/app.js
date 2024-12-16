const gameDisplay = document.getElementById('gameDisplay')
const gameBoard = document.getElementById('gameBoard')
let count = 0

colors = ['red', 'blue', 'green', 'orange', 'yellow', 'purple', 'pink', 'brown', 'darkgoldenrod']

boxes = [
    {
        id: 0,
        color: 'red'
    },
    {
        id: 1,
        color: 'blue'
    },
    {
        id: 2,
        color: 'green'
    },
    {
        id: 3,
        color: 'orange'
    },
    {
        id: 4,
        color: 'yellow'
    },
    {
        id: 5,
        color: 'purple'
    },
    {
        id: 6,
        color: 'pink'
    },    {
        id: 7,
        color: 'brown'
    },
    {
        id: 8,
        color: 'darkgoldenrod'
    }
]

boxes.forEach(element => {
    const div = document.createElement('div')
    div.classList.add('box')
    div.setAttribute('id', `box-${element.id}`)
    div.style.backgroundColor = element.color
    div.style.width = '200px'
    div.style.height = '200px'

    gameBoard.appendChild(div)

    div.addEventListener('click', ()=> {
        // console.log('clicked')
        count++
        countDisplay.innerText = count
        const idx = Math.floor(Math.random() * colors.length)
        div.style.backgroundColor = colors[idx]
    })
});

