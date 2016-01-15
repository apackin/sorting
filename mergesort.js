// var merge = function(array, array2) {
//    var arrOut = [];
//    if(array[0]>array2[0]){arrOut.push(array2.shift());}
//    else{arrOut.push(array.shift());}
//    if(!array.length || !array2.length) {
//        return arrOut.concat(array).concat(array2);
//    }
//    //use for loop instead

//    arrOut = arrOut.concat(merge(array, array2));
//    return arrOut;
// };


var merge = function(left, right) {
   var arrOut = [];
   var leftIdx = 0;
   var rightIdx = 0;

   while(left.length !== leftIdx && right.length !== rightIdx) {
      if(left[leftIdx]<right[rightIdx]) {
         arrOut.push(left[leftIdx]);
         leftIdx++;
      } else {
         arrOut.push(right[rightIdx]);
         rightIdx++;
      }
   }

   return arrOut.concat(left.splice(leftIdx)).concat(right.splice(rightIdx));
};


var split = function(wholeArray){
	if(wholeArray.length===1) {return wholeArray;}

	var sliceSpot = wholeArray.length/2;

   //don't need Math.ceil or Math.floor b/c the slice command already Math.floors inputs.

	return [wholeArray.slice(0,sliceSpot) , wholeArray.slice(sliceSpot)];

};

var mergeSort = function(arrayToSort){
	if (arrayToSort.length===1) {return arrayToSort;}
   return merge(mergeSort(split(arrayToSort)[0]),mergeSort(split(arrayToSort)[1]));

	// var splitArray = split(arrayToSort);
	
	// var firstMergeSort = mergeSort(splitArray[0]);
	// var secondMergeSort = mergeSort(splitArray[1]);

	// return (merge(firstMergeSort, secondMergeSort));

};
