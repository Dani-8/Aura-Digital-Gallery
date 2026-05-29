import { Palette, Search } from 'lucide-react';

export default function Header({ searchTerm, setSearchTerm }) {
    return (
        <header className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 gap-6 ">
            <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl">
                    <Palette size={32} className="text-white" />
                </div>

                <div>
                    <h1 className="text-3xl font-bold tracking-tighter">AURA</h1>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium">Full-Stack Registry</p>
                </div>
            </div>


            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                        size={18}
                    />

                    <input
                        type="text"
                        placeholder="Search artworks..."
                        className="pl-10 bg-zinc-900/50 border border-zinc-700 focus:border-zinc-600 rounded-lg py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </header>
    );
}