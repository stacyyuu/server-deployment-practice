const express = require('express');
const server = express();

// This server is correct when:

// cat endpoint, gives you 'I am a cat!'
server.get('/cat', (_, res) => res.send('I am a cat! Meow!'));

// dog endpoint, gives you 'I am a dog!'
server.get('/dog', (_, res) => res.send('I am a dog! Woof!'));

module.exports = server;
