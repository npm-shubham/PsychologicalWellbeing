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

app.get("/portfolio-details", (req, res) => {
    res.sendFile(__dirname + '/src/portfolio-details.html')
})

app.listen(6969, () => {
    console.log("Log onto `http://localhost:6969/` to see full website")
})
