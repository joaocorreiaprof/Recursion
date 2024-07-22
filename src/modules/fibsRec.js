function fibsRec(number) {
  if (number <= 0) {
    return [];
  }
  if (number === 1) {
    return [0];
  }

  if (number === 2) {
    return [0, 1];
  }
  let result = fibsRec(number - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
}
export { fibsRec };
