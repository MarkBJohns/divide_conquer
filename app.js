console.debug("countZeroes")

// --------------------------------------------------------------

function countZeros(arr){
  if(arr[0]===0){
    return arr.length;
  }

  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while(leftIdx<=rightIdx){
    let middle = Math.floor((leftIdx + rightIdx)/2);
    if(arr[middle]===0 && arr[middle-1]===1){
      return arr.length - middle;
    }else if(arr[middle]===1){
      leftIdx = middle+1;
    }else{
      rightIdx = middle-1;
    }
  }
  return 0
}

// --------------------------------------------------------------

//  1. Declare the left and right of the array as variables so they can be moved later

//  2. Check to see that the new middle is the first 0 by seeing if it:

//      a. Is a 0

//      b. Has a 1 behind it

//      c. Has a 0 after it

//  3. If the middle is not the first 0:

//      a. If 1, remove first half of of array and loop again

//      b. If 0, remove the last half of array and try again

//  4. The first 0 will be at an index value you can subtract from the total array length to determine how many
//      0s are in the array.

// ================================================================================================================

console.debug("sortedFrequency")

// --------------------------------------------------------------

function findFirstIdx(arr, val){
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while(leftIdx <= rightIdx){
    let middleIdx = Math.floor((leftIdx+rightIdx)/2);
    if((middleIdx===0 || val > arr[middleIdx-1])&&arr[middleIdx]===val){
      return middleIdx;
    }else if(val > arr[middleIdx]){
      leftIdx = middleIdx+1;
    }else{
      rightIdx = middleIdx-1;
    }
  }
  return -1
}

function findLastIdx(arr, val){
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while(leftIdx<=rightIdx){
    let middleIdx = Math.floor((leftIdx+rightIdx)/2);
    if((middleIdx===arr.length-1 || val < arr[middleIdx+1])&&arr[middleIdx]===val){
      return middleIdx
    }else if(val < arr[middleIdx]){
      rightIdx = middleIdx-1;
    }else{
      leftIdx = middleIdx+1;
    }
  }
  return -1
}

function sortedFrequency(arr, val){
  const firstIdx = findFirstIdx(arr, val);
  if(firstIdx===-1) return -1
  const lastIdx = findLastIdx(arr, val);
  return lastIdx-firstIdx+1;
}

// --------------------------------------------------------------

//  1. Both findFirstIdx() and findLastIdx() are run to find the first and last instance of the value

//  2. The indexes of the first and last instance of that value are substracted, then 1 is added to account for
//      0 indexing

// ================================================================================================================

console.debug("findRotatedIndex")

// --------------------------------------------------------------

function findPivotPoint(arr){
  if(arr.length===1 || arr[0] < arr[arr.length-1]) return 0

  let start = 0;
  let end = arr.length-1;

  while(start<=end){
    let middle = Math.floor((start+end)/2);
    if(arr[middle] > arr[middle+1]) return middle+1
    else if(arr[start] <= arr[middle]){
      start = middle+1;
    }else{
      end = middle-1
    }
  }
}

function binarySearch(arr, num, start, end){
  if(arr.length===0) return -1;

  if(num < arr[start] || num > arr[end]) return -1;

  while(start <= end){
    let middle = Math.floor((start+end)/2);
    if(arr[middle]===num){
      return middle
    }else if(num < arr[middle]){
      end = middle-1;
    }else{
      start = middle+1;
    }
  }
  return -1
}

function findRotatedIndex(arr, num){
  let pivotPoint = findPivotPoint(arr);

  if(pivotPoint>0 && num >=arr[0] && num<=arr[pivotPoint-1]){
    return binarySearch(arr, num, 0, pivotPoint-1)
  }else{
    return binarySearch(arr, num, pivotPoint, arr.length-1)
  }
}

// --------------------------------------------------------------

//  1. Find the point in which the previously sorted array became unsorted by finding where the current index is greater than the previous one

//  2.  Add a binary search function to the unpivoting function, running a binary search on a now sorted array

// ================================================================================================================

console.debug("findRotationCount")

// --------------------------------------------------------------

function findRotationCount(arr, low=0, high=arr.length-1){
  if(high<low) return 0

  if(high===low) return low

  let middle = Math.floor((low+high)/2);
  if(middle<high && arr[middle+1] < arr[middle]){
    return middle+1
  }

  if(middle>low && arr[middle]<arr[middle-1]){
    return middle
  }

  if(arr[high]>arr[middle]){
    return findRotationCount(arr, low, middle-1);
  }

  return findRotationCount(arr, middle+1, high)
}

// --------------------------------------------------------------

//  1. The last number (arr.length-1) should be the biggest value so if this isn't the case:

//    a. The last number being less than first means it hasn't been rotated

//    b. The last number and the first being the same means the array got rotated some number of times

//  2. Calculate the middle index of the array and check the other indexes:

//    a. If the middle index is greater than the next index, then middle + 1 is the rotation point

//    b. If the middle index is less than the next index, then middle is the rotation point

//    c. If the middle index is less than the highest index, you can remove the second half of the original array and 
//        recursively run findRotationCount() on this new subarray

//    d. If none of these conditions are met, the rotation point is in the second half of the array, so you can remove the
//        first half of the original array and recursively run findRotationCount() on this new subarray.



// ================================================================================================================

console.debug("findFloor")

// --------------------------------------------------------------

function findFloor(arr, num, low=0, high=arr.length-1){
  if(low>high) return -1
  if(num>=arr[high]) return arr[high]

  let middle = Math.floor((low+high)/2);
  
  if(arr[middle]===num) return arr[middle]

  if(middle>0 && arr[middle-1]<=num && num<arr[middle]){
    return arr[middle-1]
  }

  if(num<arr[middle]){
    return findFloor(arr, num, low, middle-1)
  }

  return findFloor(arr, num, middle+1, high)
}

// --------------------------------------------------------------

//  1. If the first index is greater than the last index, it means whatever number input is less than all the numbers in
//      the array, so -1 is returned

//  2. If the number is the same or greater than the last index, there's no closer the array can get, so return that index

//  3. If these conditions aren't met, calculate the middle index and start comparing:

//    a. If the middle index is the same as the number, see step #2

//    b. If the middle index is more than 0, and the middle -1 index is the same or less than the middle index, the floor is middle -1

//    c. If the middle is more than the number, then the floor will be found in the first half of the orginal array, so recursively 
//        run findFloor() on the new subarray

//    d. If none of these conditions are met, the floor will be in the second half of the original array, so recursively run findFloor()
//        on the new subarray

// ================================================================================================================