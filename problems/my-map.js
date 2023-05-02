function myMap(inputArray, callback) {
  let newArr = [];

  for (let i = 0; i < inputArray.length; i++) {
    let el = callback(inputArray[i]);
    newArr.push(el);
  }

  return newArr;
}

module.exports = { myMap };
