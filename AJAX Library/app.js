const http = new easyHTTP();

// GET request.
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {

    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});

// POST Request.
const data = {
    title: 'Custom Post updated',
    body: 'This is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
})

// PUT Request
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
})

// DELETE Request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {

    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});