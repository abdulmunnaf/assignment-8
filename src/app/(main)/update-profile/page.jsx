"use client"
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProfilePage = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const image = formData.get("image");

        const { data, error } = await authClient.updateUser({ name, image });

        if (error) {
            toast.error('Failed to update: ' + error.message);
        } else {
            toast.success('Profile updated successfully!');
            setTimeout(() => {
                router.push("/my-profile");
            }, 1000);
        }

        setLoading(false);
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-slate-50/30 px-4 py-12'>
            <ToastContainer />
            <div className="w-full max-w-xl mb-4">
                <Link 
                    href='/my-profile' 
                    className='inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 font-semibold transition-colors duration-300'
                >
                    <FaArrowLeft /> Back to Profile
                </Link>
            </div>
            
            <div className='w-full max-w-xl bg-white p-8 rounded-3xl shadow-sm border border-slate-100'>
                <h2 className='text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-6 tracking-tight'>
                    Update Profile Information
                </h2>
                
                <form onSubmit={handleUpdate} className='space-y-6'>
                    <div>
                        <label
                            htmlFor='name'
                            className='block mb-2 font-bold text-slate-700 text-sm uppercase tracking-wider'>
                            Full Name
                        </label>
                        <input 
                            type="text"
                            name="name"
                            id='name'
                            defaultValue={session?.user?.name || ""}
                            placeholder='Enter your full name'
                            className='w-full border-2 border-slate-200 text-slate-800 rounded-2xl py-3 px-4 focus:outline-none focus:border-amber-500 transition-all duration-300'
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='image'
                            className='block mb-2 font-bold text-slate-700 text-sm uppercase tracking-wider'>
                            Image URL
                        </label>
                        <input 
                            type="text"
                            id='image'
                            name="image"
                            defaultValue={session?.user?.image || ""}
                            placeholder='Enter your image URL link'
                            className='w-full border-2 border-slate-200 text-slate-800 rounded-2xl py-3 px-4 focus:outline-none focus:border-amber-500 transition-all duration-300'
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        disabled={loading}
                        className='w-full bg-slate-900 hover:bg-amber-600 text-white font-bold py-3.5 rounded-2xl transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg'
                    >
                        {loading ? 'Updating information...' : 'Update Information'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;