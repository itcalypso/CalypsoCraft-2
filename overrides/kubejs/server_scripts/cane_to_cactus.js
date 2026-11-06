ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:cactus', 1),
        ['ars_nouveau:manipulation_essence', 'minecraft:sugar_cane']
    )
    event.shapeless(
        Item.of('minecraft:sugar_cane', 1),
                    ['ars_nouveau:manipulation_essence', 'minecraft:cactus']
    )
}
)
