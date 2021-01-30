scene.setBackgroundColor(2)
let naruto = sprites.create(img`
    . . . . 5 . 5 . 5 . 5 . . . . . 
    . . . d 4 4 d d 4 4 d 5 . . . . 
    . . 5 d 4 f d d f 4 d . . . . . 
    . . . d d d d d d d d 5 . . . . 
    . . 5 f f f f f f f f . . . . . 
    . d d 4 4 4 f f 4 4 4 d d . . . 
    9 9 d 4 4 4 f f 4 4 4 d 9 9 . . 
    9 9 d 4 4 4 f f 4 4 4 d 9 9 . . 
    . d d 4 4 4 f f 4 4 4 d d . . . 
    . . 2 2 4 4 f f 4 4 2 2 . . . . 
    . . 2 2 4 4 f f 4 4 2 2 . . . . 
    . . 2 2 4 4 2 2 4 4 2 2 . . . . 
    . . . . 4 4 . . 4 4 . . . . . . 
    . . . . 4 4 . . 4 4 . . . . . . 
    . . . . 4 4 . . 4 4 . . . . . . 
    . . . . f f . . f f . . . . . . 
    `, SpriteKind.Player)
let luffy = sprites.create(img`
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d 1 f d d f 1 d . . . . 
    . . . . d d d d d d d d . . . . 
    . . 2 2 2 2 2 5 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 5 2 2 2 2 2 2 . . 
    . . d d 2 2 2 2 2 2 2 2 d d . . 
    . . d d 2 2 2 5 2 2 2 2 d d . . 
    . . d d 2 2 2 2 2 2 2 2 d d . . 
    . . d d . d d . . d d . d d . . 
    . . . . . d d . . d d . . . . . 
    . . . . . d d . . d d . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(naruto)
naruto.setStayInScreen(true)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
info.changeScoreBy(1)
luffy.setPosition(randint(0, 160), randint(0, 120))
info.startCountdown(10)
})
//