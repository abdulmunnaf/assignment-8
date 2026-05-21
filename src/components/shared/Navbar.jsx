"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import imgAvater from '@/assets/avater.jpg';
import NavLink from './NavLink';
import { HiMenu, HiX } from 'react-icons/hi';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.href = "/login";
                }
            }
        });
    };

    return (
        <div className='bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100'>
            <div className='hidden md:flex justify-between items-center py-4 w-11/12 mx-auto max-w-6xl'>
                <Link
                    href="/"
                    className='bg-gradient-to-r from-amber-600 to-amber-900 bg-clip-text text-transparent font-extrabold text-3xl tracking-wider'>
                    AuraTiles
                </Link>

                <div className='flex gap-8 items-center'>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/all-tiles'>All Tiles</NavLink>
                    <NavLink href='/my-profile'>My Profile</NavLink>
                </div>

                <div className='flex items-center'>
                    {isPending ? (
                        <span className="loading loading-spinner text-amber-600"></span>
                    ) : user ? (
                        <div className='flex gap-4 items-center justify-center'>
                            <Link href='/my-profile' className='flex gap-2 items-center hover:opacity-80 transition'>
                                <Image
                                    src={user?.image || imgAvater}
                                    alt={user?.name || 'User Profile'}
                                    width={36}
                                    height={36}
                                    className='rounded-full object-cover border-2 border-amber-500'
                                />
                                <p className='font-medium text-slate-700 text-sm hidden lg:block'>{user?.name}</p>
                            </Link>
                            <button 
                                onClick={handleSignOut}
                                className='btn btn-outline btn-sm border-amber-600 text-amber-700 hover:bg-amber-600 hover:border-amber-600 rounded-full font-semibold transition duration-300'>
                                Log out
                            </button>
                        </div>
                    ) : (
                        <div className='flex gap-3'>
                            <Link 
                                href='/login'
                                className='btn btn-sm bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white rounded-full px-5 border-none font-semibold shadow-sm transition duration-300'>
                                Login
                            </Link>
                            <Link 
                                href='/register'
                                className='btn btn-sm btn-ghost text-amber-700 hover:bg-amber-50 rounded-full px-4 font-semibold transition duration-300'>
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden flex justify-between items-center px-4 py-3'>
                <button
                    className='text-2xl p-2 flex items-center gap-3 text-slate-800'
                    onClick={() => setOpen(!open)}>
                    {open ? <HiX /> : <HiMenu />}
                    <span className='bg-gradient-to-r from-amber-600 to-amber-900 bg-clip-text text-transparent font-extrabold text-2xl tracking-wider'>
                        AuraTiles
                    </span>
                </button>

                <div className='flex items-center'>
                    {isPending ? (
                        <span className="loading loading-spinner text-amber-600"></span>
                    ) : user ? (
                        <Link href='/my-profile'>
                            <Image
                                src={user?.image || imgAvater}
                                alt={user?.name || 'User Profile'}
                                width={32}
                                height={32}
                                className='rounded-full object-cover border-2 border-amber-500'
                            />
                        </Link>
                    ) : (
                        <Link 
                            href='/login'
                            className='btn btn-xs bg-amber-600 text-white rounded-full px-3 border-none font-semibold shadow-sm'>
                            Login
                        </Link>
                    )}
                </div>
            </div>

            {open && (
                <div className='md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4 absolute top-full left-0 w-full shadow-lg transition-all duration-300'>
                    <div className='flex flex-col space-y-3'>
                        <Link 
                            onClick={() => setOpen(false)}
                            href='/' 
                            className='font-semibold text-slate-800 hover:text-amber-600 py-1 transition-colors'>
                            Home
                        </Link>
                        <Link 
                            onClick={() => setOpen(false)}
                            href='/all-tiles' 
                            className='font-semibold text-slate-800 hover:text-amber-600 py-1 transition-colors'>
                            All Tiles
                        </Link>
                        <Link 
                            onClick={() => setOpen(false)}
                            href='/my-profile' 
                            className='font-semibold text-slate-800 hover:text-amber-600 py-1 transition-colors'>
                            My Profile
                        </Link>
                    </div>

                    {user && (
                        <div className='pt-4 border-t border-slate-100 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src={user?.image || imgAvater}
                                    alt={user?.name || 'User Profile'}
                                    width={32}
                                    height={32}
                                    className='rounded-full object-cover border border-amber-500'
                                />
                                <span className='text-sm font-medium text-slate-700'>{user?.name}</span>
                            </div>
                            <button 
                                onClick={async () => {
                                    setOpen(false);
                                    await handleSignOut();
                                }}
                                className='btn btn-xs btn-outline border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white rounded-full'>
                                Log out
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;