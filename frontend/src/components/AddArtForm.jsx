import { useState } from 'react'

export default function AddArtForm({ onAdd, onCancel }) {
    const [newArt, setNewArt] = useState({
        title: "",
        artist: "",
        medium: "",
        price: "",
        url: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newArt.title || !newArt.url) return;
        onAdd(newArt);
    }

    return (
        <div className="max-w-2xl mx-auto bg-zinc-900 border border-zinc-700 rounded-2xl text-zinc-100 overflow-hidden">
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b border-zinc-700">
                <h2 className="text-2xl font-bold">Add New Artwork</h2>

                <p className="text-zinc-500 text-sm mt-1">
                    All data goes to MongoDB via Express API
                </p>
            </div>


            {/* Form Content */}
            <div className="p-8 space-y-5">
                <input
                    type="text"
                    placeholder="Title *"
                    className="w-full bg-zinc-950 border border-zinc-700 focus:border-zinc-600 rounded-lg px-4 py-3 text-sm outline-none"
                    value={newArt.title}
                    onChange={e => setNewArt({ ...newArt, title: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Artist"
                    className="w-full bg-zinc-950 border border-zinc-700 focus:border-zinc-600 rounded-lg px-4 py-3 text-sm outline-none"
                    value={newArt.artist}
                    onChange={e => setNewArt({ ...newArt, artist: e.target.value })}
                />

                <input
                    type="url"
                    placeholder="Image URL *"
                    className="w-full bg-zinc-950 border border-zinc-700 focus:border-zinc-600 rounded-lg px-4 py-3 text-sm outline-none"
                    value={newArt.url}
                    onChange={e => setNewArt({ ...newArt, url: e.target.value })}
                />

                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Medium"
                        className="bg-zinc-950 border border-zinc-700 focus:border-zinc-600 rounded-lg px-4 py-3 text-sm outline-none"
                        value={newArt.medium}
                        onChange={e => setNewArt({ ...newArt, medium: e.target.value })}
                    />

                    <div className="relative flex items-center">
                        <span className="absolute left-4 text-zinc-500 text-sm">$</span>
                        <input
                            type="text"
                            placeholder="Price"
                            className="w-full bg-zinc-950 border border-zinc-700 focus:border-zinc-600 rounded-lg pl-8 pr-4 py-3 text-sm outline-none"
                            value={newArt.price}
                            onChange={e => setNewArt({ ...newArt, price: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            {/* ======================================= */}

            <div className="px-8 py-6 border-t border-zinc-700 flex justify-end gap-3 bg-zinc-950">
                <button
                    type="button"
                    onClick={onCancel}
                    className="cursor-pointer px-6 py-2.5 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                    Cancel
                </button>

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="cursor-pointer px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-all duration-400 active:scale-90"
                >
                    Save to Database
                </button>
            </div>
        </div>
    );
}