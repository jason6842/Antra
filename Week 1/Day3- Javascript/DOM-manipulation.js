// 14 techniques to manipulate the DOM
const body = document.body;

// 1. createElement() - create an element
const div = document.createElement("div"); // create a div element, but not yet added to the DOM

// 2. innerText - add text to the element, only the text content
div.innerText = "Hello World";

// 2.5 textContent - add text to the element, exact text content that includes spaces, line breaks, indentations, etc
// div.textContent = "Hello World";

// 3. append() - add the element to the DOM
//    appendChild() - can only append elements such as <div> <p> <h1> etc
body.append(div); // append the div to the body

// 4. innerHTML - add HTML to the element (huge security risk)
div.innerHTML = "<h1>Hello World</h1>";

// 5. querySelector() - select the first element that matches the selector
const div1 = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

spanBye.remove(); // remove the element from the DOM
div1.append(spanBye); // append the element to the div
// div1.removeChild(spanHi); // remove the element from the div (same as div1.remove())

// MOST COMMONLY USED
const spanAttribute = spanHi.getAttribute("id"); // get the value of the attribute
console.log(spanAttribute); // hi
// same as
console.log(spanHi.id); // hi


console.log(spanHi.getAttribute("title")); // get the value of the title attribute
console.log(spanHi.title); // get the value of the title attribute

console.log(spanHi.textContent); // get the text content of the element

// 6. setAttribute() - set the value of the attribute
spanHi.setAttribute("title", "newTitle"); // set the value of the title attribute
spanHi.title = "newTitle"; // set the value of the title attribute

// 7. removeAttribute() - remove the attribute
spanHi.removeAttribute("title"); // remove the title attribute

// 8. dataset - get the data attribute
console.log(spanHi.dataset); // get the data attribute object
console.log(spanHi.dataset.test); // get the value of the data-test attribute
console.log(spanHi.dataset.longerName); // get the value of the data-longer-name attribute

spanHi.dataset.longerName = "New Name"; // set the value of the data-longer-name attribute to New Name
console.log(spanHi.dataset.longerName);

// 9. classList - get the classList of the element
spanBye.classList.add("new-class"); // add a new class to the element
console.log(spanBye.classList); // list of all of the element's classes

spanBye.classList.remove("bye1"); // remove a class from the element

spanBye.classList.toggle("remove-if-exist-add-if-not"); // toggle a class from the element
console.log(spanBye.classList);

spanBye.classList.toggle("add-if-true", true);
console.log(spanBye.classList);

spanBye.classList.toggle("remove-if-false", false); 
console.log(spanBye.classList);


// 10. style - access any CSS property of the element
spanHi.style.backgroundColor = "red"; // set the background color of the element to red (background-color -> backgroundColor)
spanHi.style.color = "white"; // set the text color of the element to white
spanHi.style.padding = "100px"; // set the padding of the element to 100px