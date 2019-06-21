const http = new EasyHTTP();

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const data = {
    title: 'Custom Post updated new',
    body: 'This is a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// http.put('https://jsonplaceholder.typicode.com/posts/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/posts/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));