const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/dashboard', (req, res, next) => {
    res.send("<h1>I'm Alive!</h1>")
});

app.listen(port, () => {
    console.log('Server is alive.', port);
    
});