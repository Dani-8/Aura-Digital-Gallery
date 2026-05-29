const API_BASE = "http://localhost:5000/api/v1"


export const fetchArtworks = async () => {
    const res = await fetch(`${API_BASE}/art`)
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
}


export const addArtwork = async (artData) => {
    const res = await fetch(`${API_BASE}/art`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(artData)
    })

    if(!res.ok) throw new Error("Failed to add artwork")
    return res.json()
}


export const deleteArtwork = async (artId) => {
    const res = await fetch(`${API_BASE}/art/${artId}`, {
        method: "DELETE",
    })

    if(!res.ok) throw new Error("Failed to delete")
    return true
}