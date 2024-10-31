function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

//禁止附魔种类

onEvent("player.tick",event=>{
	const banned_enchants = [
        "flowingagony:exotic_healer",//异常治疗
        "flowingagony:prototype_chaotic",//混乱原体
        "flowingagony:survival_ruse",//求生捷径
        "flowingagony:survival_shortcut",//求生诡计
        "flowingagony:necessary_evil"//必要之恶
    ]
	const inventory = event.player.inventory
		for (const key in range(0,36,1)) {
			if (Object.keys(inventory.get(key).enchantments).length != 0) {
				for (let key2 in inventory.get(key).enchantments) {
						if (banned_enchants.includes(key2)) {
							event.player.statusMessage = "该物品含有非法附魔"+key2+"，已自动删除"
							event.player.inventory.clear(inventory.get(key))
						}
					}
				}
			}
		}
)
