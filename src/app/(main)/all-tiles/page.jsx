"use client"
import { getTiles } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const AllTilesPage = () => {
    const [tiles, setTiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const loadTiles = async () => {
            try {
                setLoading(true);
                const data = await getTiles();
                setTiles(data);
            } catch (err) {
                console.error("Failed to load tiles:", err);
            } finally {
                setLoading(false);
            }
        };
        loadTiles();
    }, []);

    // Filter tiles based on search query & category selection
    const filteredTiles = tiles.filter(tile => {
        const matchesSearch = tile.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || tile.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ['all', ...new Set(tiles.map(tile => tile.category))];

    return (
        <div className='w-11/12 max-w-6xl py-12 mx-auto min-h-screen'>
            {/* Header and Search Section */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-slate-100 pb-8'>
                <div>
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Exquisite Showcase</span>
                    <h1 className='text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight'>All Collections</h1>
                    <p className="text-slate-500 text-sm mt-1">Explore our design masterpieces and discover your aesthetics.</p>
                </div>
                
                {/* Search Bar - Large Hero UI Input */}
                <div className="relative w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Search tiles by title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white border-2 border-slate-200 text-slate-800 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-amber-500 transition-all duration-300 shadow-sm"
                    />
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                </div>
            </div>

            {/* Category Filter Badges */}
            {!loading && tiles.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            {/* Loading Skeleton */}
            {loading ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="flex flex-col gap-4 w-full">
                            <div className="skeleton h-64 w-full rounded-2xl"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    {/* Tiles Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {filteredTiles.map((tile) => (
                            <div
                                key={tile.id}
                                className='bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden flex flex-col group transition-all duration-300'
                            >
                                <figure className='relative h-64 w-full overflow-hidden'>
                                    <Image
                                        src={tile.image}
                                        alt={tile.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className='object-cover group-hover:scale-105 transition-transform duration-500'
                                        priority={tile.id === 'tile_001'}
                                    />
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                                            {tile.category}
                                        </span>
                                    </div>
                                </figure>

                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-amber-600 transition-colors duration-300">
                                        {tile.title}
                                    </h3>
                                    <p className='text-slate-500 text-sm line-clamp-2 mb-4 flex-grow'>
                                        {tile.description}
                                    </p>

                                    <div className="border-t border-slate-50 pt-4 mt-auto flex items-center justify-between">
                                        <div>
                                            <span className="text-slate-400 text-xs block">Price</span>
                                            <span className="font-extrabold text-slate-900 text-base">
                                                ${tile.price.toFixed(2)} <span className="text-xs font-normal text-slate-500">{tile.currency}</span>
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-slate-400 text-xs block">Material</span>
                                            <span className="font-semibold text-slate-700 text-sm">{tile.material}</span>
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <Link 
                                            href={`/tile/${tile.id}`} 
                                            className='btn bg-slate-900 hover:bg-amber-600 text-white w-full border-none rounded-xl font-medium tracking-wide transition-all duration-300'
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredTiles.length === 0 && (
                        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200 mt-10">
                            <p className='text-lg font-semibold text-slate-600'>No tiles found matching your search.</p>
                            <p className='text-sm text-slate-400 mt-1'>Try adjusting your search queries or select a different category.</p>
                            <button 
                                onClick={() => { setSearch(''); setSelectedCategory('all'); }} 
                                className="mt-4 btn bg-amber-500 hover:bg-amber-600 text-slate-950 border-none rounded-xl font-semibold px-6"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default AllTilesPage;
