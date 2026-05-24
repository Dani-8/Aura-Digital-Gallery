const express = require("express")
const router = express.Router()

const Art = require("../models/Art")


// GET all art
router.get("/", async (req, res) => {
    try{
        const art = await Art.find().sort({createdAt: -1})
        res.json(art)
    } catch(err){
        res.status(500).json({ message: err.message})
    }
})