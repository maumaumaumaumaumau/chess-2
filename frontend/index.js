const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()

app.use(bodyParser.json({ // TODO: analyzing games, will this be implemented on the client? idk
    limit: "15mb"
}))

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/favicon.ico", function(req, res) {
  res.sendFile(path.join(__dirname, "favicon.ico"))
})

app.get("/analyze", function(req, res) {
  res.sendFile(path.join(__dirname, "analyze.html"))
})

app.listen(process.env.app_port || 8080)
