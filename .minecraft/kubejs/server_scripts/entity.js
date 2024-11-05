onEvent("entity.spawned", event => {
    const { entity } = event;
    if (entity.type == 'minecraft:ender_dragon') {
        entity.setCustomName(Text.of("\u00A75Extreme\u00A7f——\u00A7b末地领主\u00A7f——\u00A7e末影龙"))
    }
})

onEvent("entity.spawned",event => {
    const { entity } = event;
    if (entity.type == 'cataclysm:ignis') {
        entity.setCustomName(Text.of("\u00A7cTorment\u00A7f——\u00A7b不灭之火的化身\u00A7f——\u00A7e焰魔"))
    }
})

onEvent("entity.spawned",event => {
    const { entity } =event;
    if (entity.type == 'minecraft:wither') {
        entity.setCustomName(Text.of("\u00A79Hardcore\u00A7f——\u00A7b躁动的灵魂\u00A7f——\u00A7e凋零"))
    }
}) 

onEvent("entity.spawned",event => {
    const { entity } =event;
    if (entity.type == 'cataclysm:netherite_monstrosity') {
        entity.setCustomName(Text.of("\u00A76Insane\u00A7f——\u00A7b骇人恶械\u00A7f——\u00A7e下界合金巨兽"))
    }
})

onEvent("entity.spawned",event => {
    const { entity } =event;
    if (entity.type == 'twilightforest:naga') {
        entity.setCustomName(Text.of("\u00A7aVeryhard\u00A7f——\u00A7b庭院守护者\u00A7f——\u00A7e娜迦"))
    }
})

onEvent("entity.spawned",event => {
    const { entity } =event;
    if (entity.type == 'twilightforest:lich') {
        entity.setCustomName(Text.of("\u00A7aVeryhard\u00A7f——\u00A7b不死的学者\u00A7f——\u00A7e巫妖王"))
    }
})

onEvent("entity.spawned",event => {
    const { entity } =event;
    if (entity.type == 'twilightforest:hydra') {
        entity.setCustomName(Text.of("\u00A75Extreme\u00A7f——\u00A7b火焰沼泽的霸主\u00A7f——\u00A7e九头蛇"))
    }
})

onEvent("entity.spawned",event => {
    const { entity } =event;
    if (entity.type == 'twilightforest:minoshroom') {
        entity.setCustomName(Text.of("\u00A79Hardcore\u00A7f——\u00A7b迷宫的守卫\u00A7f——\u00A7e米诺陶"))
    }
})

onEvent("entity.spawned",event => {
    const { entity } =event;
    if (entity.type == 'twilightforest:ur_ghast') {
        entity.setCustomName(Text.of("\u00A79Hardcore\u00A7f——\u00A7b暮色高塔守护者\u00A7f——\u00A7e暮色恶魂"))
    }
})

onEvent("entity.spawned",event => {
    const { entity } =event;
    if (entity.type == 'twilightforest:snow_queen') {
        entity.setCustomName(Text.of("\u00A79Hardcore\u00A7f——\u00A7b极光宫殿的女王\u00A7f——\u00A7e冰雪女王"))
    }
})

onEvent("entity.spawned",event => {
    const { entity } =event;
    if (entity.type == 'cataclysm:ender_golem') {
        entity.setCustomName(Text.of("\u00A79Hardcore\u00A7f——\u00A7b被操纵的傀儡\u00A7f——\u00A7e末影傀儡"))
    }
})

onEvent("entity.spawned",event => {
    const { entity } =event;
    if (entity.type == 'cataclysm:ender_guardian') {
        entity.setCustomName(Text.of("\u00A76Insane\u00A7f——\u00A7b废弃堡垒的守卫\u00A7f——\u00A7e末影守卫"))
    }
})