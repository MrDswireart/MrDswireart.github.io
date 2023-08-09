// Set up server
const express = require('express');
const app = express();
const port = 5000;
app.use(express.static(__dirname));

// Add endpoints
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname});
});

// Start server with above port
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
