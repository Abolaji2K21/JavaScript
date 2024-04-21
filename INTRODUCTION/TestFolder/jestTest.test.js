let {addNumbers, evenNumber, mapGrade, mapLowestCommonFactor ,tictacktoe, mapMaximumProduct, mapMaximumProductRetry} = require("../add.js");
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

test ("Map The Grades", ()=>{
    let grade = [-1, 85, 49, 69, 59]

    let answer = mapGrade(grade)

    expect(answer).toEqual([NaN, "B", "F", "D", "F"])
})


test ("Lowest Common Factor", ()=>{
    let myArray = [14,21]
     
    let answer = mapLowestCommonFactor(myArray)

    expect(answer).toBe(7)


})

test("Generate tic-tac-toe board from elements", () => {
    let elements = [
        { row: 0, column: 0, value: "X" },
        { row: 0, column: 1, value: "X" },
        { row: 0, column: 2, value: "O" },
        { row: 1, column: 0, value: "O" },
        { row: 1, column: 1, value: " " },
        { row: 1, column: 2, value: "X" },
        { row: 2, column: 0, value: "X" },
        { row: 2, column: 1, value: "O" },
        { row: 2, column: 2, value: "O" },
    ];

    let expectedBoard = [
        ["X", "X", "O"],
        ["O", " ", "X"],
        ["X", "O", "O"]
    ];

    let result = tictacktoe(3, 3, elements);

    expect(result).toEqual(expectedBoard);
});

test("MaximumProduct", ()=>{
    let myArray = [-2, 2]
     
    let answer = mapMaximumProductRetry(myArray)

    expect(answer).toBe(4)

})


