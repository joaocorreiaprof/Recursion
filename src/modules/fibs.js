function fibs(number) {
  if (number <= 0) {
    return [];
  }
  if (number === 1) {
    return [0];
  }

  if (number === 2) {
    return [0, 1];
  }

  let resultArray = [0, 1];
  for (let index = 2; index < number; index++) {
    resultArray[index] = resultArray[index - 1] + resultArray[index - 2];
  }
  return resultArray;
}
export { fibs };
