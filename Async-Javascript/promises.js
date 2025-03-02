const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        posts.push(post);

        const error = false;

        if (!error) {
            resolve();
        } else {
            reject('Error: Something went wrong');
        }
       }, 2000); 
    })
}

// createPost({ title: 'Post Three', body: 'This is post three' }) // returns a promise
//     .then(getPosts)
//     .catch(error => console.log(error));

// 1. Waits 2 seconds
// 2. posts.push(post) is called
// 3. If there is no error, resolve() is called
// 4. Once it is resolved, getPosts() is called


// Async / Await
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three' }); // Waits for createPost to finish
    getPosts(); // Waits for getPosts to finish before running
}

init();

// Async / Await / Fetch
// If a promise resolves normally, then await promise returns the result.
// But in the case of a rejection, it throws the error, just as if there were a throw statement at that line.
async function fetchUsers() {
    const resNoAwait = fetch('https://jsonplaceholder.typicode.com/users'); // returns a promise
    console.log(resNoAwait); // Promise { <pending> }

    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // returns a response object using await
    console.log(res); // Response { type: "cors", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 200, ok: true, … }  
    const data = await res.json();
    console.log(data);
}

fetchUsers();

// Promise.all
    // const promise1 = Promise.resolve('Hello World');
    // const promise2 = 10;
    // const promise3 = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 2000, 'Goodbye');
    // })
    // const promise4 = fetch('https://jsonplaceholder.typicode.com/users') // formats to json
    //     .then(res => res.json()); // return the data
    // console.log(promise4); // Promise { <pending> }

    // Promise.all([promise1, promise2, promise3, promise4])
    //     .then((values) => console.log(values)); // [ 'Hello World', 10, 'Goodbye', Array(10) ]


