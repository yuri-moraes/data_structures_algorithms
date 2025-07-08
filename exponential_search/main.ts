const _binarySearch = (array: (string[]| number[]), target: (string|number), low = 0, high: any):(string|number) => {
    if (typeof(high) === "undefined") {
        high = array.length -1;
    }

    while (low < high) {
        const mid: number = Math.floor((low  + high)/2);

        if (array[mid] === target) {
            return mid;
        }
        else if (array[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    return -1;

}

function exponential_search(array: (string[]| number[]), target: (string|number)): (string|number) {
    const length = array.length;

    if (length === 0) {return -1;};

    if (array[0] === target) {
        return 0;
    }
    
    let indice = 1;

    while (indice < length && array[indice] < target) {
        indice*=2;
    }

    if (array[indice] === target) {
        return indice;
    }

    const lowBound = Math.floor(indice / 2);
    const highBound = Math.min(indice, length - 1);

    console.log(`Searching between index ${lowBound} and ${highBound}`);
    
    return _binarySearch(array, target, lowBound, highBound);
}

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,20,30,31,32,33,34,35,36,37,38,39,40];
const target = 32;
console.log(exponential_search(array, target));