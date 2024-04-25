let animal = {
    type: "Unknown",
    sound: function(){
        console.log("The" + this.type + "make a sound")
    }
}

let dog = Object.create(animal);
dog.type = "Dog";
dog.color = "Brown"

dog.sound();
console.log(dog)