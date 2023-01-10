// Minimum Difference Between Highest and Lowest of K Scores

// Input: nums = [9,4,1,7], k = 2

// Output: 2

// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

function minimumDifference(nums: number[], k: number): number {
  let resultNumber: number = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const numI = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const numJ = nums[j];
      if (numI > numJ) {
        let difference = numI - numJ;
        resultNumber = difference < numI ? difference : resultNumber;
      } else {
        let difference = numI - numI;
        resultNumber = difference < numI ? difference : resultNumber;
      }
    }
  }

  return resultNumber;
}

console.log(minimumDifference([9, 4, 1, 7], 2));
