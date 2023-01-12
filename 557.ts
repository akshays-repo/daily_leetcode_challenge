// Given a string s, reverse the order of characters in each word within a
// sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

// status: Completed

// Runtime: 87 ms
// Beats: 73.20%
// Memory: 49.3 MB
// Beats: 66.67%

function reverseWords(s: string): string {
  let op: string = "";

  const sArr = s.split(" ");

  for (let index = 0; index < sArr.length; index++) {
    const element = sArr[index];
    if (index != 0) {
      op = op + " ";
    }
    for (let j = element.length - 1; j >= 0; j--) {
      op = op + element[j];
    }
  }

  return op;
}

console.log(reverseWords("God Ding"));
