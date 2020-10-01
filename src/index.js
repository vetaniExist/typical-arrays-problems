
exports.min = function min (array) {
  if ( !Array.isArray(array) || !array.length){
    return 0;
  }
  let min = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

exports.max = function max (array) {
  if ( !Array.isArray(array) || !array.length){
    return 0;
  }
  let max = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if ( !Array.isArray(array) || !array.length){
    return 0;
  }
  let avg = 0;
  for (let i = 0; i < array.length; i += 1) {
    avg += array[i];
  }
  return avg/array.length;
}
