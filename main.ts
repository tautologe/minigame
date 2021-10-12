input.onButtonPressed(Button.A, function () {
    ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    interval = 200
})
input.onButtonPressed(Button.B, function () {
    ship.move(1)
})
let interval = 0
let ship: game.LedSprite = null
let sprite = game.createSprite(2, 0)
sprite.turn(Direction.Right, 90)
ship = game.createSprite(2, 4)
interval = 500
basic.forever(function () {
    basic.pause(interval)
    sprite.move(1)
    if (ship.isTouching(sprite)) {
        game.gameOver()
    }
    if (sprite.get(LedSpriteProperty.Y) == 4) {
        game.setScore(game.score() + 1)
        basic.setLedColor(0x002200)
        basic.pause(interval)
        basic.turnRgbLedOff()
        sprite.set(LedSpriteProperty.X, randint(0, 4))
        sprite.set(LedSpriteProperty.Y, 0)
    }
})
