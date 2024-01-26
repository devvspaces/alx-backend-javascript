export default function appendToEachArrayValue(array, appendString) {
  let newArr = [];
  for (const value of array) {
    newArr.push(appendString + value);
  }

  return newArr;
}
