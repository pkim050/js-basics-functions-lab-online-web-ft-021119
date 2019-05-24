// Code your solution in this file!
function distanceFromHqInBlocks (number) {
  let result = number - 42;
  if (result < 0) {
    result *= -1;
  }
  return result;
}

function distanceFromHqInFeet (number) {
  let result = distanceFromHqInBlocks(number);
  result *= 264;
  return result;
}
