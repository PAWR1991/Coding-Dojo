var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);

function numbersOnly (nArray) {
	var idx = 0;
	var temp = [];

	for (var i = 0; i < nArray.length; i++) {
		if (typeof nArray[i] != 'string') {
			temp[idx] = nArray[i];
			idx++;
		}
	}
	return temp;
}

console.log(newArray);