const insertionSort = (input) => {
    for(let i = 1; i < input.length ; i++) {
        let j = i - 1;

        let current = input[i];
        while(j >= 0 && current < input[j]) {
            input[j + 1] = input[j];
            j--;
        }
        
        input[j + 1] = current;   
    }
}

const input = [2, 68, 13, 1, 49, 2, 58, 12, 45];

insertionSort(input);

console.log('input', input);