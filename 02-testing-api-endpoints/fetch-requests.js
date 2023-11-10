/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/
// Your code here
fetch('/posts').then(res => res.json()).then(data => console.log(data));

(async () => {
  let res = await fetch('/posts')
  let data = await res.json()
  console.log(data);
})()

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/
// Your code here
fetch('/posts', {
  method: 'POST',
  headers : {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({message: '654'})
}).then(res => res.json()).then(data => console.log(data));