const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")


// Debounce - instead of running the function every time the input event is triggered, it will wait for a certain amount of time 
// before running the function


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

// Throttle - it delays function call, but instead of waiting for everything is done, as soon as you make the change the request is sent
// and every second

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