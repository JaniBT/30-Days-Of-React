class Animal {
    constructor (name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
     
    eat() {
        return `${this.name} is eating right now!`
    }
}

class Dog extends Animal {
    eat() {
        return `${this.name} is eating while standing on ${this.legs} legs`
    }
}

class Cat extends Animal {

}

const animal1 = new Animal("Sanyi", 5, "black", 4)
const dog1 = new Dog("Buksi", 2, "black", 3)
console.log(animal1.eat())
console.log(dog1.eat())