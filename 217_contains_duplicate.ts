function containsDuplicate(nums: number[]): boolean {
    const numFreqMap = new Map<number, number>(); // key = number, value = how many times that number occurs in nums array

    for(let i = 0; i < nums.length; i++) {
        const currVal = nums[i];
        if(numFreqMap.has(currVal)) {
            return true
        } else {
            numFreqMap.set(currVal, 1);
        }
    }

    return false;
};