const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is my Capstone Project Node.js App!');
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
