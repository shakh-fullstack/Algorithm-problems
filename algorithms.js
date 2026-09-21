// ==========================================
// Problem 1: Sum of Array Elements
// ==========================================

// ❌ My First Approach ()
function returnSumV1(arr) {
  for (let num of arr) {
    return arr.reduce((sum, number) => sum + number, 0);
  }
}

// ✅ Optimized Approach
const returnSumV2 = (arr) => arr.reduce((sum, number) => sum + number, 0);

console.log(returnSumV2([5, 10, 15, 20]));
