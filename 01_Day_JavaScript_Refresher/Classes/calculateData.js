class Statistics {
    static array

    static setInput(array) {
        this.array = array
    }

    static count() {
        return this.array.length
    }

    static sum() {
        let summary = 0
        for (let index = 0; index < this.array.length; index++) {
            summary += this.array[index]
        }

        return summary
    }

    static min() {
        let minimumNumber = Infinity
        for (let index = 0; index < this.array.length; index++) {
            if (minimumNumber > this.array[index]) {
                minimumNumber = this.array[index]
            }
        }

        return minimumNumber
    }

    static max() {
        let maximumNumber = -Infinity
        for (let index = 0; index < this.array.length; index++) {
            if (maximumNumber < this.array[index]) {
                maximumNumber = this.array[index]
            }
        }

        return maximumNumber
    }

    static range() {
        const min = this.min()
        const max = this.max()

        return max - min
    }

    static mean() {
        const numberOfValues = this.count()
        const summary = this.sum()

        return Math.floor((summary / numberOfValues))
    }

    static mode() {
        
    }
}
 
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

Statistics.setInput(ages)
console.log(Statistics.count())
console.log(Statistics.sum())
console.log(Statistics.min())
console.log(Statistics.max())
console.log(Statistics.range())
console.log(Statistics.mean())
