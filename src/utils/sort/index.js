/* 
References : https://khan4019.github.io/front-end-Interview-Questions/sort.html 
*/

/**
 *
 * time complexity:O(n2)
 * Worst Case Time Complexity [ Big-O ]: O(n2)
 * Best Case Time Complexity [Big-omega]: O(n)
 * Average Time Complexity [Big-theta]: O(n2)
 * Space Complexity: O(1)
 * @param {*} arr
 */
export const bubbleSort = arr => {
  return arr.sort((a, b) => a - b)
}
