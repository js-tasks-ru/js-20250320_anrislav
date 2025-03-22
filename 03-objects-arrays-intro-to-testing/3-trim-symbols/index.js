/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (typeof size == "undefined") return string;
  const array = string.split("");
  let counter = 0;
  let result = "";
  let previousSymbol = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === previousSymbol) {
      counter++;
    } else {
      counter = 1;
    }
    if (counter <= size) result += array[i];
    previousSymbol = array[i];
  }
  return result;
}
