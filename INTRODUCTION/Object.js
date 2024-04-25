let animal = {
    type: "Unknown",
    sound: function(){
        console.log("The" + this.type + "make a sound")
    }
}

let dog = Object.create(animal);
dog.type = "Dog";
dog.color = "Brown"

let cat = animal
cat.type = "Cat";
cat.color = "Black"

dog.sound();
console.log(dog)
console.log(animal)

let goat = {
    color: "Black"
}
Object.setPrototypeOf(goat, animal);
goat.type = "Goat";
console.log(goat)

let human = {}
Object.setPrototypeOf(human, animal)
human.type = "Human"
console.log(human)

let Cow = Object.create(animal)
Cow.type = "COW";
Cow.color= "Black";
Cow.sex = "Female"

console.log(Cow)


let vehicle = {wheels : 4};
let car = {
    seats : 5,
    __proto__: vehicle,
    wheels : 6
};


// console.log('Vehicle:', vehicle, vehicle.proto);
console.log('Car:', car, car.__proto__);
// console.log('Car Wheels:', car.wheels);


function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex


    this.sayName = function(){
        console.log(this.name)
    }

}

const PersonOne = new Person("Jumoke", 13, "Female")

console.log(PersonOne.name)
console.log(PersonOne.age)


const PersonTwo = new Person("Dayo", 45, "Female")

console.log(PersonTwo.name)
console.log(PersonTwo.age)
console.log(PersonTwo.sex)


const json = '{"result" : true, "count" : 42}'
const obj = JSON.parse(json)
console.log(obj.count)

console.log(obj.result)