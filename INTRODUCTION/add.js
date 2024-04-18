function addNumbers(x,y){
    let answer = x + y 
    return answer
}

addNumbers(5,7)


function evenNumber(numbers){
    return numbers.filter(number => number % 2 == 0)

}


function mapGrade(numbers){
    return numbers.map(element => {
        if (element >= 90 && element <=99){return "A"
        } else if (element >= 80 && element <=89){return "B"
        } else if (element >= 70 && element <=79){return "C"
        } else if (element >= 60 && element <=69){return "D"
        } else if (element >= 0 && element <=59){return "F"
        } else {
            return NaN
        }
    
    });
}
module.exports = {addNumbers, evenNumber, mapGrade}
