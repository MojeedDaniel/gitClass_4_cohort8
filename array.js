//array stores multiple values in a single variable
const arr = [1 , "Daniel", true , [1 , 2 , 3]]

let student1 = "Sarah"
let student2 = "Esther"
let student3 = "Ada"

let students = ["Sarah", "Esther", "Ada", "Daniel"]
console.log(students[0])
console.log(students.length)
//changing the value in an array
students[3] = "yomi"
console.log(students)

// push adds items to the end of an array
students.push("Uzoma")
console.log(students)
//unshift add items to the beginning of an array
students.unshift("Tolu")
console.log(students)

//pop removes the last item in an array
students.pop()
console.log(students)
//shift removes the first item in an array
students.shift()
console.log(students)

//includes checks if an item is in an array
console.log(students.includes("Daniel"))
//indexOf returns the index of an item in an array
console.log(students.indexOf("Daniel"))

//reverse reverses the order of an array
students.reverse()
console.log("this is reverse:" ,students)


//sort sorts the items in an array in ascending order
students.sort()
console.log("this is sort:" ,students)



//slice returns a portion of an array 
students.slice(1,3)
console.log(students)


//splice removes items from an array and can add new items in their place
students.splice(1, 2)
console.log(students)

//higher order array method accept another function 
// as a parameter or arguement, the functions are known as call back function


//map method create a new array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubledNmbers = number.map((num) => num * 2)
console.log(doubledNmbers)
//const double = numbers.map((num) =>{
    // return num * 2;
    //})

const marketList = ["rice", "beans", "garri", "yam", "plantain"]
const addPrefix = marketList.map((item) => "i will buy: " + item)
console.log(addPrefix)

//filter method return items or element that matches a condition
const evenNumbers = number.filter((num) => num % 2 === 0)
console.log(evenNumbers)

const complexion = ["dark", "fair", "medium", "dark", "fair"]
const darkComplexion = complexion.filter((item) => item === "dark")
console.log(darkComplexion)

//find method returns the first item that matches a condition
const findFirstDark = complexion.find((item) => item === "dark")
console.log(findFirstDark)

//find index method returns the index of the first item that matches a condition
const findIndexDark = complexion.findIndex((item) => item === "dark")
console.log(findIndexDark)

//reduced method reduces an array to a single value
const nums = [700, 300, 500, 1000, 2000]
const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

const multiply = nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
console.log(multiply)