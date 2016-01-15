describe('Bubble Sort', function(){
	it('handles an empty array', function(){
		expect(bubbleSort([]) ).toEqual( [] );
	});

	it('sorts one single element', function(){
		expect(bubbleSort([-3])).toEqual([-3]);
	});

	it('sorts two element arrays', function(){
		expect(bubbleSort([23, 15])).toEqual([15, 23]);
	});

	it('sorts four element arrays', function(){
		expect(bubbleSort([4, 23, 8, 15])).toEqual([4, 8, 15, 23]);
		expect(bubbleSort.counter).toEqual(2);
	});



});