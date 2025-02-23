// this - referencing the object that is executing the current function

// method -> obj
// function -> global (window - browsers, global - node)
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}

video.play(); // {title: "a", play: ƒ}

video.stop = function() {
    console.log(this);
}

video.stop(); // {title: "a", play: ƒ, stop: ƒ}

// this - window object
// this - global object
function playVideo() {
    console.log(this);
}

playVideo(); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}

function Video(title) {
    this.title = title;
    console.log(this);
}

// calling a function using the 'new' keyword it creates a new empty object and sets 'this' to that object
// new - creates '{}' empty object
const v = new Video('b'); // Video {title: "b"}

const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag); // Window {window: Window, self: Window, document: document, name: "", location: Location, …} a
        }, this); // this - references to the object that is executing the current function
    }
};

// const video1 = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this, tag); // Window {window: Window, self: Window, document: document, name: "", location: Location, …} a
//         }, { firstName: "Mosh"}); // this - references to the object that is executing the current function
//     }
// };

// this references to global object because it is within an anonymous callback function
video1.showTags(); // a b c