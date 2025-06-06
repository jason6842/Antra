function foo() {
  // considered a blocking operation
  // can only perform one operation at a time
  while (true) {}
}

function first() {
  second();
}

function second() {
  third();
}

function third() {}

// non-blocking / asynchronous
setTimeout(() => {
  console.log("1 second");
}, 1000);

first();

// https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// types of asynchronous operations
// 1. setTimeout, setInterval
// 2. Promises
// 3. API calls
