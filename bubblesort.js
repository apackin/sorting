var bubbleSort = function(array){
	bubbleSort.counter = 0;
	for (var j = array.length - 1; j >= 0; j--) {
		var switched = false;
		for (var i = 0; i <= j; i++) {

			if(array[i]>array[i+1]){
				bubbleSort.counter++;
				switched = true;
				var store = array[i];
				array[i] = array[i+1];
				array[i+1] = store;
			}
		}
		if(!switched) {return array;}
	}

	return array;
};
