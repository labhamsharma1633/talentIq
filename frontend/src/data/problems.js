export const PROBLEMS = {
  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array.",
      notes: ["Return false if every element is distinct."],
    },
    examples: [
      { input: "nums = [1,2,3,1]", output: "true" },
      { input: "nums = [1,2,3,4]", output: "false" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {}`,
      python: `def containsDuplicate(nums): pass`,
      java: `class Solution { public boolean containsDuplicate(int[] nums) { return false; } }`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        
    }
};`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
    },
  },

  "best-time-to-buy-sell-stock": {
    id: "best-time-to-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Greedy",
    description: {
      text: "Find the maximum profit from buying and selling a stock.",
      notes: ["You must buy before selling."],
    },
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5" },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵"],
    starterCode: {
      javascript: `function maxProfit(prices) {}`,
      python: `def maxProfit(prices): pass`,
      java: `class Solution { public int maxProfit(int[] prices) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
    }
};`,
    },
    expectedOutput: {
      javascript: "5",
      python: "5",
      java: "5",
      cpp: "5",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Check if two strings are anagrams.",
      notes: [],
    },
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵"],
    starterCode: {
      javascript: `function isAnagram(s, t) {}`,
      python: `def isAnagram(s, t): pass`,
      java: `class Solution { public boolean isAnagram(String s, String t) { return false; } }`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        
    }
};`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
      cpp: "true",
    },
  },

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Array • Hash Table",
    description: {
      text: "Group all anagrams together.",
      notes: [],
    },
    examples: [
      {
        input: '["eat","tea","tan","ate","nat","bat"]',
        output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      },
    ],
    constraints: ["1 ≤ strs.length ≤ 10⁴"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {}`,
      python: `def groupAnagrams(strs): pass`,
      java: `class Solution { public List<List<String>> groupAnagrams(String[] strs) { return null; } }`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        
    }
};`,
    },
    expectedOutput: {
      javascript: "Grouped arrays",
      python: "Grouped arrays",
      java: "Grouped arrays",
      cpp: "Grouped arrays",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix",
    description: {
      text: "Return array output such that output[i] is product except nums[i].",
      notes: ["No division allowed"],
    },
    examples: [
      { input: "nums = [1,2,3,4]", output: "[24,12,8,6]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {}`,
      python: `def productExceptSelf(nums): pass`,
      java: `class Solution { public int[] productExceptSelf(int[] nums) { return null; } }`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        
    }
};`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]",
      python: "[24,12,8,6]",
      java: "[24,12,8,6]",
      cpp: "[24,12,8,6]",
    },
  },

  "maximum-product-subarray": {
    id: "maximum-product-subarray",
    title: "Maximum Product Subarray",
    difficulty: "Medium",
    category: "Array • DP",
    description: {
      text: "Find contiguous subarray with max product.",
      notes: [],
    },
    examples: [
      { input: "nums = [2,3,-2,4]", output: "6" },
    ],
    constraints: ["1 ≤ nums.length ≤ 2*10⁴"],
    starterCode: {
      javascript: `function maxProduct(nums) {}`,
      python: `def maxProduct(nums): pass`,
      java: `class Solution { public int maxProduct(int[] nums) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        
    }
};`,
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
      cpp: "6",
    },
  },

  "find-minimum-rotated-array": {
    id: "find-minimum-rotated-array",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    description: {
      text: "Find minimum element in rotated sorted array.",
      notes: [],
    },
    examples: [
      { input: "nums = [3,4,5,1,2]", output: "1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000"],
    starterCode: {
      javascript: `function findMin(nums) {}`,
      python: `def findMin(nums): pass`,
      java: `class Solution { public int findMin(int[] nums) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int findMin(vector<int>& nums) {
        
    }
};`,
    },
    expectedOutput: {
      javascript: "1",
      python: "1",
      java: "1",
      cpp: "1",
    },
  },

  "search-rotated-array": {
    id: "search-rotated-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    description: {
      text: "Search target in rotated array.",
      notes: [],
    },
    examples: [
      { input: "nums=[4,5,6,7,0,1,2], target=0", output: "4" },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000"],
    starterCode: {
      javascript: `function search(nums, target) {}`,
      python: `def search(nums, target): pass`,
      java: `class Solution { public int search(int[] nums, int target) { return -1; } }`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        
    }
};`,
    },
    expectedOutput: {
      javascript: "4",
      python: "4",
      java: "4",
      cpp: "4",
    },
  },

  "three-sum": {
    id: "three-sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Two Pointers",
    description: {
      text: "Find all unique triplets that sum to zero.",
      notes: [],
    },
    examples: [
      { input: "nums=[-1,0,1,2,-1,-4]", output: "[[-1,-1,1],[-1,0,1]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000"],
    starterCode: {
      javascript: `function threeSum(nums) {}`,
      python: `def threeSum(nums): pass`,
      java: `class Solution { public List<List<Integer>> threeSum(int[] nums) { return null; } }`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        
    }
};`,
    },
    expectedOutput: {
      javascript: "Triplets",
      python: "Triplets",
      java: "Triplets",
      cpp: "Triplets",
    },
  },

  "longest-substring-without-repeating": {
    id: "longest-substring-without-repeating",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Sliding Window",
    description: {
      text: "Find longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      { input: 's="abcabcbb"', output: "3" },
    ],
    constraints: ["0 ≤ s.length ≤ 5*10⁴"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {}`,
      python: `def lengthOfLongestSubstring(s): pass`,
      java: `class Solution { public int lengthOfLongestSubstring(String s) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        
    }
};`,
    },
    expectedOutput: {
      javascript: "3",
      python: "3",
      java: "3",
      cpp: "3",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};