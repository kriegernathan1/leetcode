type Char = string;
function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 0) return [[]];

  let freqMapList: Array<Map<Char, number>> = []; //freqMapList[i] == frequency map for strs[i] string
  const solutionArr: Array<Array<string>> = [];
  let currentSolutionIndex = 0;

  for (let i = 0; i < strs.length; i++) {
    // create frequency map for string
    freqMapList.push(createFreqMap(strs[i]));
  }

  for (let i = 0; i < freqMapList.length; i++) {
    const currMap = freqMapList[i];

    if (currMap.has(-1 as any)) continue;

    solutionArr.push([strs[i]]);

    for (let j = i + 1; j < freqMapList.length; j++) {
      const compareMap = freqMapList[j];
      if (areMapsEquivalent(currMap, compareMap)) {
        solutionArr[currentSolutionIndex].push(strs[j]);
        compareMap.set(-1 as any, -1); // marker for iteration
      }
    }

    currentSolutionIndex++;
  }

  return solutionArr;
}

function createFreqMap(str: string): Map<Char, number> {
  const freqMap = new Map<Char, number>();
  const letters = str.split("");

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    freqMap.set(letter, (freqMap.get(letter) ?? 0) + 1);
  }

  return freqMap;
}

function areMapsEquivalent(
  map1: Map<Char, number>,
  map2: Map<Char, number>
): boolean {
  if (map1.size !== map2.size) return false;

  let isEqual = true;

  map1.forEach((value, key, _) => {
    if (value !== map2.get(key)) {
      isEqual = false;
    }
  });

  return isEqual;
}
