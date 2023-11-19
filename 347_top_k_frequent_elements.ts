function topKFrequent(nums: number[], k: number): number[] {
  const frequencyArray = new Array(nums.length); // must index - 1 for frequency
  const freqMap = new Map<number, number>(); // key = num in nums; value = frequency;

  nums.forEach((num) => {
    const frequencyOfNum = (freqMap.get(num) ?? 0) + 1;
    freqMap.set(num, frequencyOfNum);
  });

  freqMap.forEach((value, key) => {
    if (frequencyArray[value - 1]) {
      frequencyArray[value - 1].push(key);
    } else {
      frequencyArray[value - 1] = [key];
    }
  });

  const solution = [];

  for (let i = frequencyArray.length - 1; i >= 0; i--) {
    while (
      frequencyArray[i] &&
      frequencyArray[i].length &&
      solution.length < k
    ) {
      if (solution.length === k) return solution;

      solution.push(frequencyArray[i].pop());
    }
  }

  return solution;
}
