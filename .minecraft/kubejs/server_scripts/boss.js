onEvent('entity.loot_tables', event => {
    const monsters = [
        { id : "minecraft:elder_guardian", netherite: [1, 3] }, // 远古守卫者
        { id : "minecraft:ender_dragon", netherite: [5, 15] }, // 末影龙
        { id : "minecraft:wither", netherite: [1, 3] }, //凋零
        { id : "cataclysm:ender_guardian", netherite: [2, 5] }, //末影守卫
        { id : "cataclysm:netherite_monstrosity", netherite: [2, 5] }, //下界合金巨兽
        { id : "cataclysm:ignis", netherite: [3, 5] }, //焰魔
        { id : "twilightforest:minoshroom", netherite: [0, 1] }, // 米诺陶
        { id : "twilightforest:hydra", netherite: [3, 5] }, // 九头蛇
        { id : "twilightforest:knight_phantom", netherite: [1, 2] }, // 幻影骑士
        { id : "twilightforest:naga", netherite: [0, 1] }, // 娜迦
        { id : "twilightforest:snow_queen", netherite: [3, 6] }, // 冰雪女王
        { id : "twilightforest:ur_ghast", netherite: [2, 5] }, // 暮色恶魂
        { id : "twilightforest:lich", netherite: [1, 2] }, // 巫妖
    ];

    const diamondid = "kubejs:diamond_coin";
    const netheriteid = "kubejs:netherite_coin";

    monsters.forEach(monsters => {
        event.modifyEntity(monsters.id, loot => {
            loot.addPool(pool => {
                pool.addItem(diamondid).weight(100).count([5, 10]); // 钻石币掉落池
                pool.killedByPlayer();

            });
            loot.addPool(pool => {
                pool.addItem(netheriteid).weight(100).count(monsters.netherite);// boss币掉落
                pool.killedByPlayer();
            });
        });
    });
 });