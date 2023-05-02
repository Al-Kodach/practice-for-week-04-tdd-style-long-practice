function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n <= 0 || n > 1000000) {
    throw RangeError('provide a number from 1 to 1000000');
  }

  let result = 1 / n;

  if (!Number.isInteger(result)) {
    let countDecimal = result.toString().split('.')[1];

    if (countDecimal.length > 3) {
      result = Number(result.toFixed(3));
    }
  }

  return result;
}


module.exports = {
  returnsThree,
  reciprocal
};
