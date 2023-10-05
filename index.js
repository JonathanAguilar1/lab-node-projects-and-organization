const words = require("./words.json")

//logs all of the words
const allWords = () => {
    return words;
}
console.log(allWords());

//logs first 10 words
const firstTenWord = () => {
    return words.slice(0,10)
}
console.log(firstTenWord())

//logs 10 words (after the first 10)
const nextTenWords = () => {
    return words.slice(10, 20)
}
console.log(nextTenWords())

// logs from 0 to x words.

const firstXWords = (x) => {
    return words.slice(0, x)
}
console.log(firstXWords())

// logs from x to y words.
const subSetOfWords = (firstWord, lastWord) => {
    return words.slice(firstWord, lastWord)
}
console.log(subSetOfWords())


// logs all the words, sorted alphabetically.

const sortOfWords = () => {
    return words.sort()
}
console.log(sortOfWords())

// returns all the words that contain the letter q

const wordsWithQ = () => {
    return words.filter((word) => word.includes('q'))
}
console.log(wordsWithQ())

// takes an argument `letter` and returns all the words with that matching letter

const wordsWithLetter = (letters) => {
    return words.filter((word) => word.includes(letters))
}

const search = process.argv[2];
const result = wordsWithLetter(search)

console.log(result)