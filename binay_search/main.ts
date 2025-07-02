function binarySearch(ordened_array: number[], target: number): number | undefined {
    let low:number = 0;
    let high:number = ordened_array.length;
    let steps:number = 0;

    while (low < high) {
        steps++;
        let mid: number = ((low + high)/2);
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
        return -1;
    }
}

const a = [1,2,3,4,5,6,7,8,9,10]
const b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]

const result = binarySearch(a, 3);
