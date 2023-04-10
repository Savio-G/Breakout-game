const grid = document.querySelector('.grid')
let containerWidth = 179;
let blockHeight = 5;
let blockWidth = 20;
let ballDiam = 2
let xDirection = 0.5;
let yDirection = 0.5;
let timerID;


// User and ball Position
const currentPosition = [90, 2]
const ballPosition = [95, 4]


// Template to position the blocks
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
const blocks = [
    new Block(2, 90),
    new Block(23, 90),
    new Block(44, 90),
    new Block(65, 90),
    new Block(86, 90),
    new Block(107, 90),
    new Block(128, 90),
    new Block(148, 90),
    new Block(169, 90),
    new Block(2, 84),
    new Block(23, 84),
    new Block(44, 84),
    new Block(65, 84),
    new Block(86, 84),
    new Block(107, 84),
    new Block(128, 84),
    new Block(148, 84),
    new Block(169, 84),
    new Block(2, 78),
    new Block(23, 78),
    new Block(44, 78),
    new Block(65, 78),
    new Block(86, 78),
    new Block(107, 78),
    new Block(128, 78),
    new Block(148, 78),
    new Block(169, 78),
    new Block(2, 72),
    new Block(23, 72),
    new Block(44, 72),
    new Block(65, 72),
    new Block(86, 72),
    new Block(107, 72),
    new Block(128, 72),
    new Block(148, 72),
    new Block(169, 72),
    new Block(2, 66),
    new Block(23, 66),
    new Block(44, 66),
    new Block(65, 66),
    new Block(86, 66),
    new Block(107, 66),
    new Block(128, 66),
    new Block(148, 66),
    new Block(169, 66),
]

function createBlocks() {
    for (i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'vh'
        block.style.bottom = blocks[i].bottomLeft[1] + 'vh'

        grid.appendChild(block)

    }

}
createBlocks()

// User and ball position function
function pointUser() {
    user.style.left = currentPosition[0] + 'vh'
    user.style.bottom = currentPosition[1] + 'vh'
}

function pointBall() {
    ballEl.style.left = ballPosition[0] + 'vh'
    ballEl.style.bottom = ballPosition[1] + 'vh'
}
// position user
const user = document.createElement('div')
user.classList.add('user')
pointUser()
grid.appendChild(user)

// Move user
function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                pointUser()
                currentPosition[0] -= 1
                break
            }
        case 'ArrowRight':
            if (currentPosition[0] < containerWidth) {
                pointUser()
                currentPosition[0] += 1
                break
            }
    }
}

document.addEventListener('keydown', moveUser)

// Create and add the ball
const ballEl = document.createElement('div')
ballEl.classList.add('ball')
pointBall()

grid.appendChild(ballEl)

// Moving the ball
function moveBall() {
    ballPosition[0] += xDirection
    ballPosition[1] += yDirection
    pointBall()
}

timerID = setInterval(moveBall, 30)
function checkCollision() {
    if (ballPosition[0] > containerWidth - ballDiam) {
        changePosition()
    }
}
function changePosition() {
    if (xDirection === 0.5 && yDirection === 0.5) {
        xDirection = -0.5

    }
}