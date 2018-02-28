function RandomChance (quarters) {
	var winning = 0;
	var randomNum;

	for (var i = 0; i < quarters; i++) {
		randomNum = Math.floor(Math.random()*100)+1;
		if (randomNum == 67){
			winning += Math.floor(Math.random()*50)+50;
		}
	}

	return winning;
}

RandomChance(1);