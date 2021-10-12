input.onButtonPressed(Button.A, function () {
    ship.move(-1)
})
input.onButtonPressed(Button.B, function () {
    ship.move(1)
})
let ship: game.LedSprite = null
let sprite = game.createSprite(2, 0)
sprite.turn(Direction.Right, 90)
ship = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(500)
    sprite.move(1)
    if (ship.isTouching(sprite)) {
        game.gameOver()
    }
    if (sprite.get(LedSpriteProperty.Y) == 4) {
        game.setScore(game.score() + 1)
        basic.pause(500)
        sprite.set(LedSpriteProperty.X, randint(0, 4))
        sprite.set(LedSpriteProperty.Y, 0)
    }
})
