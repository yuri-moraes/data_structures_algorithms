function firstUniqChar(string:string): number {
    const charMap = new Map<string, [number, number]>();

    for (let i = 0; i< string.length; i++) {
        const char = string[i];
        if(!charMap.has(char)) {
            charMap.set(char, [i, 1]);
        }
        else {
            const currentVal = charMap.get(char)!;
            currentVal[1]++;
            charMap.set(char, currentVal);
        }
    }

    for (const [char, val] of charMap.entries()) {
        const count = val[1];
        if (count === 1) {
            const firstIndex = val[0];
            return firstIndex;
        }
    }

    return -1;
}

const sol = "leetcode";
console.log(`Letter = ${firstUniqChar(sol)}`); 

const sol2 = "loveleetcode";
console.log(`Letter = ${firstUniqChar(sol2)}`);

const sol3 = "aabb";
console.log(`Letter = ${firstUniqChar(sol3)}`);