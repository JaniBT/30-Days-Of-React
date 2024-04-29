// let stringArray = []

// let countriesArray = ['Palestine', 'Yemen', 'Iran', 'Iraq', 'Israel']  // Országok, amiket szétbombáztak xd
// const lengthOfCountriesArray = countriesArray.length
// console.log(lengthOfCountriesArray)
// console.log(countriesArray[0])
// console.log(countriesArray[lengthOfCountriesArray - 1])
// console.log(countriesArray[Math.floor((lengthOfCountriesArray - 1) / 2)])

// let mixedDataTypes = ["Hello", 12, "Te", 25, "Kis", true, "Cigány", false, 4000, 25.25, 12.3]
// console.log(mixedDataTypes.length)

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon", "Hello"]
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0], itCompanies[Math.floor((itCompanies.length - 1) / 2)])
for (const company of itCompanies) {
    console.log(company)
    console.log(company.toUpperCase())
}
// Ja

const isIsraelInArray = itCompanies.includes('Facebook')
console.log(isIsraelInArray)

let filteredList = []

for (let i = 0; i < itCompanies.length; i++) {
    let currentElement = itCompanies[i]
    let numberOfLetterO = (currentElement.match(/o/g) || []).length
    if (numberOfLetterO < 2) {
        filteredList.push(currentElement)
    }
}

console.log(filteredList)
console.log(filteredList.sort())
console.log(filteredList.reverse())
console.log(filteredList.slice(0, 3))
console.log(filteredList.slice(filteredList.length - 3, filteredList.length))
console.log(filteredList.slice(Math.floor((filteredList.length - 1) / 2), Math.round((filteredList.length - 1) / 2 + 1)))

// console.log(itCompanies.shift())

// console.log(itCompanies.splice(Math.floor((itCompanies.length - 1) / 2), 1))

// console.log(itCompanies.pop())
