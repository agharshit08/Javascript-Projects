class EasyHTTP {

    // GET Request
    async get(url) {

        const response = await fetch(url);
        const data = await response.data;
        return data;
    }

    // POST Request
    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const data = await response.data;
        return data;
    }

    // PUT Request
    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const data = await response.data;
        return data;
    }

    // DELETE Request
    delete(url) {

        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        });

        const data = await response.data;
        return data;
    }
};