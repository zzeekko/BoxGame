// const gameDisplay = document.getElementById('gameDisplay')
// const gameBoard = document.getElementById('gameBoard')
// let count = 0

// colors = ['red', 'blue', 'green', 'orange', 'yellow', 'purple', 'pink', 'brown', 'darkgoldenrod']

// boxes = [
//     {
//         id: 0,
//         color: 'red'
//     },
//     {
//         id: 1,
//         color: 'blue'
//     },
//     {
//         id: 2,
//         color: 'green'
//     },
//     {
//         id: 3,
//         color: 'orange'
//     },
//     {
//         id: 4,
//         color: 'yellow'
//     },
//     {
//         id: 5,
//         color: 'purple'
//     },
//     {
//         id: 6,
//         color: 'pink'
//     },    {
//         id: 7,
//         color: 'brown'
//     },
//     {
//         id: 8,
//         color: 'darkgoldenrod'
//     }
// ]

// boxes.forEach(element => {
//     const div = document.createElement('div')
//     div.classList.add('box')
//     div.setAttribute('id', `box-${element.id}`)
//     div.style.backgroundColor = element.color
//     div.style.width = '200px'
//     div.style.height = '200px'

//     gameBoard.appendChild(div)

//     div.addEventListener('click', ()=> {
//         // console.log('clicked')
//         count++
//         countDisplay.innerText = count
//         const idx = Math.floor(Math.random() * colors.length)
//         div.style.backgroundColor = colors[idx]
//     })
// });
// end of asignment 
/**
 * Refactoring
 * 
 * using class based 
 */

class Game {
    constructor() {
        this.count = 0
        this.gameBoard = document.getElementById('gameBoard')
        this.countDisplay = document.getElementById('countDisplay')
        this.bestScore = document.getElementById('bestScore')
        this.freezeColorDisplay = document.getElementById('freezeColorDisplay')
        this.freezeColor = ''
        this.hasWon = false
        this.gamePlay = false
        this.message = document.getElementById('message')
        this.colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'darkgoldenrod']
        this.matches = 0
        this.matchDisplay = document.getElementById('matchDisplay')
            }
    

    init() {
        if (!this.gamePlay) return
        this.getFreezeColor()
        this.makeBoxes()
        this.getMatches()
    }

    makeBoxes() {
        this.boxes.forEach(el => {
        const box = document.createElement('div')
        box.classList.add('box')
        box.setAttribute('id', `box-${el.id}`)
        box.dataset.id = el.id
        box.style.width = '200px'
        box.style.height = '200px'
        box.style.backgroundColor = el.color

        // console.log(`Box ${el.id} made`)
        this.addToGameboard(this.gameBoard, box)
        this.showMatches()

        this.changeColor(box, this.boxes)
        })
    }
    
    getMatches() {
        for (let i = 0; i < this.boxes.length; i++) {
            if (this.freezeColor == this.boxes[i].color) {
                this.matches++
                this.showMatches()
            }
        }
    }

    showMatches() {
        this.matchDisplay.innerText = this.matches
    }

    addToGameboard(parent, child) {
        return parent.appendChild(child)
    }

    getFreezeColor() {
        this.freezeColor = this.colors[Math.floor(Math.random() * this.colors.length)]

        this.freezeColorDisplay.innerText = this.freezeColor
    }

    changeColor(element, arr) {
        element.addEventListener('click', ()=> {
            // element.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)]
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id == element.dataset.id) {

                    if (this.freezeColor != arr[i].color) {
                        this.count++
                        this.countDisplay.innerText = this.count
                        // console.log(element.dataset.id)
                        arr[i].color = this.colors[Math.floor(Math.random() * this.colors.length)]
                        element.style.backgroundColor = arr[i].color

                        if (arr[i].color == this.freezeColor) {
                            this.matches++
                            this.showMatches()
                        }
                    } 
                }
            }
            this.checkWin()
        })
    }

    checkWin() {
        if (this.matches == 9 && this.gamePlay == true) {
            this.hasWon = true
            this.message.innerText = `You won in ${this.count} clicks!`
            this.gamePlay = false
            this.setScores()
        }
    }

    resetGame() {
        this.resetBoxes()
        this.matches = 0
        this.count = 0
        this.countDisplay.innerText = this.count
        this.gameBoard.innerHTML = ''
        this.message.innerText = ''
        this.gamePlay = !this.gamePlay
        this.hasWon = false
        console.log(this.gamePlay)
        this.init()
    }

    setScores() {

        let bestScore

        if (this.count < this.scores.currScore && this.count > 0) {
            bestScore = this.count
        } else {
            bestScore = this.scores.currScore
        }

        this.scores = {
            prevScore: this.scores.currScore,
            currScore: this.count,
            bestScore: bestScore
        }

        this.bestScore.innerText = this.scores.bestScore
    }

    resetBoxes() {
        this.boxes = [
            {
                        id: 0,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    },
                    {
                        id: 1,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    },
                    {
                        id: 2,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    },
                    {
                        id: 3,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    },
                    {
                        id: 4,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    },
                    {
                        id: 5,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    },
                    {
                        id: 6,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    },    {
                        id: 7,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    },
                    {
                        id: 8,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    }
                ]
    }
}

// const action = new Game()

// const startBtn = document.getElementById('startBtn')

// startBtn.addEventListener('click', ()=> {
//     action.resetGame()
// })
// ^v same thing
// startBtn.addEventListener('click', ()=> action.resetGame())

document.getElementById('startBtn').addEventListener('click', ()=> new Game().resetGame())
// this is a condensed version of the above code