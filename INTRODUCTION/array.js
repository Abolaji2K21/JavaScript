let number = [1,2,3,4,5,6,7]

number.pop()
console.log(number)

number.push(8)

console.log(number)

number.shift()
console.log(number)
number.unshift(18)
console.log(number)


console.log(number.slice(1,3,2))

console.log(number.splice(1,3))

number.splice(2,3,2,3,0)
console.log(number)


// // let num = [5,10,15,20]
// // let result = number.concat(num)

// // console.log(number.concat(num))
// // console.log(result)

// let display = [["car",   2000,], ["Truck",   500, ],["Bike",   6500,]]
// // console.log(display)
// // console.log(display[0][0])
// // console.log(display[1])
// // console.log(display[2])

// // let newDisplay = [["Scotter",1500]]
// // let result = display.concat(newDisplay)

// // console.log(result)

// display[0].push(["Toyota", "Nissan"])
// display[1].push(["Ford"])
// display[2].push(["Honda"])

// console.log(display)


// let example = [[200,50,300,5],[10,25,7,100],[25,20,70,45],[500,175,11,35]]

// console.log([example[1][0],example[1][1],example[1][2]])

// example[1].pop()
// console.log(example[1])

// example[0].shift
// console.log(example[1])

// example[1].slice()
// console.log(example[1])


// let numberOne = [7,21]
// for (let count = 0; count < numberOne.length; count++ ){
//     if (numberOne[count] % 2 == 0){
//         console.log([2])
//     } else  if (numberOne[count] % 3 == 0){
//         console.log([3])
//     } else  if (numberOne[count] % 4 == 0){
//         console.log([4])
//     } else  if (numberOne[count] % 5 == 0){
//         console.log([5])
//     } else  if (numberOne[count] % 6 == 0){
//         console.log([6])
//     } else  if (numberOne[count] % 7 == 0){
//         console.log([7]) 
//     } else  if (numberOne[count] % 8 == 0){
//         console.log([8])
//     } else  if (numberOne[count] % 9 == 0){
//         console.log([9])                  

//     }
// }

// let numberOne = [6,9,12];
// for (let i = 0; i < numberOne.length; i++) {
//     for (let divisor = 2; divisor <= 9; divisor++) {
//         if (numberOne[0] % divisor === 0 && numberOne[1] % divisor === 0 && numberOne[2] % divisor === 0) {
//             console.log(divisor);

//         }

//     }
// }

let numberOne = [2,9,8];
for (let divisor = 2; divisor <= 9; divisor++) {
    let isDivisible = true;
    for (let count = 0; count < numberOne.length; count++) {
        if (numberOne[count] % divisor !== 0) {
            isDivisible = false;
            break; 
        }
    }
    if (isDivisible === true) {
        console.log(divisor);
    } 
}
