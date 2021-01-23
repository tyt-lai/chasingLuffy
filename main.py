scene.set_background_color(2)
naruto = sprites.create(img("""
        . . . . 5 . 5 . 5 . 5 . . . . . 
            . . . d d d d d d d d 5 . . . . 
            . . 5 d 9 f d d f 9 d . . . . . 
            . . . d d d d d d d d 5 . . . . 
            . . 5 f f f f f f f f . . . . . 
            . d d 4 4 4 f f 4 4 4 d d . . . 
            . . d 4 4 4 f f 4 4 4 d . . . . 
            . . d 4 4 4 f f 4 4 4 d . . . . 
            . d d 4 4 4 f f 4 4 4 d d . . . 
            . . . . 4 4 f f 4 4 . . . . . . 
            . . . . 4 4 f f 4 4 . . . . . . 
            . . . . 4 4 . . 4 4 . . . . . . 
            . . . . 4 4 . . 4 4 . . . . . . 
            . . . . 4 4 . . 4 4 . . . . . . 
            . . . . 4 4 . . 4 4 . . . . . . 
            . . . . f f . . f f . . . . . .
    """),
    SpriteKind.player)
luffy = sprites.create(img("""
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
    """),
    SpriteKind.enemy)