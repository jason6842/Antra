// SELECT ITEMS
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery'); // input
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn')

// Edit option
let editElement;
let editFlag = false;
let editID = "";

// Event Listeners
/// submit form
form.addEventListener('submit', addItem);

// Functions
function addItem(e) {
    e.preventDefault(); // prevents default behavior of submitting the form
    console.log(grocery.value);
    const value = grocery.value;
    const id = new Date().getTime().toString(); // not a good approach, but good for practice project
    // console.log(id);
    
    // 3 Options of submitting the form 
    // 1. If there is an item, add it to the list, if edit is False
    // 2. If editing is true
    // 3. If user hasn't added any value
    if (value && editFlag === false) {
        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        console.log(attr);
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>`;
        // append child
        groceryList.appendChild(element);
        console.log("Add item to the list")
        // display alert
        displayAlert('Item added to the list.', 'success');
        // show container
        groceryContainer.classList.add('show-container');

        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    } else if (value && editFlag === true) {
        console.log("Editing")
    } else {
        console.log("Empty value");
        displayAlert('Please enter a value', 'danger');
    }
}

//display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    
    // remove alert
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

// set back to default
function setBackToDefault() {
    console.log('Set back to default');
}


// Local Storage
function addToLocalStorage(id, value) {
    console.log('Added to local storage');
}
// Setup Items