function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIndex = Math.floor(array.length / 2 );
  let leftSide = array.slice(0, midIndex);
  let rightSide =  array.slice(midIndex);
  
  return merge(mergeSort(rightSide), mergeSort(leftSide));
}

function merge(leftSide, rightSide){
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (rightIndex < rightSide.length && leftIndex < leftSide.length) {
    if (rightSide[rightIndex] < leftSide[leftIndex]) {
      results.push(rightSide[rightIndex]);
      rightIndex++;
    } else {
      results.push(leftSide[leftIndex]);
      leftIndex++;
    }
  }
    return results.concat(leftSide.slice(leftIndex)).concat(rightSide.slice(rightIndex));
}


module.exports = mergeSort;