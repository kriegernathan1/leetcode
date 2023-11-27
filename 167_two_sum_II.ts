function twoSum(numbers: number[], target: number): number[] {
    if(numbers.length === 2) return [1,2];

    let left = 0;
    let right = numbers.length - 1;

    while(left < right) {
        let leftVal = numbers[left];
        let rightVal = numbers[right];
        let complement = target - leftVal;

        if(rightVal === complement) {
            return [left + 1, right + 1];
        }

        if(rightVal > complement) {
            right--;
            continue;
        }

        if(rightVal < complement) {
            left++;
            continue;
        }
    }
};

// Time: O(n)
// Space: O(1)