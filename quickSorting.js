const quickSort = (arr, start, end) => {
    if(start < end) {
        const index = partition(arr, start, end);
            
        quickSort(arr, start, index - 1);
        quickSort(arr, index + 1, end);
    }
}

const partition = (arr, start, end) => {
    const pivot = arr[start];

    let i = start;
    let j = end;
    
    while(i < j) {
        while(arr[i] <= pivot) {
            i++;
        }

        while(arr[j] > pivot) {
            j--;
        }
     
        if(i < j) {
            const aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;
        }
    }

    arr[start] = arr[j];
    arr[j] = pivot;
    return j;
}


const input = [68, 13, 1, 49, 58];
// const input = [5,3,7,6,2,9];
const result = quickSort(input, 0, input.length - 1);
console.log('input', input);




