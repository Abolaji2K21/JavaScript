class Shape {
    constructor(name) {
        this.__name = name;
    }

    setName(shapeName) {
        this.__name = shapeName;
    }

    getName() {
        return this.__name; 
    }
} 

module.exports = { Shape };