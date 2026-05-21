import { getFeaturedTiles } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const FeaturedTiles = async () => {
    const featured = await getFeaturedTiles();

    return (
        <div className="my-16">
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4'>
                <div>
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Curated Selections</span>
                    <h2 className='text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight'>
                        Featured Masterpieces
                    </h2>
                </div>
                <Link
                    className='group flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition duration-300'
                    href='/all-tiles'
                >
                    Explore Full Gallery
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {featured.map((tile) => (
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
                                    <span className="font-extrabold text-slate-900 text-lg">
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
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedTiles;
