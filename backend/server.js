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

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("HI")
})




// ---------------------------------------------------------------------

const PORT = process.env.PORT || config.server.port || 5000
app.listen(PORT, () => {
    console.log(`🚀 Aura Backend running on port http://localhost:${PORT}`);
})