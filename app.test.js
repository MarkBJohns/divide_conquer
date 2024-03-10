describe('countZeroes()', function(){
  it("counts the number of 0s in a sorted array", function(){
    expect(countZeros([1,1,1,1,0,0])).toBe(2);
    expect(countZeros([1,0,0,0,0,])).toBe(4);
    expect(countZeros([0,0,0])).toBe(3);
    expect(countZeros([1,1,1,1])).toBe(0);
  })
})

describe('sortedFrequency()', function(){
  it("returns the frequency of a value in a sorted array", function(){
    expect(sortedFrequency([1,1,2,2,2,2,3], 2)).toBe(4);
    expect(sortedFrequency([1,1,2,2,2,2,3,], 3)).toBe(1);
    expect(sortedFrequency([1,1,2,2,2,2,3], 1)).toBe(2);
    expect(sortedFrequency([1,1,2,2,2,2,3], 4)).toBe(-1);
  })
})

describe('findRotatedIndex()', function(){
  it("finds where the index of a value in an unsorted array would be in a sorted array", function(){
    expect(findRotatedIndex([3,4,1,2], 4)).toBe(1);
    expect(findRotatedIndex([6,7,8,9,1,2,3,4], 8)).toBe(2);
    expect(findRotatedIndex([6,7,8,9,1,2,3,4], 3)).toBe(6);
    expect(findRotatedIndex([37,44,66,102,10,22], 14)).toBe(-1);
    expect(findRotatedIndex([6,7,8,9,1,2,3,4], 12)).toBe(-1);
  })
})

describe('findRotationCount()', function(){
  it("finds how many times a previously sorted array was rotated", function(){
    expect(findRotationCount([15,18,2,3,6,12])).toBe(2);
    expect(findRotationCount([7,9,11,12,5])).toBe(4);
    expect(findRotationCount([7,9,11,12,15])).toBe(0);
  })
})

describe('findFloor()', function(){
  it("finds the closest (rounded down) value to a specified value in an array", function(){
    expect(findFloor([1,2,8,10,12,19], 5)).toBe(2);
    expect(findFloor([1,2,8,10,12,19], 20)).toBe(19);
    expect(findFloor([1,2,8,10,12,19], 0)).toBe(-1);
  })
})