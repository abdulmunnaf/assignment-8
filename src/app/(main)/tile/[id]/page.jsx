import { getTileDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaCheckCircle, FaTimesCircle, FaTags } from 'react-icons/fa';

export const metadata = {
  title: "AuraTiles - Tile Details",
  description: "Exquisite tile specifications and designer information.",
};

const TileDetailPage = async ({ params }) => {
    const { id } = await params;
    const tile = await getTileDetailsById(id);

    if (!tile) {
        return (
            <div className='min-h-[70vh] flex flex-col justify-center items-center text-center space-y-4'>
                <h2 className='font-bold text-3xl text-slate-800'>Tile Not Found</h2>
                <p className='text-slate-500'>The tile you are looking for does not exist or has been removed.</p>
                <Link href="/all-tiles" className='btn bg-amber-500 hover:bg-amber-600 text-slate-950 border-none rounded-xl font-semibold px-6'>
                    Back to Gallery
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-slate-50/30 min-h-screen py-10">
            <div className='w-11/12 max-w-6xl mx-auto'>
                {/* Back Button */}
                <Link 
                    href='/all-tiles' 
                    className='inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 font-semibold mb-8 transition-colors duration-300'
                >
                    <FaArrowLeft /> Back to Gallery
                </Link>

                {/* Main Split Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm'>
                    {/* Left: High-Res Tile Preview */}
                    <div className='lg:col-span-7 relative h-[40vh] md:h-[60vh] w-full rounded-2xl overflow-hidden shadow-inner border border-slate-100'>
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 58vw"
                            className='object-cover hover:scale-105 transition-transform duration-700'
                        />
                    </div>

                    {/* Right: Info & Specs */}
                    <div className='lg:col-span-5 flex flex-col justify-between space-y-6'>
                        <div className="space-y-4">
                            <div className="flex justify-between items-start gap-4">
                                <span className="bg-amber-50 text-amber-700 border border-amber-200/50 text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                                    {tile.category}
                                </span>
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    {tile.inStock ? (
                                        <span className="text-emerald-600 flex items-center gap-1">
                                            <FaCheckCircle /> In Stock
                                        </span>
                                    ) : (
                                        <span className="text-rose-500 flex items-center gap-1">
                                            <FaTimesCircle /> Out of Stock
                                        </span>
                                    )}
                                </div>
                            </div>

                            <h1 className='font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight'>
                                {tile.title}
                            </h1>

                            <div className="border-b border-slate-100 pb-4">
                                <span className="text-slate-400 text-xs uppercase tracking-wider block mb-1">Creator / Brand</span>
                                <p className="text-slate-800 font-bold text-lg">{tile.creator}</p>
                            </div>

                            <div className="space-y-2">
                                <span className="text-slate-400 text-xs uppercase tracking-wider block">Style Description</span>
                                <p className='text-slate-600 text-sm md:text-base leading-relaxed'>
                                    {tile.description}
                                </p>
                            </div>
                        </div>

                        {/* Specs Table */}
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3">
                            <div className="flex justify-between text-sm py-1 border-b border-slate-200/55">
                                <span className="text-slate-500 font-medium">Material</span>
                                <span className="text-slate-800 font-bold">{tile.material}</span>
                            </div>
                            <div className="flex justify-between text-sm py-1 border-b border-slate-200/55">
                                <span className="text-slate-500 font-medium">Dimensions</span>
                                <span className="text-slate-800 font-bold">{tile.dimensions}</span>
                            </div>
                            <div className="flex justify-between text-sm py-1">
                                <span className="text-slate-500 font-medium">Pricing Scheme</span>
                                <span className="text-slate-800 font-bold">{tile.price.toFixed(2)} {tile.currency} / sq meter</span>
                            </div>
                        </div>

                        {/* Tags */}
                        {tile.tags && tile.tags.length > 0 && (
                            <div className="space-y-2">
                                <span className="text-slate-400 text-xs uppercase tracking-wider flex items-center gap-1">
                                    <FaTags /> Tags
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {tile.tags.map((tag, idx) => (
                                        <span 
                                            key={idx} 
                                            className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200/40"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Call to Action */}
                        <div className='flex gap-4 pt-4 border-t border-slate-100 items-center justify-between'>
                            <div>
                                <span className="text-slate-400 text-xs block uppercase tracking-wider">Estimated Price</span>
                                <span className="font-extrabold text-slate-900 text-2xl md:text-3xl">
                                    ${tile.price.toFixed(2)} <span className="text-sm font-normal text-slate-500">{tile.currency}</span>
                                </span>
                            </div>
                            <button 
                                disabled={!tile.inStock}
                                className='btn bg-amber-500 hover:bg-amber-600 text-slate-950 disabled:bg-slate-200 disabled:text-slate-400 border-none rounded-xl font-bold px-8 py-3 transition-colors duration-300'
                            >
                                Request Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TileDetailPage;
