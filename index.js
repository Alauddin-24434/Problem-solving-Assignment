// 1.Task: Array Filtering and Mapping

const persion= [
    {
        name:"Alauddin",
        age:25,
        gender:"male"
    },
    {
        name:"Hamida",
        age:65,
        gender:"female"
    },
    {
        name:"Ab Aziz",
        age:70,
        gender:"male"
    },
    {
        name:"Khadiza Akter",
        age:31,
        gender:"female"
    }
]


const remaningPeople= persion?.filter(p=> p.gender ==="female").map(p=>p.name)


console.log(remaningPeople)



// 2.Task: Object Manipulation

const books = [
  { title: "Harry Potter", author: "J.K. Rowling", year: 1997 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];



const getBookTitles = books => books.map(book => book.title);

console.log(getBookTitles(books));

// 3.Task: Function Composition
const square = x => x * x;
const double = x => x * 2;
const addFive = x => x + 5;


const composedFunction = x => addFive(double(square(x)));


console.log(composedFunction(3));

// 4.Task: Sorting Objects

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2020 },
  { make: "BMW", model: "X5", year: 2017 }
];

const sortByYear = carList => carList.sort((a, b) => a.year - b.year);

const sortedCars = sortByYear(cars);
console.log(sortedCars);

// 5.Task: Find and Modify

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

function updateAgeByName(personList, targetName, newAge) {
  const person = personList.find(p => p.name === targetName);
  if (person) {
    person.age = newAge;
  }
  return personList;
}


const updatedPeople = updateAgeByName(people, "Bob", 40);
console.log(updatedPeople);

