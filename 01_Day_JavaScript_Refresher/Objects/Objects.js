const dogs = {
    name: "Buksi",
    age: 5,
    legs: 4,
    color: "black",
    bark: () => {
        return "Woof Woof"
    },
}

dogs.getDogInfo = () => {
    return `Dog's name is: ${dogs.name}, it's age is: ${dogs.age} years old, it has ${dogs.legs} legs, and it's color is ${dogs.color}`
}

console.log(dogs.getDogInfo())