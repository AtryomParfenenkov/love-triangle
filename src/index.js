/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let first;
  let second;
  let third;
  let countTriangles = 0;
  for (let i = 0; i < preferences.length; i++) {
    first = preferences[i] - 1;
    second = preferences[first] - 1;
    third = preferences[second] - 1;
    if (third === i && second != third) {
      countTriangles++;
      preferences[first] = preferences[second] = preferences[third] = null;
    }
  }
 return countTriangles;
};
