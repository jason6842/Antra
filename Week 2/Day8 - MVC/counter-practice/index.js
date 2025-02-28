// const COUNTER_API_URL = "http://localhost:3000/count"; // remember "http://"

class CounterModel {
    // create a private count variable
    #count;

    constructor() {
        this.#count = 0;
    }

    getCount() {
        return this.#count;
    }

    setCount(newCount) {
        this.#count =  newCount;
    }

    incrementCount() {
        this.#count += 1;
    }

    decrementCount() {
        this.#count -= 1;
    }
}

class CounterView {
    constructor() {
        this.countElement = document.querySelector(".count");
        this.incrementBtn = document.querySelector(".add-btn");
        this.decrementBtn = document.querySelector(".minus-btn");
    }

    updateCount(newCount) {
        this.countElement.textContent = newCount;
    }
}

class CounterController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.handleIncrementEvent();
        this.handleDecrementEvent();
        this.init();
    }

    // called when instance is created
    async init() {
        const count = await this.fetchCount();
        this.model.setCount(count);
        this.view.updateCount(count);
    }

    // The controller should be fetching the data
    async fetchCount() {
        const res = await fetch(COUNTER_API_URL);
        console.log(res);
        const data = await res.json(); 
        console.log(data.count);
        return data.count;
    }

    handleIncrementEvent() {
        this.view.incrementBtn.addEventListener("click", async () => {
            const count = this.model.getCount();
            try {
                await updateCountAPI(count + 1); // attempt to update the database before displaying the update

                this.model.incrementCount();
                this.view.updateCount(this.model.getCount());
            } catch (error) {
                console.log(error);
            }
        })
    }

    handleDecrementEvent() {
        this.view.decrementBtn.addEventListener("click", async () => {
            const count = this.model.getCount();

            try {
                await updateCountAPI(count - 1);

                this.model.decrementCount();
                this.view.updateCount(this.model.getCount());
            } catch (error) {
                console.log(error);
            }
        })
    }
    
}

const counterModel = new CounterModel();
const counterView = new CounterView();
const counterController = new CounterController(counterModel, counterView);