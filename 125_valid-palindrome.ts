function isPalindrome(s: string): boolean {
  // method 1; Time: O(n) space: O(n)
  // if(s === "") return true;

  // let formattedString = "";
  // let sToCharArr = s.toLowerCase().split('');

  // const isAlphanumeric = (char: string) => {
  //     if(char === ' ') return;
  //     const isAlphanumericRegex = /^[a-z0-9]+$/i;
  //     return isAlphanumericRegex.test(char);
  // }

  // sToCharArr.forEach(char => {
  //     if(isAlphanumeric(char)) {
  //         formattedString = formattedString + char;
  //     }
  // })

  // return formattedString === formattedString.split('').reverse().join('')

  //method 2: Time: O(n) space: O(1)

  let left = 0;
  let right = s.length - 1;

  const isAlphanumeric = (char: string) => {
    if (char === " ") return;
    const isAlphanumericRegex = /^[a-z0-9]+$/i;
    return isAlphanumericRegex.test(char);
  };

  while (left <= right) {
    let leftVal = s[left].toLowerCase();
    let rightVal = s[right].toLowerCase();

    if (!isAlphanumeric(leftVal)) {
      left++;
      continue;
    }
    if (!isAlphanumeric(rightVal)) {
      right--;
      continue;
    }

    if (leftVal !== rightVal) return false;
    left++;
    right--;
  }

  return true;
}
