function nextTask () {
    score += 1
    timer += 5
    task = randint(1, 4)
    if (task == 1) {
        basic.showIcon(IconNames.House)
    } else if (task == 2) {
        basic.showIcon(IconNames.Ghost)
    } else if (task == 3) {
        basic.showIcon(IconNames.Diamond)
    } else if (task == 4) {
        basic.showIcon(IconNames.Square)
    }
}
input.onGesture(Gesture.LogoUp, function () {
    if (task == 1) {
        nextTask()
    }
})
input.onGesture(Gesture.Shake, function () {
    if (task == 3) {
        nextTask()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (task == 4) {
        nextTask()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Go!")
    started = false
    nextTask()
})
let score = 0
let started = false
let task = 0
let timer = 30
task = 0
started = true
basic.showIcon(IconNames.House)
basic.clearScreen()
basic.showString("Raise")
basic.showIcon(IconNames.Ghost)
basic.clearScreen()
basic.showString("Shout")
basic.showIcon(IconNames.Diamond)
basic.clearScreen()
basic.showString("Shake")
basic.showIcon(IconNames.Square)
basic.clearScreen()
basic.showString("Bop it!")
basic.showString("Bop the logo!")
basic.forever(function () {
    if (started == true) {
        if (task == 2 && input.soundLevel() > 100) {
            nextTask()
        }
        if (timer < 0) {
            basic.showString("Score: " + score)
        } else {
            timer += -0.1
        }
    }
})
