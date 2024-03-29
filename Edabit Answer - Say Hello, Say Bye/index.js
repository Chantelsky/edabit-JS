// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

// Examples
// sayHelloBye("alon", 1) ➞ "Hello Alon"

// sayHelloBye("Tomi", 0) ➞ "Bye Tomi"

// sayHelloBye("jose", 0) ➞ "Bye Jose"
// Notes
// The name you return must be capitalized.

const sayHelloBye = (name,num) => num === 1 ?
`Hello ${name.charAt(0).toUpperCase() + name.slice(1)}` :
`Bye ${name.charAt(0).toUpperCase() + name.slice(1)}`; 