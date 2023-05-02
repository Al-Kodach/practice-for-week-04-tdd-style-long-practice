module.exports =  function reverseString(string) {
  let newStr = [];

  // if arg is a string or an array
  if (typeof string == "string" || Array.isArray(string)) {
    if (typeof string == "string") {
      // if arg is a string
      for (let i = 0; i < string.length; i++) {
        let char = string[i];
        newStr.unshift(char);
      }
    } else {
      // if arg is an array
      newStr = string.join("").split("").reverse();
    }
    return newStr.join("");
  } else {
    throw TypeError("invalid input");
  }
}
