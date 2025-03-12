
const todosAPI = (() => {
    const TODO_API_URL = "http://localhost:3000/todos";

    // GET ALL
    const getAll = async () => {
        const res = await fetch(`${TODO_API_URL}`);
        const todos = await res.json();
        return todos;
    }

    // GET by ID
    const getByID = async (id) => {
        const res = await fetch(`${TODO_API_URL}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const todo = await res.json();
        return todo;
    }

    // POST
    const add = async (newTodo) => {
        const res = await fetch(`${TODO_API_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo) // todo Object
        })
        const todo = await res.json();
        return todo;
    }

    const edit = async (id, updatedTodo) => {
        await fetch (`${TODO_API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTodo)
        })
        const todo = await res.json();
        return todo;
    } 

    const deleteByID = async (id) => {
        await fetch (`${TODO_API_URL}/${id}`, {
            method: "DELETE",
        })
    }



    return {
        getByID,
        getAll,
        add,
        edit,
        deleteByID
    }
})();