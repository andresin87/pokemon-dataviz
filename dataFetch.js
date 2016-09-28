// dataFetch.js

const  fetch = require('node-fetch');

const api = {
    protocol: {
        http: 'http://',
        https: 'https://',
    },
    url: 'pokeapi.co/',
    path: 'api/',
    version: {
        v1: 'v1',
        v2: 'v2',
    },
};

const apiqry = `${api.protocol.http}${api.url}${api.path}${api.version.v2}/`;


fetch(`${apiqry}pokemon/?limit=1`)
.then(function(res) {
    return res.json();
}).then(function(json) {
    console.log(json);
});