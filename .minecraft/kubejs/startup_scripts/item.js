onEvent('item.registry', event => {
    event.create('system').displayName('初始物品选择')
    event.create('gold_coin').displayName('金币').tooltip('用于商店抽奖以及兑换').rarity('uncommon')
    event.create('netherite_coin').displayName('boss币').tooltip('boss掉落用于商店兑换').rarity('epic').glow(true)//发光
    event.create('monster_coin').displayName('彩蛋币').tooltip('用于兑换彩蛋武器').rarity('Epic').glow(true)//发光
    event.create('diamond_coin').displayName('钻石币').tooltip('用于商店兑换以及抽奖').rarity('Epic').glow(true)//发光
    event.create('luguan').displayName('你知我说').tooltip('到点了，该做正事了').rarity('common')

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