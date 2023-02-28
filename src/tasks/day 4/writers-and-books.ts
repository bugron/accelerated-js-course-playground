const writers = [
  {
    author: "Hovhannes Tumanyan",
    book: "Giqor",
  },
  {
    author: "Hovhannes Shiraz",
    book: "Ani",
  },
  {
    author: "Eghishe Charenc",
    book: "Yerkir Nairi",
  },
  {
    author: "Hovhannes Tumanyan",
    book: "The dog and cat",
  },
  {
    author: "Derenik Demirchyan",
    book: "Vardanank",
  },
  {
    author: "Eghishe Charenc",
    book: "Land of fire",
  },
];

// Sample of the result
// {
//   "Hovhannes Tumanyan": ["The dog and cat", "Giqor"],
//   "Eghishe Charenc": ["Land of fire"]
// ...
// }

// TIPS
// .reduce() on the writers array

// An example of how .reduce works
// initially accumulator is {}
// [1, 2, 3, 4, 5].reduce(function (accumulator, currentElementOfArray) { // 1, 2, 3 ....
//   return ...;
// }, {});

// const authorsAndBooks = writers.reduce(function (booksObject, currentAuthorAndBook) {
//   if ('author exists') // add the book to the key
//   if ('author does not exist') // add the key in booksObject and then add the book to the key
// booksObject[currentAuthor] = 'fasdfasdf'

//   return booksObject
// }, {})

// console.log(authorsAndBooks)
