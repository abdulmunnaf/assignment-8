import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaPinterest } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-20'>
            <div className='w-11/12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='flex flex-col space-y-3'>
                    <Link href="/" className='text-2xl font-bold text-white tracking-wider hover:text-amber-500 transition-colors duration-300'>
                        AuraTiles
                    </Link>
                    <p className='text-slate-400 text-sm max-w-xs leading-relaxed'>
                        Discover premium aesthetic tiles for luxury living. Curated craftsmanship, modern patterns, and timeless designs.
                    </p>
                </div>
                
                <div className='flex flex-col space-y-3'>
                    <h4 className='font-semibold text-white tracking-wide uppercase text-sm border-l-2 border-amber-500 pl-2'>Contact Us</h4>
                    <ul className='space-y-2 text-slate-400 text-sm'>
                        <li>Email: hello@auratiles.com</li>
                        <li>Phone: +1 (555) 019-2834</li>
                        <li>Address: 452 Design District, New York, NY</li>
                    </ul>
                </div>

                <div className='flex flex-col space-y-4'>
                    <h4 className='font-semibold text-white tracking-wide uppercase text-sm border-l-2 border-amber-500 pl-2'>Follow Our Gallery</h4>
                    <div className='flex gap-4 text-xl'>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-amber-500 transition-colors duration-300'><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-amber-500 transition-colors duration-300'><FaInstagram /></a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className='hover:text-amber-500 transition-colors duration-300'><FaPinterest /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-amber-500 transition-colors duration-300'><FaLinkedin /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='hover:text-amber-500 transition-colors duration-300'><FaGithub /></a>
                    </div>
                    <div className='flex gap-4 text-xs text-slate-500'>
                        <Link className='hover:text-slate-300 transition-colors' href="/terms">Terms & Conditions</Link>
                        <span className='text-slate-700'>|</span>
                        <Link className='hover:text-slate-300 transition-colors' href="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            
            <div className='border-t border-slate-800/80 mt-10 pt-6 text-center text-slate-500 text-xs tracking-wider'>
                AuraTiles &copy; {new Date().getFullYear()} - All Rights Reserved. Crafted for Exquisite Aesthetics.
            </div>
        </footer>
    );
};

export default Footer;