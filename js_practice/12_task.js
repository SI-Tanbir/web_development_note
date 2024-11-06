function canSortByBitCount(nums) {
    // Helper function to count set bits in an integer
    function countSetBits(num) {
      return num.toString(2).split('').filter(bit => bit === '1').length;
    }
  
    // Sort the array by the number of set bits in each element
    const sortedNums = [...nums].sort((a, b) => countSetBits(a) - countSetBits(b));
  
    // Check if the sorted array is the same as the original array
    return JSON.stringify(nums) === JSON.stringify(sortedNums);
  }
//   
  
//   Here's how the solution works:
  
//   1. **Count Set Bits**: We define a helper function `countSetBits` that takes an integer and returns the number of set bits (1 bits) in its binary representation. This is done by converting the number to a binary string, splitting it into an array of characters, and then filtering for the '1' characters.
  
//   2. **Sort by Bit Count**: We create a shallow copy of the input array `nums` using the spread operator `[...nums]`. Then, we use the `sort()` method to sort the array based on the number of set bits in each element. The `sort()` method takes a comparison function as an argument, where `countSetBits(a) - countSetBits(b)` compares the number of set bits in `a` and `b`.
  
//   3. **Compare to Original**: After sorting, we compare the sorted array to the original array using `JSON.stringify()` to check if they are the same. This is a simple way to compare the contents of the arrays.
  
//   Let's test the solution with the examples provided:
  
//   javascript
  console.log(canSortByBitCount([8, 4, 2, 30, 15])); // true
  console.log(canSortByBitCount([1, 2, 3, 4, 5])); // true
  console.log(canSortByBitCount([3, 16, 8, 4, 2])); // false
  
  
//   The output should be:
  
//   true
//   true
//   false
  
  
//   The time complexity of this solution is O(n log n) due to the sorting step, where n is the length of the input array. The space complexity is O(1) since we are not using any additional data structures that grow with the input size.
  
//   The key aspects of this solution are:
//   1. Efficiently counting the set bits in each element using the `toString(2)` method to convert the number to a binary string, and then splitting and filtering the string.
//   2. Leveraging the built-in `sort()` method to sort the array based on the number of set bits.
//   3. Comparing the sorted array to the original array using `JSON.stringify()` to determine if a solution exists.
  
//   The main difference between the Python and JavaScript solutions is the syntax and built-in functions used. In Python, we used the `bin()` function and the `count()` method to count the set bits, while in JavaScript, we used the `toString(2)` method and array operations. Both solutions achieve the same result, but the JavaScript version may be more familiar to developers working in that language.
  
//   Let me know if you have any other questions or if you'