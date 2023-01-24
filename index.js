const express = require('express');
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.json("Salom hammagaaaaaaaaaaaaaaaa")
});

app.post("/", (req, res) => {
    res.send("Mani atvetim postga")
})
app.get("/user", (req, res) => {
    res.json("Salom manga")
});
// console.log()
app.listen(port, () => {
    console.log(`server running on the port http://localhost:${port}`)
})