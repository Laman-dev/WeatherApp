const express = require("express")
const app = express()
const PORT = 8080
const path = require("path")

const mainPath = path.join(__dirname, "./public")



app.use(express.static(mainPath))

app.get("/", (req, res)=>{
    res.send("ExpressJs")
})

app.get("*", (req, res)=>{
  res.send("404 Not Found")
})

app.listen(PORT, ()=>{
  console.log("server is running");
})
