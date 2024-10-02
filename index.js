import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>about me</h1><p>My name is angela</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>contact me</h1><p>phone: +880097554</p>");
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});