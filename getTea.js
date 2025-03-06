//1 
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line



//2
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);



//3
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.slice(0, index); 
    const tabsAfterIndex = this.tabs.slice(index + 1); 
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 
    // Only change code above this line
  
    return this;
  };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() 
    .join(videoWindow.tabClose(2)) 
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);
 


  //4
   // The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue + 1;
  // Only change code above this line
}



//5
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {
return fixedValue + 1

  // Only change code above this line
}




//6
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  return [...arr, bookName];
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  const newArr = [...arr];
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {
    newArr.splice(book_index, 1);
    return newArr;
    // Change code above this line
  }
  return newArr;
}




//7
// Only change code below this line

const ratings = watchList.map(movie => ({
    title: movie["Title"],
    rating: movie["imdbRating"]
  }));
  
  // Only change code above this line
  
  


  //8
  Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    // Only change code above this line
    return newArray;
  };




  //9
// Only change code below this line

const filteredList = watchList
  .filter(movie => parseFloat(movie.imdbRating) >= 8.0)
  .map(movie => ({ title: movie.Title, rating: movie.imdbRating }));

// Only change code above this line

console.log(filteredList);




//10
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    // Only change code above this line
    return newArray;
  };




//11
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice);
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);


  

//12
function nonMutatingSplice(cities) {
    return cities.slice(0, 3);
  }