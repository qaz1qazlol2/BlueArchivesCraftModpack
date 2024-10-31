onEvent('entity.loot_tables', event => {
    const monsters = [
        "minecraft:blaze", //烈焰人
        "minecraft:cave_spider", //洞穴蜘蛛
        "minecraft:creeper", //苦力怕
        "minecraft:drowned", //溺尸
        "minecraft:enderman", //末影人
        "minecraft:endermite", //末影螨
        "minecraft:evoker", //唤魔者
        "minecraft:ghast", //恶魂
        "minecraft:giant", //巨人
        "minecraft:guardian", //守卫者
        "minecraft:hoglin", //疣猪兽
        "minecraft:husk", //尸壳
        "minecraft:illusioner", //幻术师
        "minecraft:magma_cube", //岩浆怪
        "minecraft:phantom", //幻翼
        "minecraft:piglin", //猪灵
        "minecraft:plglin_brute", //猪灵蛮兵
        "minecraft:ravager", //掠夺者
        "minecraft:shulker", //潜影贝
        "minecraft:silverfish", //蠹虫
        "minecraft:skeleton", //骷髅
        "minecraft:slime", //史莱姆
        "minecraft:spider", //蜘蛛
        "minecraft:stray", //流浪者
        "minecraft:vex", //恼鬼
        "minecraft:vindicator", //卫道士
        "minecraft:witch", //女巫
        "minecraft:wither_villager", //凋零骷髅
        "minecraft:zoglin", //僵尸疣猪兽
        "minecraft:zombie", //僵尸
        "minecraft:zombie_villager", //僵尸村民
        "minecraft:zombiefied_piglin", //僵尸猪灵
        "youkaishomecoming:fairy", //妖精
        "youkaishomecoming:youkai", //妖怪
        
    ];
    const goldCoinId = "kubejs:gold_coin";
    const diamondCoinId = "kubejs:diamond_coin";
    monsters.forEach(monstersId => {
        event.modifyEntity(monstersId, loot => {
            loot.addPool(Pool => {
                Pool.addEmpty(900);
                Pool.addItem(goldCoinId).weight(100).count([1, 2]);
                Pool.killedByPlayer();
            })
        })
    })
})