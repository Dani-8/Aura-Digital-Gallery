import express from "express"
import cors from "cors"

const app = express()

app.get("/", (req, res) => {
    res.send("HI")
})

app.listen("4000", ()=>{
    console.log("Server is running on http://localhost:4000/");
    
})