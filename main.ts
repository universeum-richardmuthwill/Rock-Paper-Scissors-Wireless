input.onButtonPressed(Button.A, function () {
    if (_continue == 1) {
        _continue = 0
        choice = randint(0, 2)
        radio.sendValue("choice", choice)
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # # # # #
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                # # . # #
                # # . # #
                `)
        }
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.pause(1000)
        if (choice == 0) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # # # # #
                . # # # .
                . . . . .
                `)
        } else if (choice == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                # # . # #
                # # . # #
                `)
        }
        basic.pause(1000)
        _continue = 1
    }
})
radio.onReceivedValue(function (name, value) {
    if (_continue == 1) {
        _continue = 0
        if (name == "choice") {
            opponentchoice = value
            choice = randint(0, 2)
            radio.sendValue("choice", choice)
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    # # # # #
                    . # # # .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # # # .
                    . # # # .
                    . # # # .
                    `)
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    # # . # #
                    # # . # #
                    `)
            }
            basic.showLeds(`
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                `)
            basic.pause(1000)
            if (choice == 0) {
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    # # # # #
                    . # # # .
                    . . . . .
                    `)
            } else if (choice == 1) {
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # # # .
                    . # # # .
                    . # # # .
                    `)
            } else {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    # # . # #
                    # # . # #
                    `)
            }
            basic.pause(1000)
            if (choice == 0 && opponentchoice == 1 || choice == 1 && opponentchoice == 2 || choice == 2 && opponentchoice == 0) {
                radio.sendValue("win", 2)
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
            } else if (choice == 1 && opponentchoice == 0 || choice == 2 && opponentchoice == 1 || choice == 0 && opponentchoice == 2) {
                score += 1
                radio.sendValue("win", 1)
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
            } else {
                radio.sendValue("win", 0)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
        } else if (name == "win") {
            if (value == 1) {
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
            } else if (value == 2) {
                basic.showLeds(`
                    . # . # .
                    . # . # .
                    . . . . .
                    # . . . #
                    . # # # .
                    `)
                score += 1
            } else {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
        }
        basic.pause(1000)
        basic.showNumber(score)
        _continue = 1
    }
})
let opponentchoice = 0
let choice = 0
let _continue = 0
let score = 0
radio.setGroup(50)
score = 0
_continue = 1
basic.showNumber(0)
