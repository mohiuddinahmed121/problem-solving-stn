/* =====================================================================
 * STN-7 Problem Solving Assessment
 * All 20 solutions live in this single file. Each problem is marked by a
 * header comment with its number and title. Run the tests with:
 *     node solution.js
 * ===================================================================== */


/* ---------------------------------------------------------------------
 * Problem 1: Staircase
 * Approach: row i (1-based) = (n - i) spaces + i '#'. Rows joined by '\n'.
 * Time O(n^2) (output size), Space O(n^2). n <= 0 / non-integer -> "".
 * ------------------------------------------------------------------- */
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
  if (!Number.isInteger(n) || n <= 0) return "";
  const rows = [];
  for (let i = 1; i <= n; i++) rows.push(" ".repeat(n - i) + "#".repeat(i));
  return rows.join("\n");
};


/* ---------------------------------------------------------------------
 * Problem 2: Grading Students
 * Approach: for grade >= 38, next multiple of 5 is ceil(g/5)*5; round up
 * when the difference is < 3. Returns a new array, input is untouched.
 * Time O(n), Space O(n).
 * ------------------------------------------------------------------- */
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
  return grades.map((g) => {
    if (g < 38) return g;
    const next = Math.ceil(g / 5) * 5;
    return next - g < 3 ? next : g;
  });
};


/* ---------------------------------------------------------------------
 * Problem 3: Time Conversion
 * Approach: parse hour, take hour % 12, add 12 for PM, re-pad to 2 digits.
 * This covers 12AM -> 00 and 12PM -> 12 without special-casing.
 * Time O(1), Space O(1).
 * ------------------------------------------------------------------- */
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
  const suffix = s.slice(-2).toUpperCase();
  const [hh, mm, ss] = s.slice(0, -2).split(":");
  let hour = parseInt(hh, 10) % 12;
  if (suffix === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${mm}:${ss}`;
};


/* ---------------------------------------------------------------------
 * Problem 4: String Repeat
 * Approach: build with a loop (no reliance on String.prototype.repeat).
 * n <= 0 -> "". Time O(n * |s|), Space O(n * |s|).
 * ------------------------------------------------------------------- */
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
  let result = "";
  for (let i = 0; i < n; i++) result += s;
  return result;
};


/* ---------------------------------------------------------------------
 * Problem 5: Reversed Strings
 * Approach: iterate from the last index to the first and build a new
 * string. Original string is immutable, "" -> "".
 * Time O(n), Space O(n).
 * ------------------------------------------------------------------- */
/**
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
};


/* ---------------------------------------------------------------------
 * Problem 6: Sum of Positive
 * Approach: add only values strictly greater than 0. Empty array -> 0.
 * Time O(n), Space O(1).
 * ------------------------------------------------------------------- */
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
  let sum = 0;
  for (const x of arr) if (x > 0) sum += x;
  return sum;
};


/* ---------------------------------------------------------------------
 * Problem 7: Grasshopper - Summation
 * Approach: Gauss formula num * (num + 1) / 2. O(1) time and space.
 * ------------------------------------------------------------------- */
/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
  return (num * (num + 1)) / 2;
};


/* ---------------------------------------------------------------------
 * Problem 8: Convert a Boolean to a String
 * Approach: String(b) always returns the string "true" or "false".
 * ------------------------------------------------------------------- */
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
  return String(b);
};


/* ---------------------------------------------------------------------
 * Problem 9: Fizz Buzz
 * Approach: check the "both" case (divisible by 15) first, then 3, then 5.
 * n <= 0 -> []. Time O(n), Space O(n).
 * ------------------------------------------------------------------- */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
};


/* ---------------------------------------------------------------------
 * Problem 10: Running Sum of 1D Array
 * Approach: keep a running total and push it for every index.
 * Time O(n), Space O(n) for the result.
 * ------------------------------------------------------------------- */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = [];
  let total = 0;
  for (const x of nums) {
    total += x;
    result.push(total);
  }
  return result;
};


/* ---------------------------------------------------------------------
 * Problem 11: Richest Customer Wealth
 * Approach: sum every row and keep the maximum.
 * Time O(rows * cols), Space O(1). Empty input -> 0.
 * ------------------------------------------------------------------- */
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (const row of accounts) {
    let wealth = 0;
    for (const v of row) wealth += v;
    if (wealth > max) max = wealth;
  }
  return max;
};


/* ---------------------------------------------------------------------
 * Problem 12: Remove Duplicates from Sorted Array
 * Approach: two pointers. `k` is the write index of the next unique value;
 * the array is modified in place. Time O(n), Space O(1).
 * ------------------------------------------------------------------- */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) nums[k++] = nums[i];
  }
  return k;
};


/* ---------------------------------------------------------------------
 * Problem 13: Contains Duplicate
 * Approach: a Set; return true as soon as a value is seen twice.
 * Time O(n), Space O(n).
 * ------------------------------------------------------------------- */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const seen = new Set();
  for (const x of nums) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
};


/* ---------------------------------------------------------------------
 * Problem 14: Move Zeroes
 * Approach: in place; move every non-zero to the write index, then fill
 * the rest with zeros. Keeps relative order. Time O(n), Space O(1).
 * ------------------------------------------------------------------- */
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
  let write = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[write++] = nums[i];
  }
  while (write < nums.length) nums[write++] = 0;
};


/* ---------------------------------------------------------------------
 * Problem 15: Merge Sorted Array
 * Approach: merge from the back with three pointers so no valid value of
 * nums1 is overwritten before it is used. Only the first m elements of
 * nums1 are treated as real values. Time O(m + n), Space O(1).
 * ------------------------------------------------------------------- */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
    else nums1[k--] = nums2[j--];
  }
};


/* ---------------------------------------------------------------------
 * Problem 16: 3Sum
 * Approach: sort a copy, fix the first value and use two pointers for the
 * other two; skip repeated values to avoid duplicate triplets.
 * Time O(n^2), Space O(1) extra (besides the sorted copy and the output).
 * ------------------------------------------------------------------- */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const a = [...nums].sort((x, y) => x - y);
  const result = [];
  for (let i = 0; i < a.length - 2; i++) {
    if (a[i] > 0) break;
    if (i > 0 && a[i] === a[i - 1]) continue;
    let lo = i + 1;
    let hi = a.length - 1;
    while (lo < hi) {
      const sum = a[i] + a[lo] + a[hi];
      if (sum === 0) {
        result.push([a[i], a[lo], a[hi]]);
        while (lo < hi && a[lo] === a[lo + 1]) lo++;
        while (lo < hi && a[hi] === a[hi - 1]) hi--;
        lo++;
        hi--;
      } else if (sum < 0) lo++;
      else hi--;
    }
  }
  return result;
};


/* ---------------------------------------------------------------------
 * Problem 17: Plus One
 * Approach: walk from the last digit; a digit < 9 is incremented and we
 * are done, otherwise it becomes 0 and the carry moves left. If every
 * digit was 9, prepend a 1. Works for arrays of any length (no BigInt).
 * Time O(n), Space O(1) except the all-nines case.
 * ------------------------------------------------------------------- */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }
    result[i] = 0;
  }
  result.unshift(1);
  return result;
};


/* ---------------------------------------------------------------------
 * Problem 18: Reverse String
 * Approach: two pointers swapping from both ends, in place.
 * Time O(n), Space O(1).
 * ------------------------------------------------------------------- */
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const tmp = s[left];
    s[left++] = s[right];
    s[right--] = tmp;
  }
};


/* ---------------------------------------------------------------------
 * Problem 19: Length of Last Word
 * Approach: scan from the end, skip trailing spaces, then count characters
 * until the next space. Time O(n), Space O(1).
 * ------------------------------------------------------------------- */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;
  let length = 0;
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
};


/* ---------------------------------------------------------------------
 * Problem 20: Longest Common Prefix
 * Approach: take the first string as the candidate and shorten it until
 * every other string starts with it. Empty array / any empty string -> "".
 * Time O(S) where S is the total number of characters, Space O(1).
 * ------------------------------------------------------------------- */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length && prefix !== ""; i++) {
    while (!strs[i].startsWith(prefix)) prefix = prefix.slice(0, -1);
  }
  return prefix;
};


/* =====================================================================
 * Tests: run with `node solution.js`
 * ===================================================================== */
if (require.main === module) {
  const assert = require("assert");
  const eq = assert.deepStrictEqual;

  // 1 Staircase
  eq(staircase(4), "   #\n  ##\n ###\n####");
  eq(staircase(1), "#");
  eq(staircase(0), "");
  eq(staircase(6).split("\n").map((r) => r.length), [6, 6, 6, 6, 6, 6]);

  // 2 Grading Students
  eq(gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]);
  eq(gradingStudents([84, 29, 57]), [85, 29, 57]);
  eq(gradingStudents([37, 100, 99, 0]), [37, 100, 100, 0]);
  eq(gradingStudents([]), []);
  const grades = [73];
  gradingStudents(grades);
  eq(grades, [73]); // input not mutated

  // 3 Time Conversion
  eq(timeConversion("07:05:45PM"), "19:05:45");
  eq(timeConversion("12:00:00AM"), "00:00:00");
  eq(timeConversion("12:30:45PM"), "12:30:45");
  eq(timeConversion("01:00:00AM"), "01:00:00");
  eq(timeConversion("11:59:59PM"), "23:59:59");

  // 4 String Repeat
  eq(repeatStr(3, "ha"), "hahaha");
  eq(repeatStr(0, "hello"), "");
  eq(repeatStr(4, "a"), "aaaa");
  eq(repeatStr(2, ""), "");

  // 5 Reversed Strings
  eq(solution("world"), "dlrow");
  eq(solution("hello"), "olleh");
  eq(solution(""), "");
  eq(solution("a"), "a");

  // 6 Sum of Positive
  eq(positiveSum([1, -4, 7, 12]), 20);
  eq(positiveSum([-1, -2, 0, -5]), 0);
  eq(positiveSum([]), 0);

  // 7 Summation
  eq(summation(8), 36);
  eq(summation(1), 1);
  eq(summation(100), 5050);

  // 8 Boolean to String
  eq(booleanToString(true), "true");
  eq(booleanToString(false), "false");
  eq(typeof booleanToString(true), "string");

  // 9 Fizz Buzz
  eq(fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
  eq(fizzBuzz(15), ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
  eq(fizzBuzz(1), ["1"]);
  eq(fizzBuzz(0), []);

  // 10 Running Sum
  eq(runningSum([1, 2, 3, 4]), [1, 3, 6, 10]);
  eq(runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
  eq(runningSum([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17]);
  eq(runningSum([]), []);

  // 11 Richest Customer Wealth
  eq(maximumWealth([[1, 2, 3], [3, 2, 1]]), 6);
  eq(maximumWealth([[1, 5], [7, 3], [3, 5]]), 10);
  eq(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]), 17);

  // 12 Remove Duplicates from Sorted Array
  let a12 = [1, 1, 2];
  eq(removeDuplicates(a12), 2);
  eq(a12.slice(0, 2), [1, 2]);
  a12 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  eq(removeDuplicates(a12), 5);
  eq(a12.slice(0, 5), [0, 1, 2, 3, 4]);
  eq(removeDuplicates([]), 0);
  eq(removeDuplicates([7]), 1);

  // 13 Contains Duplicate
  eq(containsDuplicate([1, 2, 3, 1]), true);
  eq(containsDuplicate([1, 2, 3, 4]), false);
  eq(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
  eq(containsDuplicate([]), false);

  // 14 Move Zeroes
  let a14 = [0, 1, 0, 3, 12];
  eq(moveZeroes(a14), undefined);
  eq(a14, [1, 3, 12, 0, 0]);
  a14 = [0, 0, 1]; moveZeroes(a14); eq(a14, [1, 0, 0]);
  a14 = [1, 2, 3]; moveZeroes(a14); eq(a14, [1, 2, 3]);
  a14 = [0]; moveZeroes(a14); eq(a14, [0]);

  // 15 Merge Sorted Array
  let n1 = [1, 2, 3, 0, 0, 0];
  eq(merge(n1, 3, [2, 5, 6], 3), undefined);
  eq(n1, [1, 2, 2, 3, 5, 6]);
  n1 = [1]; merge(n1, 1, [], 0); eq(n1, [1]);
  n1 = [0]; merge(n1, 0, [1], 1); eq(n1, [1]);
  n1 = [4, 5, 6, 0, 0, 0]; merge(n1, 3, [1, 2, 3], 3); eq(n1, [1, 2, 3, 4, 5, 6]);
  n1 = [-1, 0, 0, 0]; merge(n1, 1, [-3, 0, 2], 3); eq(n1, [-3, -1, 0, 2]);

  // 16 3Sum (compare as sorted sets of triplets)
  const norm = (r) => r.map((t) => t.join(",")).sort();
  eq(norm(threeSum([-1, 0, 1, 2, -1, -4])), norm([[-1, -1, 2], [-1, 0, 1]]));
  eq(threeSum([0, 1, 1]), []);
  eq(threeSum([0, 0, 0]), [[0, 0, 0]]);
  eq(threeSum([0, 0, 0, 0]), [[0, 0, 0]]);
  eq(threeSum([]), []);
  eq(norm(threeSum([-2, 0, 1, 1, 2])), norm([[-2, 0, 2], [-2, 1, 1]]));
  const in16 = [3, -1, -2];
  threeSum(in16);
  eq(in16, [3, -1, -2]); // input not mutated

  // 17 Plus One
  eq(plusOne([1, 2, 9]), [1, 3, 0]);
  eq(plusOne([4, 3, 2, 1]), [4, 3, 2, 2]);
  eq(plusOne([9, 9, 9]), [1, 0, 0, 0]);
  eq(plusOne([0]), [1]);
  eq(plusOne([9]), [1, 0]);
  eq(plusOne(new Array(30).fill(9)), [1, ...new Array(30).fill(0)]);

  // 18 Reverse String
  let s18 = ["h", "e", "l", "l", "o"];
  eq(reverseString(s18), undefined);
  eq(s18, ["o", "l", "l", "e", "h"]);
  s18 = ["H", "a", "n", "n", "a", "h"]; reverseString(s18); eq(s18, ["h", "a", "n", "n", "a", "H"]);
  s18 = []; reverseString(s18); eq(s18, []);
  s18 = ["a"]; reverseString(s18); eq(s18, ["a"]);

  // 19 Length of Last Word
  eq(lengthOfLastWord("Hello World"), 5);
  eq(lengthOfLastWord("   fly me   to   the moon  "), 4);
  eq(lengthOfLastWord("luffy is still joyboy"), 6);
  eq(lengthOfLastWord("a"), 1);
  eq(lengthOfLastWord("   "), 0);
  eq(lengthOfLastWord(""), 0);

  // 20 Longest Common Prefix
  eq(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
  eq(longestCommonPrefix(["dog", "racecar", "car"]), "");
  // NOTE: the problem statement lists "inter" for this input, but all three
  // words start with "inters" (inter-s-pecies / inter-s-tellar / inter-s-tate),
  // so "inters" is the correct longest common prefix.
  eq(longestCommonPrefix(["interspecies", "interstellar", "interstate"]), "inters");
  eq(longestCommonPrefix(["interview", "internet", "interval"]), "inter");
  eq(longestCommonPrefix(["alone"]), "alone");
  eq(longestCommonPrefix(["abc", ""]), "");
  eq(longestCommonPrefix(["same", "same"]), "same");
  eq(longestCommonPrefix([]), "");

  console.log("All tests passed (20 problems)");
}
