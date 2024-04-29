const countries = require('./countries')
const webTechs = require('./web_techs')

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let punctuatedText = text.split(/[., ]/)
let filteredTextArray = punctuatedText.filter(text => text != '')
console.log(filteredTextArray)
console.log(filteredTextArray.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
// console.log(shoppingCart)
shoppingCart.push("Sugar")
// console.log(shoppingCart)

// console.log(shoppingCart.filter(item => item !== "Honey"))
// const indexOfTea = shoppingCart.indexOf("Tea")
// shoppingCart.splice(indexOfTea, 1, "Green Tea")
// console.log(shoppingCart)

// if (countries.includes("Ethiopia")) {
//     console.log("ETHIOPIA")
// } else {
//     countries.push("Ethiopia")
// }

// console.log(countries)

if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocessor")
} else {
    webTechs.push("Sass")
    console.log("Adat felvéve")
}