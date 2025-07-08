function maximumLengthSubstring(s:string):number {
    let right:number = 0;
    let left:number = 0
    let max:number = 1
    let stringLength:number = s.length
    const counter: Record<string, number> = {};

    while (right < stringLength - 1) {
        right++
        const char:string = s[right];

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