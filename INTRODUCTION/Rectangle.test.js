let {Rectangle} = require("./Rectangle")

test("Test the attributes are accessible",() => {
    const rectangle = new Rectangle("Rectangle",10,15)
    let sideOne = 10;
    let sideTwo = 15;
    let area = 150;
    // let isSquare = false;
    expect(rectangle.sideOne).toBe(sideOne);
    expect(rectangle.sideTwo).toBe(sideTwo);
    expect(rectangle.getName()).toBe("Rectangle");
    expect(rectangle.getArea()).toBe(area);
    // expect(rectangle.isSquare).toBeFalsy();
})