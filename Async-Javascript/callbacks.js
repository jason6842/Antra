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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts(); // Takes 1 second to load

// This function takes longer than getPosts() so it will not be displayed
createPost({ title: "Post Three", body: "This is post three" }, getPosts); // Takes 2 seconds to load

// 1. Waits 2 seconds before anything is called
// 2. After 2 seconds, posts.push(post) is called, then callback() is called (getPosts())