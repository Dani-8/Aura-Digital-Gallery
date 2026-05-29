import { useState } from 'react'
import { LayoutGrid, Plus, Database } from 'lucide-react'

import Header from './components/Header'
import ArtCard from './components/ArtCard'
import AddArtForm from './components/AddArtForm'
import { useArtworks } from './hooks/useArtworks'
// ----------------------------------------------------
// ----------------------------------------------------

export default function App() {
  const [activeTab, setActiveTab] = useState("gallery")
  const [searchTerm, setSearchTerm] = useState("")
  
  const { artworks, loading, createArtwork, removeArtwork } = useArtworks()

  const filteredArt = artworks.filter(a => 
    a.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    a.artist?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddArt = async (newArt) => {
    const success = await createArtwork(newArt);
    if (success) {
      setActiveTab("gallery");
    }
  }

  const handleDelete = async (id) => {
    await removeArtwork(id);
  }

  
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="max-w-7xl mx-auto">
        {/* Manual Tabs Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-1 flex">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "gallery" 
                  ? "bg-zinc-800 text-white" 
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <LayoutGrid size={16} />
              Gallery
            </button>

            <button
              onClick={() => setActiveTab("upload")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "upload" 
                  ? "bg-zinc-800 text-white" 
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Plus size={16} />
              Create
            </button>

            <button
              onClick={() => setActiveTab("backend")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "backend" 
                  ? "bg-zinc-800 text-white" 
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <Database size={16} />
              Backend
            </button>
          </div>
        </div>

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div>
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArt.map(art => (
                  <ArtCard key={art._id} art={art} onDelete={handleDelete} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Upload Tab */}
        {activeTab === "upload" && (
          <AddArtForm 
            onAdd={handleAddArt} 
            onCancel={() => setActiveTab("gallery")} 
          />
        )}

        {/* Backend Info Tab */}
        {activeTab === "backend" && (
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">API Status</h3>
              <p>Connected to Express + MongoDB</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Ready for Production</h3>
              <p>Good to go for Vercel / Render deployment</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}