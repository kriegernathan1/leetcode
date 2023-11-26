function longestConsecutive(nums: number[]): number {
  if (nums.length == 0) return 0;

  let longestSequence = 1;
  const numsSet = new Set(nums);

  function isStartOfSequence(num: number) {
    const predecessor = num - 1;
    return !numsSet.has(predecessor);
  }

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    if (isStartOfSequence(currNum)) {
      let localLongestSequence = 1;
      let lastSequenceValue = currNum + 1;
      while (numsSet.has(lastSequenceValue)) {
        localLongestSequence++;
        lastSequenceValue++;
      }

      longestSequence =
        localLongestSequence > longestSequence
          ? localLongestSequence
          : longestSequence;
    }
  }

  return longestSequence;
}

// Time complexity: O(n)

// Space Complexity: O(1)
