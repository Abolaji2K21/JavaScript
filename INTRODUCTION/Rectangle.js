let { Shape } = require('./Shape.js');

class Rectangle extends Shape {
    constructor(name, sideOne, sideTwo) {
        super(name);
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
    }

    getArea() {
        return this.sideOne * this.sideTwo;
    }

    isSquare(sideOne, sideTwo) {
        return sideOne === sideTwo;
    }

    setName(shapeName) {
        this.__name = shapeName;
    }

    getName() {
        return this.__name; 
    }
}

module.exports = { Rectangle };
