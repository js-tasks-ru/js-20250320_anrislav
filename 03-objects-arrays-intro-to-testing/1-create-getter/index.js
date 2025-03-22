/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  if (!path) return null;
  const pathArr = path?.split(".");
  let index = 0;
  const func = (obj) => {
    const property = pathArr[index++];
    if (!Object.prototype.hasOwnProperty.call(obj, property)) return undefined;
    const value = obj[property];
    if (value === null) return null;
    if (typeof value == "object") return func(value);
    index = 0;
    return value;
  };
  return func;
}
