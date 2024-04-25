// console.log(calc(4)(2));

// function calc(x){
//     function secondNumber(a){
//         return a * x;
//     }
//     // console.log(secondNumber(2))
//     return secondNumber;
// }


// function higherOrderFunction(func){
//     console.log("higher function")
//     func();
// }

// // function lowerOrderFunction(){
// //     console.log("lower function")
// // }

// higherOrderFunction(function lowerOrderFunction(){
//     console.log("lower function")
// });

// function higherOrderFunction(func){
//     console.log("higher function")
//     func();
// }

// // function lowerOrderFunction(){
// //     console.log("lower function")
// // }
// higherOrderFunction(() =>{
//     console.log("lower function")
// });


function greetings(greet){
    return function person(name){
        return `Hello, ${name}. ${greet}`;
    }
}

console.log(greetings("Good morning!")("John"));

const num = 2;

function exampleFunction(){
    let lastName = "ugbo";
    if (true){
        let firstName = "chinedu";
        console.log("i print from if block",num);
        console.log("i print from if block",lastName);

    }
        console.log("i print from function scope",num);
        console.log("i print from function scope",lastName);

}
console.log("i print from outside function scope",num);
console.log("i print from outside function scope",las);

exampleFunction();
