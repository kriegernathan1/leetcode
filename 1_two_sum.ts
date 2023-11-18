function twoSum(nums: number[], target: number): number[] {
  const complementMap = new Map<number, number>(); // key = num from array, value = index of it's last occurence

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const complement = target - currNum;

    if (complementMap.has(complement)) {
      return [complementMap.get(complement)!, i];
    }

    complementMap.set(currNum, i);
  }

  return [];
}
