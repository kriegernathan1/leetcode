type Char = string;
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false

    const sFreqMap = new Map<Char, number>();
    const tFreqMap = new Map<Char, number>();

    const sCharArr = s.split('');

    sCharArr.forEach((letter: Char) => {
        if(sFreqMap.has(letter)) {
            sFreqMap.set(letter, sFreqMap.get(letter)! + 1);
            return
        }

        sFreqMap.set(letter, 1);
    });

    t.split('').forEach((letter: Char) => {
        if(tFreqMap.has(letter)) {
            tFreqMap.set(letter, tFreqMap.get(letter)! + 1);
            return;
        }

        tFreqMap.set(letter, 1);
    });

    if(sFreqMap.size !== tFreqMap.size) return false;

    let isAnagram = true
    sFreqMap.forEach((value: number, key: Char, map: any) => {
        if(!tFreqMap.has(key)) {
            isAnagram = false
        } else if(value !== tFreqMap.get(key)) {
            isAnagram = false
        }
    })

    return isAnagram;
};