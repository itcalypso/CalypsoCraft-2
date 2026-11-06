// bulk replacing inputs

ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'cgs:steel_sheet' }, // Arg 1: the filter
        'cgs:steel_sheet',            // Arg 2: the item to replace
        'create:sturdy_sheet'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
        { input: 'cgs:steel_ingot' }, // Arg 1: the filter
        'cgs:steel_ingot',            // Arg 2: the item to replace
        'minecraft:iron_ingot'         // Arg 3: the item to replace it with
    )
    event.replaceInput(
        { input: 'cgs:lead_nugget' }, // Arg 1: the filter
        'cgs:lead_nugget',            // Arg 2: the item to replace
        'minecraft:gold_nugget'         // Arg 3: the item to replace it with
    )
})
// hiding bloat from recipe viewers

ServerEvents.tags('item', event => {
    event.add(
    'c:hidden_from_recipe_viewers',
    [
    '@ntgl',

    // lead

    'cgs:lead_ore',
    'cgs:deepslate_lead_ore',
    'cgs:raw_lead',
    'create:crushed_raw_lead',
    'cgs:lead_nugget',
    'cgs:lead_block',
    'cgs:raw_lead_block',
    'cgs:lead_ingot',

    // sulfur

    'cgs:sulfur_ore',

    // steel

    'cgs:steel_ingot',
    'cgs:steel_nugget',
    'cgs:steel_sheet',
    'cgs:steel_block'

    ]
    )
})

// removing bloat from recipe inputs

ServerEvents.recipes(event => {
    event.remove({ input:
    [
    '@ntgl',

    // lead

    'cgs:lead_ore',
    'cgs:deepslate_lead_ore',
    'cgs:raw_lead',
    'create:crushed_raw_lead',
    'cgs:lead_nugget',
    'cgs:lead_block',
    'cgs:lead_ingot',

    // steel

    'cgs:steel_ingot',
    'cgs:steel_nugget',
    'cgs:steel_sheet',
    'cgs:steel_block'

        ]
    })
})

// adding new recipes without bloat items

ServerEvents.recipes(event => {
    event.recipes.create.mixing('cgs:sulfur', [Fluid.of('createdieselgenerators:crude_oil', 250)]).heated()
    event.recipes.create.sequenced_assembly(
    // Outputs:
        [
            CreateItem.of('cgs:round_gatling')
        ],
    // Input:
        'cgs:round_gatling_blank',
    // Sequence:
        [
            event.recipes.create.deploying('cgs:round_gatling_blank', ['cgs:round_gatling_blank', 'minecraft:gold_nugget',]),
            event.recipes.create.deploying('cgs:round_gatling_blank', ['cgs:round_gatling_blank', 'create:copper_nugget']),
        ]
    )
    .transitionalItem('cgs:round_gatling_blank')
    .loops(1)
    event.recipes.create.sequenced_assembly(
    // Outputs:
        [
            CreateItem.of('cgs:round_gatling_piercing')
        ],
    // Input:
        'cgs:round_gatling_blank',
    // Sequence:
        [
            event.recipes.create.deploying('cgs:round_gatling_blank', ['cgs:round_gatling_blank', 'minecraft:iron_nugget',]),
            event.recipes.create.deploying('cgs:round_gatling_blank', ['cgs:round_gatling_blank', 'create:copper_nugget']),
        ]
    )
    .transitionalItem('cgs:round_gatling_blank')
    .loops(1)
    event.recipes.create.sequenced_assembly(
    // Outputs:
        [
            CreateItem.of('cgs:round_revolver')
        ],
    // Input:
        'cgs:round_revolver_blank',
    // Sequence:
        [
            event.recipes.create.deploying('cgs:round_revolver_blank', ['cgs:round_revolver_blank', 'minecraft:gold_nugget',]),
        ]
    )
    .transitionalItem('cgs:round_revolver_blank')
    .loops(1)
    event.recipes.create.sequenced_assembly(
    // Outputs:
        [
            CreateItem.of('cgs:round_revolver_piercing')
        ],
    // Input:
        'cgs:round_revolver_blank',
    // Sequence:
        [
            event.recipes.create.deploying('cgs:round_revolver_blank', ['cgs:round_revolver_blank', 'minecraft:iron_nugget',]),
            event.recipes.create.deploying('cgs:round_gatling_blank', ['cgs:round_gatling_blank', 'minecraft:gold_nugget']),
        ]
    )
    .transitionalItem('cgs:round_revolver_blank')
    .loops(1)
event.recipes.create.cutting('9x cgs:nail', 'create:andesite_alloy')
event.recipes.create.cutting('3x cgs:nail_steel', 'minecraft:iron_nugget')

// removing the last few stray recipes

event.remove({ id: 'cgs:sequenced_assembly/round_gatling' })
event.remove({ id: 'cgs:sequenced_assembly/round_gatling_piercing' })
event.remove({ id: 'cgs:sequenced_assembly/revolver_round' })
event.remove({ id: 'cgs:sequenced_assembly/revolver_round_piercing' })
event.remove({ id: 'cgs:nail' })
event.remove({ id: 'cgs:sequenced_assembly/nail' })
event.remove({ id: 'cgs:sequenced_assembly/steel_nail' })
event.remove({ id: 'cgs:mixing/steel_ingot' })
event.remove({ id: 'cgs:steel_nugget' })
event.remove({ id: 'create:crushing/magma_block'})

// making charcoal dust less ass

event.shapeless(
    Item.of('minecraft:black_dye', 1),
        ['cgs:charcoal_dust']
)
})
