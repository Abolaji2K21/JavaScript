function addNumbers(x,y){
    let answer = x + y 
    return answer
}

addNumbers(5,7)


function evenNumber(numbers){
    return numbers.filter(number => number % 2 == 0)

}

module.exports = {addNumbers, evenNumber}
