describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
       expect(merge([4, 23], [8, 15])).toEqual([4, 8, 15, 23]);
    });

    it('is able to merge two sorted uneven length arrays', function(){
       expect(merge([4, 23, 24, 25, 30, 40], [8, 15])).toEqual([4, 8, 15, 23, 24, 25, 30, 40]);
    });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([11, 15, 8, 50])).toEqual([[11, 15], [8, 50]]);
  });
});

describe('mergeSort Array', function() {
  it('takes in an array and returns a sorted array', function() {
    expect(mergeSort([23, 4, 15, 8])).toEqual([4, 8, 15, 23]);
  });

   it('takes in an odd array and returns a sorted array', function() {
    expect(mergeSort([23, 4, 15, 8, 75])).toEqual([4, 8, 15, 23, 75]);
  });
});
