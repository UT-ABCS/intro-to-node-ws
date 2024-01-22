// Local server information
const hostname = "127.0.0.1";
const port = 3000;
const fullurl = `http://${hostname}:${port}/`

// Send a GET request using the http library
const http = require('http');
http.get(fullurl, (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    res.on('end', () => {
        console.log('Response using http: ', data);
    });
});

// Send a GET request using the axios library
const axios = require('axios');
axios.get(fullurl)
    .then(response => {
        console.log('Response using axios: ', response.data);
    })