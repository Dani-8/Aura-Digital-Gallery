import { Trash2 } from 'lucide-react';

export default function ArtCard({ art, onDelete }) {
  return (
    <div className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
      <div className="aspect-[8/6] overflow-hidden">
        <img
          src={art.url}
          alt={art.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{art.title}</h3>
            <p className="text-indigo-400 text-sm">{art.artist}</p>
          </div>
          
          {art.price && (
            <span className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full">
              {art.price}
            </span>
          )}
        </div>

        <button
          onClick={() => onDelete(art._id)}
          className="cursor-pointer w-full mt-4 flex items-center justify-center gap-2 bg-transparent hover:bg-red-950/30 border border-red-900/50 hover:border-red-700 text-red-400 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}