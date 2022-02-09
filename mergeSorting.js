const mergeSort = (arr) => {
    if(arr.length < 2) return arr;

    const m = Math.floor(arr.length/2);
    const arr1 = arr.slice(0, m);
    const arr2 = arr.slice(m, arr.length);

    const sorted1 = mergeSort(arr1);
    const sorted2 = mergeSort(arr2);

    return merge(sorted1, sorted2);
}

const merge = (arr1, arr2) => {
    let newArr = []

    while(arr1.length && arr2.length) {
        if(arr1[0] <= arr2[0]) {
            newArr = [...newArr, arr1[0]];
            arr1.shift();
        } else {
            newArr = [...newArr, arr2[0]];
            arr2.shift()
        }
    }

    while(arr1.length) {
        newArr = [...newArr, arr1[0]];
        arr1.shift();
    }

    while(arr2.length) {
        newArr = [...newArr, arr2[0]];
        arr2.shift();
    }
    return newArr;
}



// const input = [68, 13, 1, 49, 58];
const input = [5,3,7,6,2,9];
const result = mergeSort(input, 0, input.length - 1);
console.log('result', result);


