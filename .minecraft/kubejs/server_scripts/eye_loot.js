// 修复副手末影之眼逃课bug
onEvent('block.right_click', event => {
    const { player, block } = event
    if (player.offHandItem == 'minecraft:ender_eye' && block == 'minecraft:end_portal_frame') {
        player.statusMessage = [Text.white('不能使用原版的末影之眼哦，请跟随任务开启末地之门~')]
        event.cancel()
    }
})

// 别想着逃课了
onEvent('item.right_click', event => {
    const { player } =event
    if (player.offHandItem == 'minecraft:ender_eye') {
        player.statusMessage = [Text.white('请使用末地创世mod内的眼睛寻找末地传送门，请查看任务获取')]
    event.cancel()
    }
})

//难吃的禁果
onEvent('', event => {
    const { player } = event
    if (player.handitem == 'enigmaticlegacy:forbidden_fruit') {
        player.statusMessage = [Text.white('难吃')]
        event.cancel()
    }
})