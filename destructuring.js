//Destructuring objects

const Person = {
  name: "hamza",
  age: 28,
  address: {
    city: "islamabad",
    country: "Pakistan",
  },
};

const { name, age } = Person;
const {
  address: { city },
} = Person;
console.log(name);
console.log(age);
console.log(city);

const book = getBook(2);
book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title);

//Destructuring with arrays
const array = [1, 2, 3, 4, 5];
//rest operator
const [first, third, ...rest] = array;
console.log(first, third, rest);

//spread operator->takes all the values from array and place 1 by 1 and
const newElement = [...array, 6];
console.log(newElement);

//rest operator
const movies = ["MI6", "MI7", "Pathan", "Hamsafr"];
const [one, ...others] = movies;
console.log(one, others);

const mybook = {
  author: "hamza",
  age: "22",
  title: "0 Fucks Given!",
};

//adding property to last using spread
const newProperty = { ...mybook, pages: "584" };
console.log(newProperty);

//adding to start using spread
//spread is used to update the properties of object
const addtoStart = { bookNo: "10", ...mybook };
console.log(addtoStart);

//template literals ->you can also pass a function in templte literals

function add() {
  let var1 = 4;
  let var2 = 8;
  return var1 + var2;
}

const string = `The function named add returns the sum of 4 and 8 which is: ${add()}`;

console.log(string);

//terniary operator
const page = 1000;
const count =
  page < 1000 ? "pages are less than 1000" : "pages are more than 1000";
console.log(count);

const myage = 18;
const res = myage < 18 ? "Not a teen-ager" : "A teen-ager";
console.log(res);
