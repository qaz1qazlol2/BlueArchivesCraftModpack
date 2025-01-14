onEvent('item.registry', event => {
    event.create('system').displayName('初始物品选择')
    event.create('gold_coin').displayName('金币').tooltip('用于商店抽奖以及兑换').rarity('uncommon')
    event.create('netherite_coin').displayName('boss币').tooltip('boss掉落用于商店兑换').rarity('epic').glow(true)//发光
    event.create('monster_coin').displayName('彩蛋币').tooltip('用于兑换彩蛋武器').rarity('Epic').glow(true)//发光
    event.create('diamond_coin').displayName('钻石币').tooltip('用于商店兑换以及抽奖').rarity('Epic').glow(true)//发光
    event.create('luguan').displayName('你知我说').tooltip('到点了，该做正事了').rarity('common')
    event.create('kapian').displayName('普雷纳帕托斯的大人大片').tooltip('普雷纳帕特斯所持有的「大人的卡片」。由于卡片被烧到焦黑变形，处于随时都可能化为灰烬的状态，因此需要小心处理。使用这张卡片可以获取青辉石，但卡片会被破坏。').rarity('Epic')
    event.create('huicheng').displayName('化为粉末的大人的卡片').tooltip('普雷纳帕特斯所持有的已经化为粉末的「大人的卡片」。这张卡片本来的样子现在只存留在某人的记忆之中。').rarity('Epic')

})

onEvent('item.registry.tool_tiers', event => {
    event.add('emerald', tier => {
      tier.uses = 1561 
      tier.speed = 8.0 
      tier.attackDamageBonus = 3.0 
      tier.level = 3 
      tier.enchantmentValue = 14 
      tier.repairIngredient = 'minecraft:emerald'
    })
  })

onEvent('item.registry', event => {
    event.create('shuijing','sword').displayName('水晶埴轮').tooltip('小春的秘密武器').rarity('epic')
    event.create('minecraft:emerald_pickaxe','pickaxe').displayName('绿宝石稿').tier("emerald")
})