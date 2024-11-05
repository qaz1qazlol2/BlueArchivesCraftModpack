onEvent("block.break",event=>{

    const banned_blocks = [
        "minecraft:beacon"//信标
    ]


    if (banned_blocks.includes(event.block.id)) {
        event.cancel()
    }
})