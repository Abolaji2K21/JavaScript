function calc(x){
    function secondNumber(a){
        return a * x;
    }
    // console.log(secondNumber(2))
    return secondNumber;
}



// calc(3); 
console.log(calc(3)(2));
