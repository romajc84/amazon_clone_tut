console.log("Hello, World");
// print('Helo, World');
const express = require('express');
// import 'package:express/express.dart'
const PORT = 3000;

const app = express();

// Create a GET Request giving a json repsonse with hey of name
// and value of your name
app.get('/name', (req, res) => {
    res.json({ name: "Joey" });
});

// CREATING AN API
app.get('/hello-world', (req, res) => {
    res.json({ hi: "Hello World" });
});
// GET, PUT, POST, DELETE, UPDATE -> CRUD


app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`);
});
// localhost
