const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")


// Debounce - ensures that a function is executed only after a certain DELAY has passed since the last event was triggered.
// If the event occurs again before the delay ends, the timer resets.


// Update the text content of the debounce element
const updateDebounceText = debounce((text) => {
    debounceText.textContent = text;
})

const updateThrottleText = throttle((text) => {
    throttleText.textContent = text;
})

// Update the text content of the throttle element
input.addEventListener("input", e => {
    defaultText.textContent = e.target.value
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
})

// Debounce function
function debounce(callback, delay = 1000) {
    let timeout;
    clearTimeout(timeout)
    return (...args) => {
        timeout = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}

// Throttle - ensures that a function runs at most once in a specified amount of time, no matter how many times the event is triggered.

// Throttle function - runs immediately when you call the function
function throttle(callback, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false;
        } else {
            callback(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay)
        }
        
    }

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        callback(...args);
        shouldWait = true;

        setTimeout(timeoutFunc, delay);
    }
}

document.addEventListener("mousemove", e => {
    incrementCount(defaultText);
})

function incrementCount(element) {
    element.textContext = (parseInt(element.innerText) || 0) + 1; // increment the count
}