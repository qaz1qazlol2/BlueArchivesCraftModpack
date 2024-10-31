// 禁止使用拆解台

onEvent('block.right_click' , event =>{
   if (event.block.id == "twilightforest:uncrafting_table") {
       event.cancel();
       event.player.statusMessage = '无法使用~'
   }
})