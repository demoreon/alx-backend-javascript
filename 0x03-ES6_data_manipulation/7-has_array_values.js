/**
 * Function that returns boolean
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @author Ogundimu Ajibade
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
