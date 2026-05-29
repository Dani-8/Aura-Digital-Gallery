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
        } catch (err) {
            setError(err.message || "Failed to load artworks")
        } finally {
            setLoading(false)
        }
    }


    const createArtwork = async (artData) => {
        try {
            await addArtwork(artData)
            await loadArtworks();
            return true;
        } catch (err) {
            setError(err.message);
            return false;
        }
    }


    const removeArtwork = async (artId) => {
        try {
            await deleteArtwork(artId)
            setArtworks(prev => prev.filter(art => art.id !== artId))
            return true
        } catch (err) {
            setError(err.message)
            return false
        }
    }


    useEffect(() => {
        loadArtworks()
    }, [])


    return { artworks, loading, error, createArtwork, removeArtwork }
}





