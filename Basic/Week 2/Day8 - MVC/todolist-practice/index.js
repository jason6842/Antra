async function logFn() {
    const id1 = await todosAPI.getByID("1");
    console.log(id1);
    const allTodos = await todosAPI.getAll();
    console.log(allTodos);
    allTodos.forEach((todo) => {
        console.log(todo);
    })

    const newTodo = await todosAPI.add({ "task": "trash", "isCompleted": false});
    console.log(newTodo);

    await todosAPI.deleteByID("dc92");

    await todosAPI.edit("fbb3", { "task": "trash1", "isCompleted": true});
}

class ToDosModel {
    #todosList;

    constructor () {
        this.#todosList = []
    }

    getAllTodo() {
        return this.#todosList;
    }

    setTodos(todos) {
        this.#todosList = todos;
    }

    addTodo(task) {
        this.#todosList.push(task);
    }

    editTodo(id, task) {
        this.#todosList.map((todo) => {
            if (todo.id === id) {
                return task;
            } else {
                return todo
            }
        })
    }

    removeTodo(id) {
        this.#todosList = this.#todosList.filter((todo) => {
            return todo.id !== id;
        })
    }

}

class ToDosView {
    constructor () {
        this.todoListsElem = document.querySelector(".todos-list");
        this.todoForm = document.querySelector(".todo-form");
        this.todoInput = document.querySelector(".todo-input");
    }

    renderTodos(todos) {
        this.todoListsElem.innerHTML = "";
        for (const todo of todos) {
            this.addTodo(todo);
        }
    }

    addTodo(newTodo) {
        const { id, task, isCompleted } = newTodo;
        this.todoListsElem.innerHTML += `
                <div class="todo" id=todo-${id}>
                    <input type="checkbox" class="todo-checkbox">
                    <span class="todo-task">${task}</span>
                    <button class="todo-edit-btn">
                        <img src="icons8-edit.svg" width="12" height="12">
                    </button>
                    <button class="todo-delete-btn">
                        <img src="icons8-trash.svg" width="12" height="12">
                    </button>
                </div>
        `
        // document.querySelector(".completed").checked = isCompleted;
    }

    removeTodo(id) {
        const todoElement = document.getElementById(`todo-${id}`);
        todoElement.remove();
    }


}

class ToDosController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    async init() {
        // 1. Retrieve any data from the database
        const todos = await todosAPI.getAll();
        
        // 2. Give the data to the model
        this.model.setTodos(todos);
        console.log(this.model.getAllTodo());

        // 3. Render existing todos
        this.view.renderTodos(todos);

        // 4. Setting up event listeners
        this.setupAddEvent();
        this.setupDeleteEvent();
    }

    // Add Event 
    setupAddEvent() {
        this.view.todoForm.addEventListener("submit", async (e) => {
            e.preventDefault(); // prevents the form from submitting

            const newTodoTask = this.view.todoInput.value; // the value from the input box
            // calls the api object and use PUT request on the new object
            const newTodo = await todosAPI.add({
                task: newTodoTask,
                isCompleted: false,
            });
            // After the new object is added to the database without a problem
            // Add to model list
            this.model.addTodo(newTodo);
            this.view.addTodo(newTodo);
        })
    }

    // Delete Event
    setupDeleteEvent() {
        // Event delegation - adding an event listener to the parent instead of multiple child elements
        // use event.target to determine which child element triggered the target
        this.view.todoListsElem.addEventListener("click", async (e) => {
            e.preventDefault(); // if the button is not in the form, this is not required
            if (e.target.classList.contains("todo-delete-btn")) {
                const todoElement = e.target.parentElement;
                const id = todoElement.id.split("-")[1]; // splits into ["todo", id]

                await todosAPI.deleteByID(id);
                this.model.removeTodo(id);
                this.view.removeTodo(id);
            }
        })
    }

    // // Edit Event
    // setupEditEvent() {}

    // // Checkbox Event 
    // setupCheckboxEvent() {
    //     this.view.todoListsElem.addEventListener("change", async (e) => {
    //         e.preventDefault();
    //         if (e.target.classList.contains("todo-checkbox")) {
    //             const todoElement = e.target.parentElement;
    //             const id = todoElement.id.split("-")[1];


    //         }
    //     })
    // }
}

const todosModel = new ToDosModel();
const todosView = new ToDosView();
const todosController = new ToDosController(todosModel, todosView);

