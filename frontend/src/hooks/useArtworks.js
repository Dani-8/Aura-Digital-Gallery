import { useState, useEffect } from 'react';
import { fetchArtworks, addArtwork, deleteArtwork } from '../services/api'


export const useArtworks = () => {
    const [artworks, setArtworks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const loadArtworks = async () => {
        try {
            const data = await fetchArtworks()
            setArtworks(data)
            setError(null)
        } catch(err) {
            setError(err.message || "Failed to load artworks")
        } finally {
            setLoading(false)
        }
    }

}





