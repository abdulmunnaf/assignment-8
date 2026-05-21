"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import imgAvater from '@/assets/avater.jpg';
import Link from 'next/link';

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return (
            <div className='min-h-[80vh] flex items-center justify-center'>
                <span className="loading loading-spinner text-amber-600 loading-lg"></span>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-slate-50/30 py-12 px-4'>
            <div className='bg-white p-8 border border-slate-100 rounded-3xl shadow-sm max-w-2xl mx-auto'>
                <div className='flex flex-col items-center gap-6 mb-8'>
                    <div className='relative flex flex-col items-center space-y-4' >
                        <Image
                            src={user?.image || imgAvater}
                            alt={user?.name || 'User avatar'}
                            width={160}
                            height={160}
                            className='rounded-full object-cover border-4 border-amber-500 shadow-md'
                        />
                        <div className='text-center'>
                            <h2 className='text-2xl md:text-3xl font-extrabold text-slate-900'>{user?.name}</h2>
                            <p className='text-slate-500 text-sm'>{user?.email}</p>
                        </div>
                    </div>

                    <div className='w-full border border-slate-100 p-6 bg-slate-50/50 rounded-2xl'>
                        <h3 className='text-lg font-bold text-slate-800 mb-4 border-b border-slate-200/60 pb-2'>Account Details</h3>

                        <div className='space-y-4 text-sm'>
                            <div className='flex flex-col sm:flex-row sm:justify-between border-b border-slate-100 pb-2 gap-1'>
                                <span className='font-semibold text-slate-500'>Full Name:</span>
                                <span className='break-all text-slate-800 font-medium'>{user?.name || "Not provided"}</span>
                            </div>
                            <div className='flex flex-col sm:flex-row sm:justify-between border-b border-slate-100 pb-2 gap-1'>
                                <span className='font-semibold text-slate-500'>Email Address:</span>
                                <span className='break-all text-slate-800 font-medium'>{user?.email}</span>
                            </div>
                            <div className='flex flex-col sm:flex-row sm:justify-between border-b border-slate-100 pb-2 gap-1'>
                                <span className='font-semibold text-slate-500'>Avatar Link:</span>
                                <span className='break-all text-slate-800 font-medium text-xs max-w-xs truncate' title={user?.image}>
                                    {user?.image || "Default Avatar"}
                                </span>
                            </div>
                        </div>
                    </div>

                    <Link 
                        href="/update-profile" 
                        className='w-full btn bg-slate-900 hover:bg-amber-600 text-white rounded-xl font-semibold tracking-wide border-none transition-all duration-300 py-3 text-center'
                    >
                        Edit Your Information
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
