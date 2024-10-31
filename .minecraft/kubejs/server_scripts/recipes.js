onEvent('recipes',event =>{
    event.remove({output:'twilightforest:uncrafting_table'})//移除拆解台
    event.remove({output:'minecraft:beacon'})//移除信标
    event.remove({input:'alexsmobs:mimicream'})//移除复刻凝胶复刻道具
    event.remove({output:'enigmaticlegacy:the_cube'})//移除非欧立方

})

onEvent('recipes', event => {
    event.shaped('enigmaticlegacy:etherium_ingot',[
            'SSS',
            'SAS',
            'SSS'
    ],{
        S:'enigmaticlegacy:etherium_scraps',
        A:'minecraft:netherite_ingot'
    })
})

onEvent('recipes', event => {
    event.shaped('cataclysm:enderite_ingot',[
            ' S ',
            'SAS',
            ' S '
    ],{
        S:'enigmaticlegacy:etherium_scraps',
        A:'minecraft:netherite_ingot'
    })
})

onEvent('recipes', event => {
    event.shaped('cataclysm:zweiender',[
            'CAC',
            'CAC',
            ' B '
    ],{
        A:'cataclysm:enderite_ingot',
        B:'enigmaticlegacy:ender_rod',
        C:'enigmaticlegacy:evil_essence'
    })
})

onEvent('recipes', event => {
    event.shaped('sfgnsh:sfwifi',[
            'CAC',
            'BDB',
            'CAC'
    ],{
        A:'minecraft:redstone_block',
        D:'sfgnsh:javascript',
        C:'enigmaticlegacy:evil_ingot',
        B:'enigmaticlegacy:etherium_block'
    })
})



