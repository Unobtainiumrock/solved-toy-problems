/* 
  Refer to the README.md for my explanation of the algorithm, as well as challenges I faced.

  Prompt: Given an array of integers consisting of only 0's and 1's, sort the array into ascending order.

  Constraints:
    Time: O(n)
    Space: O(1)
    Can't use the built-in sort method.

  Examples:
    Input: [1,1,1,0,0]
    Output: [0,0,1,1,1]

    Input: [1,1,1,0,1,1]
    Output:[0,1,1,1,1,1]
*/

// Primary Solution
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

// Dream Solution (Constraint-less)
const dreamSort = (arr) => {
  const zeroes = [];
  const ones = [];
  arr.forEach((element) => {
    element === 0 ? zeroes.push(0) : ones.push(1);
  })
  return zeroes.concat(ones);
}

// The best is just to use the built-in sort, but that'd be considered "cheating"
const quickSort (arr) => {
  arr.sort((a,b) => a - b);
  return arr;
}
