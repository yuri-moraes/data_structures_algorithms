function twoSum(nums: number[], target: number): number[] {
    const comp = new Map<number,number>();
    for(let i=0; i<nums.length; i++){
        const prevIndex = comp.get(nums[i]);
        if (prevIndex !== undefined) {
            return [prevIndex, i];
        }
        comp.set(target - nums[i], i);
    }
    return [];
}

const nums_input = [2, 7, 11, 15];
const target_input = 9;
console.log(`Two sum from ${nums_input} with target ${target_input} is ${twoSum(nums_input, target_input)}`);
// Saída esperada: Two sum from 2,7,11,15 with target 9 is 0,1

const nums_input2 = [3, 2, 4];
const target_input2 = 6;
console.log(`Two sum from ${nums_input2} with target ${target_input2} is ${twoSum(nums_input2, target_input2)}`);
// Saída esperada: Two sum from 3,2,4 with target 6 is 1,2 (porque 2 + 4 = 6)

const nums_input3 = [3, 3];
const target_input3 = 6;
console.log(`Two sum from ${nums_input3} with target ${target_input3} is ${twoSum(nums_input3, target_input3)}`);
// Saída esperada: Two sum from 3,3 with target 6 is 0,1