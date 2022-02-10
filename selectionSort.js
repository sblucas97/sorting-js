const insertionSort = (input) => {
    for(let i = 0; i < input.length; i++) {
        let min = i;
        for(let j = i; j < input.length; j++) {
            if(input[j] < input[min]) {
                min = j;
            }
        }

        if(i !== min) {
            const aux = input[i];
            input[i] = input[min];
            input[min] = aux;
        }
    }
}

const input = [2, 68, 13, 1, 49, 2, 58, 12, 45];

insertionSort(input);

console.log('input', input);