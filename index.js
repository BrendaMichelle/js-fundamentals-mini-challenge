// Q1
let counter = 1
counter = 2
// console.log(counter) 



// Q2
const name = "Ben"
//name = "Not Raffy" 



// Q3
function drinkWater(currentThirstLevel) {
  console.log("Man I sure am thirsty")
  currentThirstLevel -= 1
  console.log("Ahh that hits the spot")
  return currentThirstLevel
}
//console.log(drinkWater(12))



// Q4
function sameSameButDifferent(num, maybeNum) {
  if (num === maybeNum)
    return "same same"
  else if (num == maybeNum)
    return "same same (but different)"
    else return "different"
}
// console.log(sameSameButDifferent(5, 5)) 
// console.log(sameSameButDifferent(123, "123")) 
// console.log(sameSameButDifferent(5, 7)) 
// console.log(sameSameButDifferent(123, "122")) 



// Q5
function updateGrade(student, newGrade) {
  student = student,
  grade = newGrade
}
// const student1 = { name: "Duane", grade: 88 }
// updateGrade(student1, 92)
// console.log(student1)



// Q6
function printNameAndPhones(user) {
  users.forEach(user => {
    console.log(user.name)
    console.log(`Cell: ${user.phones.cell}`)
    console.log(`Office: ${user.phones.office}`)
  })
}

// users = [
//   { 
//     name: "Duane",
//     phones: {
//       cell: "555-123-4567",
//       office: "555-456-7890",
//     }
//   },
//   {
//     name: "Liza",
//     phones: {
//       cell: "555-234-5678",
//       office: "555-567-1234"
//     }
//   }
// ]
// printNameAndPhones(users)


// Callbacks Q  `myMap`
function myMap(array, callback) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    const value = callback(element)
    result.push(value)
  }
  return result
}

// Callbacks Q1
function triple(num) {
  return num * 3
}
// console.log(myMap([1,2,3,4,5], triple)) 


// Callbacks Q2
function greet(names) {
  return `Hi Hello Sup ${names}`
}
// console.log(myMap(["Raffy", "Chase"], greet)) 


// Scope & Closure
function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}
// const line = []
// console.log(takeANumber(line, "Loren"))
// console.log(takeANumber(line, "Liza"))
// console.log(nowServing(line))
// console.log(nowServing(line))

//Scope & Clos Q1
function takeATicketNumber(lineArr) {
  //let tickNum = 1
  let tickNum = lineArr.length
  if (!lineArr.length) {
    return "Welcome. You are ticket number 1"
  } 
  return `"Welcome. You are ticket number ${tickNum}`
}

 const line = []

console.log(takeATicketNumber(line))
console.log(takeATicketNumber(line))
console.log(nowServing(line))
console.log(nowServing(line))
console.log(takeATicketNumber(line))

// THIS FUNCTION I MADE ISNT WORKING CORRECTLY. ITS NOT INCREMENTING THE NUMBER
// ALSO THE LINE VARIABLE IN THE ABOVE FUNCTION HAD TO BE COMMENTED OUT
// I DIDNT GET TO BONUS Q WILL TRY TOMORROW

//Scope & Clos Q2
