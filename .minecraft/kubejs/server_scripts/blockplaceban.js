//禁止放置信标


onEvent("block.place",event=>{
    if (event.block.id == "minecraft:beacon") {
        event.cancel()
    }
})