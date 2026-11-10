/* ---------------------------------------------------------------------
 * Problem 1: Staircase
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
 * O(1) time and space.
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
 * Time O(n), Space O(1).
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
 * Time O(n), Space O(1).
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
 * Time O(m + n), Space O(1).
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
 * Time O(n), Space O(1).
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
