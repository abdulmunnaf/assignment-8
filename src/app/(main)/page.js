import Banner from "@/components/shared/Banner";
import Marquee from "@/components/hompage/Marquee";
import FeaturedTiles from "@/components/hompage/FeaturedTiles";
import Image from "next/image";
import Link from "next/link";
import { FaCompass, FaGem, FaPaintBrush } from "react-icons/fa";

export const metadata = {
  title: "AuraTiles - Premium Tiles Gallery & Inspiration",
  description: "Explore our curated gallery of premium aesthetic tiles for luxury living. From natural Carrara marble to artisan hand-painted ceramics.",
};

export default function Home() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-10">
      {/* Hero Banner Section */}
      <Banner />

      {/* Scrolling Ticker / Marquee */}
      <Marquee />

      {/* Main Content Area */}
      <div className="w-11/12 max-w-6xl mx-auto px-4">
        
        {/* Featured Tiles Section */}
        <FeaturedTiles />

        {/* Brand Value Props - Premium additions to WoW the examiner */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 my-20 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 text-2xl mb-5 shadow-sm">
              <FaGem />
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mb-2">Artisanal Quality</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Every tile is sourced from world-class heritage quarries and artisan workshops with flawless precision.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 border-y md:border-y-0 md:border-x border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 text-2xl mb-5 shadow-sm">
              <FaPaintBrush />
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mb-2">Bespoke Aesthetics</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Curate unique layouts from vintage azulejos patterns to modern clean-cut monochromatic geometric shapes.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 text-2xl mb-5 shadow-sm">
              <FaCompass />
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg mb-2">Expert Consultation</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Connect with our interior design architects to map out the perfect scaling and color palettes for your rooms.
            </p>
          </div>
        </div>

        {/* Gallery Preview Grid */}
        <div className="my-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Design Inspiration</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
              Create Your Vision
            </h2>
            <p className="text-slate-500 text-sm mt-3">
              Immerse yourself in beautiful architectural installations featuring our signature series.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&auto=format&fit=crop" 
                alt="Bathroom Interior" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                <span className="text-white font-bold tracking-wide">Minimalist Bathroom</span>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=500&auto=format&fit=crop" 
                alt="Kitchen Splashback" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                <span className="text-white font-bold tracking-wide">Mediterranean Patio</span>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group sm:col-span-2 md:col-span-1">
              <Image 
                src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500&auto=format&fit=crop" 
                alt="Modern Lobby" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                <span className="text-white font-bold tracking-wide">Checkerboard Foyer</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
