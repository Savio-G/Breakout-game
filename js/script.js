const grid = document.querySelector('.grid')
let containerWidth = 560;
let containerHeight = 300
let blockHeight = 20;
let blockWidth = 100;
let ballDiam = 20
let xDirection = 2;
let yDirection = 2;
let timerID;


// User and ball Position
const currentPosition = [230, 10]
const ballPosition = [270, 40]


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
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]

function createBlocks() {
    for (i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'

        grid.appendChild(block)

    }

}
createBlocks()

// User and ball position function
function pointUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

function pointBall() {
    ballEl.style.left = ballPosition[0] + 'px'
    ballEl.style.bottom = ballPosition[1] + 'px'
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
                currentPosition[0] -= 10
                break
            }
        case 'ArrowRight':
            if (currentPosition[0] < containerWidth - blockWidth) {
                pointUser()
                currentPosition[0] += 10
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
    if (ballPosition[0] >= (containerWidth - ballDiam) || ballPosition[0] <= 0) {
        xDirection *= -2;
    }
    if (ballPosition[1] >= (containerHeight - ballDiam) || ballPosition[1] <= 0) {
        yDirection *= -2;
    } {
        changePosition()
    }
}
function changePosition() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }
}