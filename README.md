# STN-7 Problem Solving Assessment

All 20 problems are solved in a single file, [`solution.js`](./solution.js), in JavaScript.
Each solution is marked with a comment containing its number and title.

## Run

Requires Node.js 14 or newer. No dependencies.

```bash
node solution.js
```

## Problems

| #   | Title                               | Function              |
| --- | ----------------------------------- | --------------------- |
| 1   | Staircase                           | `staircase`           |
| 2   | Grading Students                    | `gradingStudents`     |
| 3   | Time Conversion                     | `timeConversion`      |
| 4   | String Repeat                       | `repeatStr`           |
| 5   | Reversed Strings                    | `solution`            |
| 6   | Sum of Positive                     | `positiveSum`         |
| 7   | Grasshopper - Summation             | `summation`           |
| 8   | Convert a Boolean to a String       | `booleanToString`     |
| 9   | Fizz Buzz                           | `fizzBuzz`            |
| 10  | Running Sum of 1D Array             | `runningSum`          |
| 11  | Richest Customer Wealth             | `maximumWealth`       |
| 12  | Remove Duplicates from Sorted Array | `removeDuplicates`    |
| 13  | Contains Duplicate                  | `containsDuplicate`   |
| 14  | Move Zeroes                         | `moveZeroes`          |
| 15  | Merge Sorted Array                  | `merge`               |
| 16  | 3Sum                                | `threeSum`            |
| 17  | Plus One                            | `plusOne`             |
| 18  | Reverse String                      | `reverseString`       |
| 19  | Length of Last Word                 | `lengthOfLastWord`    |
| 20  | Longest Common Prefix               | `longestCommonPrefix` |

In-place problems (12, 14, 15, 18) modify the input array directly. Problems 14, 15 and 18
return nothing, as specified.

## Note on Problem 20, Example 3

The problem statement gives `"inter"` as the output for
`["interspecies", "interstellar", "interstate"]`. All three words actually begin with
`"inters"`, so the correct longest common prefix is `"inters"`, and that is what the
solution returns. The test in `solution.js` documents this.
