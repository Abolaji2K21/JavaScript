
function range(array){
    let largest = array[0];
    let lowest = array[0];

    for(let count = 0 ; count < array.length ; count++){
        if (array[count] > largest){
            largest = array[count];
        }
        if (array[count] < lowest){
            lowest = array[count];
        }
    }

    return [largest - lowest];


}

exampleArray=[1,2,3,5,6];
console.log(range(exampleArray))
