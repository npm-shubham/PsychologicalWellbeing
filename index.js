const express = require("express")
const app = express()

app.use(express.static(__dirname + '/src/assets'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

app.get("/profile", (req, res) => {
    res.sendFile(__dirname + '/src/profile.html')
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/src/login.html')
})

app.listen(3000, () => {
    console.log("Momma! I did it!")
})
