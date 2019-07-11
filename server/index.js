require("dotenv").config()
const express = require("express")
const massive = require("massive")

const {test,test2} = require("./controllers/authController")

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance)
    console.log("Database Connected")
})

app.post("/api/insert", test)
app.get("/api/test", test2)


app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})