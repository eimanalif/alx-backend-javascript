/**
 * a function that returns a string of all the set values
 * that start with a specific string (startString).
 */
export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const result = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }

  return result.join('-');
}
