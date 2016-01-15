var merge = function(array, array2) {
   var arrOut = [];
   if(array[0]>array2[0]){arrOut.push(array2.shift());}
   else{arrOut.push(array.shift());}
   if(!array.length || !array2.length) {
       return arrOut.concat(array).concat(array2);
   }
   //use for loop instead

   arrOut = arrOut.concat(merge(array, array2));
   return arrOut;

};

var split = function(wholeArray){
	if(wholeArray.length===1) {return wholeArray;}

	var sliceSpot = Math.ceil(wholeArray.length/2);

	return [wholeArray.slice(0,sliceSpot) , wholeArray.slice(sliceSpot)];

};

var mergeSort = function(arrayToSort){
	if (arrayToSort.length===1) {return arrayToSort;}
	// var splitArray = split(arrayToSort);
	
	// var firstMergeSort = mergeSort(splitArray[0]);
	// var secondMergeSort = mergeSort(splitArray[1]);

	// return (merge(firstMergeSort, secondMergeSort));


   return merge(mergeSort(split(arrayToSort)[0]),mergeSort(split(arrayToSort)[1]));

};




