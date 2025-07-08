function maximumLengthSubstring(s:string):number {
    let right = 0;
    let left = 0
    let max = 1
    let stringLength = s.length
    const counter: Record<string, number> = {};

    while (right < stringLength - 1) {
        right++
        const char = s[right];

        counter[char] = (counter[char] || 0) + 1;

        while (counter[char] === 3) {
            const leftChar = s[left];
            counter[leftChar]--;
            left++
        }
        
        max = Math.max(max, right - left +1);
    }
    return max;
}


const minhaString = "bcbbbcba";
const resultado = maximumLengthSubstring(minhaString);
console.log(`Para a string "${minhaString}", o resultado é: ${resultado}`); 