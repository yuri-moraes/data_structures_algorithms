function binarySearch(ordened_array: number[], target: number): number {
    let low = 0;
    let high = ordened_array.length;
    let steps = 0;

    while (low < high) {
        steps++;
        let mid = Math.floor((low + high)/2);
        if (ordened_array[mid] === target) {
            console.log("Steps", steps);
            return mid;
        }
        else if (ordened_array[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    console.log("Target not found after", steps, "steps.");
    return -1;
}

const a = [1,2,3,4,5,6,7,8,9,10]
const b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]

binarySearch(c, 3);
