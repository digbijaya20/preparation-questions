# Round 1 : DSA


1. Given an array with positive integers from 1 to n arranged randomly. One of the digits is repeated once. Find the repeated number.(Example array [2,3,3,4,1])

Expected answer:
function repetingNumber(nums){
    let val = 0;
    for(let i=0; i<nums.length; i++){
        val += nums[i]
    }
    let max = nums.length - 1
    let sum = max*(max+1)/2
    let result = val - sum;
    console.log(result);
    return result;
}

repetingNumber([2,3,3,4,1]);

Alternate approach:
function repetingNumber(nums){
let set = new Set();
for(let i = 0; i<nums.length; i++){
    if(set.has(nums[i])){
        console.log(nums[i]);
        return nums[i];
    }
    set.add(nums[i]);
}
return -1;
}

repetingNumber([2,3,3,4,1]);


2. 2d array. find number of islands.
1 : land
0 : water

[[1,1,0,1],
 [1,0,0,1],
 [0,1,1,0]]


 # Round 2 : React, javascript, HTML, CSS, NODE
 # Round 3 : Managerial Round

 # Rejected on first round