import express from "express"
import cors from "cors"

import mongoose from "mongoose"
import yaml from "js-yaml"
import fs from "fs"

import dotenv from "dotenv"
dotenv.config()

let config = {}
try {
    config = yaml.load(fs.readFileSync("./config.yaml", "utf8"))
} catch (err) {
    console.error("Error loading config file:", err)
}
// =====================================================================
// =====================================================================
// =====================================================================



const app = express()

app.get("/", (req, res) => {
    res.send("HI")
})

app.listen("4000", ()=>{
    console.log("Server is running on http://localhost:4000/");
    
})