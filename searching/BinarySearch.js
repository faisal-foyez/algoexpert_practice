function binarySearch(array, target) {

  let left = 0;
  let right = array.length -1;
  let mid = Math.ceil((left + right)/2);
  while(mid >= left && mid <= right){
    if(array[mid] === target){
      return mid;
    }
    if(target > array[mid]){
      left = mid + 1;
    }else if(target < array[mid]){
      right = mid - 1;
    }
    mid = Math.ceil((left + right)/2);
  }
  return -1;
}


console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73],33))