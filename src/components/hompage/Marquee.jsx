import React from 'react';

const Marquee = () => {
    const text = "🔥 New Arrivals: Azure Glaze Ceramic & Emerald Hexa Porcelain | ⚡ Weekly Feature: Modern Geometric Patterns | ✨ Join the Community for Exclusive Designer Discounts & Early access to new collections | 🚚 Free shipping on order over $500 | 🏛️ Visit our showroom in the New York Design District!";

    return (
        <div className="w-full bg-amber-500 text-slate-950 font-bold uppercase tracking-wider text-xs md:text-sm py-3 overflow-hidden border-y border-amber-600 shadow-inner my-6">
            <div className="relative w-full flex items-center">
                {/* Standard marquee is well-supported and extremely performant on all browsers */}
                <marquee behavior="scroll" direction="left" scrollamount="6" className="w-full">
                    <span className="mx-4">{text}</span>
                    <span className="mx-4">{text}</span>
                </marquee>
            </div>
        </div>
    );
};

export default Marquee;
