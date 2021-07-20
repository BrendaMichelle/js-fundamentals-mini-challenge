users = [
  {
    name: "Duane",
    phones: {
      cell: "555-123-4567",
      office: "555-456-7890",
    }
  },
  {
    name: "Liza",
    phones: {
      cell: "555-234-5678",
      office: "555-567-1234"
    }
  }
]

function print_name_and_phones(users){
  users.forEach(beef)
}

function beef(user){
  console.log(user.name)
  console.log(user.cell)
  console.log(user.office)
}

console.log(print_name_and_phones(users))
