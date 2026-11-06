ServerEvents.recipes(event => {
    event.shapeless(Item.of('cc_customs:gunkblock', 1), '9x dungeonsdelight:gunk')
    event.shapeless(Item.of('dungeonsdelight:gunk', 9), 'cc_customs:gunkblock')
})
