const bubbleSort = (input) => {
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input.length - 1; j++) {
            if(input[i] < input[j]) {
                const aux = input[i];
                input[i] = input[j];
                input[j] = aux;   
            }
        }
    }
}

const input = [2, 68, 13, 1, 49, 2, 58, 12, 45]


bubbleSort(input);

console.log('input', input);