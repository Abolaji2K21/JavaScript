class Shape{
    constructor(name){
        this.name = name;
    }

    setName(shapeName){
        this.name = shapeName;
    }

    getName(){
        return this.name; 
    }
} 

module.exports = {Shape};