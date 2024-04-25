let {Shape} = require('./Shape.js'); 

class Rectangle extends Shape {
    constructor(name, sideOne, sideTwo){
        super(name);
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;

     
         }
    }
    getArea(){
        return this.sideOne * this.sideTwo;
    }

    isSquare(sideOne, sideTwo){
        if(sideOne === sideTwo){
            return true;
        } else {
            return false;
        }
    }

}

module.exports = {Rectangle};