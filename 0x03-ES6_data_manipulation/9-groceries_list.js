/**
 * that returns a map of groceries with the following items (name, quantity):
 * Apples, 10 - Tomatoes, 10 - Pasta, 1 - Rice, 1 -Banana, 5
 */
export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}
