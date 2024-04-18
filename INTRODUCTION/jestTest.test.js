let {addNumbers, evenNumber} = require("./add.js");
// let addNumbers = require("./add.js")



test("Add two numbers ", () =>{
    let a = 3 
    let b = 5 

    let answer = addNumbers(a,b)

    expect(answer).toBe(8)
})

test("Filter even number ", () => {
    let number = [1,2,3,4,5,6,7]

    let answer = evenNumber(number)

    expect(answer).toStrictEqual([2,4,6])
  

})