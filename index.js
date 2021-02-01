// ***** Question 1 *****
// *** Uncomment the lines below to test
let counter = 1
counter = 2
console.log("%cQuestion 1", "color: red") 

console.log(counter) 
// => 2
console.log("%c----------", "color: red") 


// ***** Question 2 *****
// *** Uncomment the lines below to test
const name = "shmuly"
// *** after testing, comment the line causing the error back in 
// *** otherwise, the error will stop the rest of your code from running
console.log("%cQuestion 2", "color: red") 

console.log(name)
// => "Raffy"
// name = "Not Raffy" 
// => TypeError
console.log("%c----------", "color: red") 



// ***** Question 3 *****
// *** Uncomment the lines below to test
function drinkWater(currentThirstLevel){
  console.log("Man I sure am thirsty")
  currentThirstLevel --
  console.log("Ahh that hits the spot")
  return currentThirstLevel
}
console.log("%cQuestion 3", "color: red") 

console.log(drinkWater(12))
// // => "Man I sure am thirsty"
// // => "Ahh that hits the spot"
// // => 11
console.log("%c----------", "color: red") 



// ***** Question 4 *****
function sameSameButDifferent(num, maybeNum){
  if(num === maybeNum){
    return "same same"
  } else if(num == maybeNum){
    return "same same (but different)"
  } else {
    return "different"
  }
}
// *** Uncomment the lines below to test
console.log("%cQuestion 4", "color: red") 

console.log(sameSameButDifferent(5, 5)) 
// // => "same same"

console.log(sameSameButDifferent(123, "123")) 
// // => "same same (but different)"

console.log(sameSameButDifferent(5, 7)) 
// // => "different"

console.log(sameSameButDifferent(123, "122")) 
// // => "different"
console.log("%c----------", "color: red") 



// ***** Question 5 *****
function updateGrade(student, newGrade){
  student.grade = newGrade
}
// *** Uncomment the lines below to test
console.log("%cQuestion 5", "color: red")
const student1 = { name: "Duane", grade: 88 }
updateGrade(student1, 92)
console.log(student1)
// // => { name: "Duane", grade: 92 }
console.log("%c----------", "color: red")



// ***** Question 6 *****
function printNameAndPhones(users){
  for (let user in users){
    console.log(users[user].name)
    console.log(`Cell: ${users[user].phones.cell}`)
    console.log(`Office: ${users[user].phones.office}`)
  }
}
// *** Uncomment the lines below to test
console.log("%cQuestion 6", "color: red")

const users = [ 
  { 
    name: "Duane", phones: { cell: "555-123-4567", office: "555-456-7890" }
  },
  { 
    name: "Liza", phones: { cell: "555-234-5678", office: "555-567-1234" }
  }
]
printNameAndPhones(users)
// // => "Duane"
// => "Cell: 555-123-4567"
// => "Office: 555-456-7890"
// => "Liza"
// => "Cell: 555-234-5678"
// => "Office: 555-567-1234"
console.log("%c----------", "color: red") 


// ***** Callbacks *****

function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}

// ***** Callbacks - Question 1 *****
function triple(element){
  return element * 3
}
// *** Uncomment the lines below to test
console.log("%cCallbacks - Question 1", "color: red")

console.log(myMap([1,2,3,4,5], triple)) 
// => [3,6,9,12,15]

console.log(myMap([2,4,6,8], triple))   
// => [6,12,18,24]
console.log("%c----------", "color: red") 


// ***** Callbacks - Question 2 *****
function greet (element){
  return `Hi, ${element}!`
}
// *** Uncomment the lines below to test
console.log("%cCallbacks - Question 2", "color: red")

console.log(myMap(["Raffy", "Chase"], greet)) 
// => ["Hi, Raffy!", "Hi, Chase!"]
console.log("%c----------", "color: red") 



// ***** Scope & Closures *****
// let num = 0
// function takeATicketNumber(line) {
//   num ++
//   line.push(num)

//   return `Welcome. You are ticket number ${num}`
// }

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

const line = []

// ***** Scope & Closures - Question 1 *****


// *** Uncomment the lines below to test
console.log("%cScope & Closures - Question 1", "color: red")

// console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 1`

// console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 2`

// console.log(nowServing(line))
// // => `Currently serving 1.`

// console.log(nowServing(line))
// // => `Currently serving 2.`

// console.log(takeATicketNumber(line))
// // => `Welcome. You are ticket number 3`

console.log("%c----------", "color: red") 

// ***** Scope & Closures - Question 2 *****
// *** Uncomment the lines below to test
console.log("%cScope & Closures - Question 2", "color: red")
function ticketNumberGeneratorFunc(){
  let num = 0

  function takeATicketNumber(line) {
    num ++
    line.push(num)
  
    return `Welcome. You are ticket number ${num}`
  }

  return takeATicketNumber

}
const newLine = []
const takeATicketNumberFunc = ticketNumberGeneratorFunc()
console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 1`

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 2`

console.log(nowServing(newLine))
// => `Currently serving 1.`

console.log(nowServing(newLine))
// => `Currently serving 2.`

console.log(takeATicketNumberFunc(newLine))
// => `Welcome. You are ticket number 3`

console.log("%c----------", "color: red") 