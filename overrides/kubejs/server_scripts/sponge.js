/*
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing".
 */

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    // You can replace `event` with any name you like, as
    // long as you change it inside the callback too!

    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.

    console.log('Hello! The recipe event has fired!')

    event.recipes.create.mixing(
    Item.of('minecraft:sponge'), // Output
    [
        'minecraft:dried_kelp_block',
        'minecraft:sand',
        'minecraft:yellow_dye'
    ]
    )
    event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:magebloom_fiber', // input
        'minecraft:sponge',            // output
        250,                           // source cost
        ['minecraft:sand', 'minecraft:yellow_dye']
    )
}
)
