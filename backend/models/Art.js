import mongoose from "mongoose"

const ArtSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    url: { type: String, required: true },
    medium: String,
    price: String,
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Art", ArtSchema)
