/* 
  Prompt: Given an array of integers consisting of only 0's and 1's, sort the array into ascending order.

  Constraints:
    Time: O(n)
    Space: O(1)

  Examples:
    Input: [1,1,1,0,0]
    Output: [0,0,1,1,1]

    Input: [1,1,1,0,1,1]
    Output:[0,1,1,1,1,1]
*/

const sort = (arr) => {
  let oneExists = false;
  let firstOneIndex;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 1 && !oneExists) {
      oneExists = true;
      firstOneIndex = i;
    }

    if (arr[i] === 0 && oneExists) {
      arr[firstOneIndex] = arr[i];
      arr[i] = 1;
      firstOneIndex++;
    }

  }
  return arr;
}
