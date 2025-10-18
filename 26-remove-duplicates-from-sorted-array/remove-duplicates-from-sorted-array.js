/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    if (nums.length <= 1) return nums.length;

    let writeIndex = 1;

    for (let readIndex = 1; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== nums[readIndex - 1]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    return writeIndex; 
};