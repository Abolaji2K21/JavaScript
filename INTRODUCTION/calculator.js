var left_operand = 15;
var right_operand = 10;
var operator = "+";


if(operator === "-"){
    console.log(left_operand - right_operand)
} else if (operator === "+"){
    console.log(left_operand + right_operand)

} else if (operator === "*"){
    console.log(left_operand * right_operand)

}else if (operator === "/"){
    console.log(left_operand / right_operand)
 
} else {
    console.log(NaN)

}

switch(operator){
    case "*" :     console.log(left_operand * right_operand)
        break
    case "+" :     console.log(left_operand + right_operand)
        break
    case "-" :     console.log(left_operand - right_operand)
        break
    case "/" :     console.log(left_operand / right_operand)
        break

    default:      console.log(NaN)

}
