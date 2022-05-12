const Database = require("@replit/database")
function threeSum(arr, target) {
    arr.sort((a, b) => a - b);
    let n = arr.length;
    //let finalAns=0;

    // -4 -1 1 2
    let closestSum = Number.POSITIVE_INFINITY;
    for (let i = 0; i < n - 2; i++) {
        let ptr1 = i + 1;
        let ptr2 = arr.length - 1;
        while (ptr1 < ptr2) {
            let currSum = arr[i] + arr[ptr1] + arr[ptr2];

            if (currSum > target) {
                if (Math.abs(target - currSum) < Math.abs(target - closestDiff)) {
                    closestSum = currSum
                }
                ptr2--;
            }
            if (currSum < target) {
                if (Math.abs(currSum - target) < Math.abs(target - closestDiff)) {
                    closestSum = currSum;
                }
                ptr1++;
            }
        }
    }
    return closestSum;
}











//console.log(threeSum(arr, target));






//do not modify below this line
module.exports = threeSum;