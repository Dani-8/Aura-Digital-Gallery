import express from "express"
import Art from "../models/Art.js"

const artRoutes = express.Router()

// GET all art
artRoutes.get("/", async (req, res) => {
    try {
        const art = await Art.find().sort({ createdAt: -1 })
        res.json(art)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// POST new art
artRoutes.post("/", async (req, res) => {
    try {
        const newArt = new Art(req.body)
        const savedArt = await newArt.save()
        res.status(201).json(savedArt)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// DELETE art by id
artRoutes.delete("/:id", async (req, res) => {
    try {
        await Art.findByIdAndDelete(req.params.id)
        res.json({ message: "Artwork deleted successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

export default artRoutes