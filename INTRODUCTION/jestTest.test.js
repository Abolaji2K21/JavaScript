const addNumbers = require("./add.js");

// let addNumbers = require("./add.js")



test("Add two numbers ", () =>{
    let a = 3 
    let b = 5 

    let answer = addNumbers(a,b)

    expect(answer).toBe(8)
})