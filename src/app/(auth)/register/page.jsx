"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleRegisterFunc = async (data) => {
        setLoading(true);
        const { email, name, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            dontRedirect: true
        });

        if (error) {
            toast.error(error.message || 'Registration failed');
            setLoading(false);
        } else {
            toast.success("Account created successfully! Redirecting to login...");
            setTimeout(() => {
                router.push("/login");
            }, 1500);
        }
    };

    const handleGoogleSignin = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (err) {
            toast.error("Google authentication failed.");
        }
    };

    return (
        <div className='min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <ToastContainer />
            <div className='bg-white p-8 border border-slate-100 rounded-3xl shadow-sm w-full max-w-md space-y-6'>
                <div className="text-center">
                    <Link href="/" className="text-3xl font-extrabold text-amber-600 tracking-wider">
                        AuraTiles
                    </Link>
                    <h2 className='font-extrabold text-2xl text-slate-900 mt-6'>Create Account</h2>
                    <p className='text-slate-500 text-sm mt-1'>Register to get started on AuraTiles</p>
                </div>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <div>
                        <label className="block mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="w-full border-2 border-slate-200 text-slate-800 rounded-2xl py-3 px-4 focus:outline-none focus:border-amber-500 transition-all duration-300"
                            placeholder="John Doe"
                            {...register('name', { required: "Please enter your name" })}
                        />
                        {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            className="w-full border-2 border-slate-200 text-slate-800 rounded-2xl py-3 px-4 focus:outline-none focus:border-amber-500 transition-all duration-300"
                            placeholder="https://example.com/photo.jpg"
                            {...register('photo', { required: "Please enter a profile picture link URL" })}
                        />
                        {errors.photo && <p className='text-red-500 text-xs mt-1'>{errors.photo.message}</p>}
                    </div>

                    <div>
                        <label className="block mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full border-2 border-slate-200 text-slate-800 rounded-2xl py-3 px-4 focus:outline-none focus:border-amber-500 transition-all duration-300"
                            placeholder="you@example.com"
                            {...register('email', { required: "Please enter your email" })}
                        />
                        {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block mb-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={isShowPassword ? "text" : "password"}
                                className="w-full border-2 border-slate-200 text-slate-800 rounded-2xl py-3 px-4 pr-12 focus:outline-none focus:border-amber-500 transition-all duration-300"
                                placeholder="••••••••"
                                {...register('password', { required: "Please enter your password" })}
                            />
                            <button
                                type="button"
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xl"
                            >
                                {isShowPassword ? <IoEye /> : <IoEyeOff />}
                            </button>
                        </div>
                        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-slate-900 hover:bg-amber-600 text-white font-bold py-3.5 rounded-2xl transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg mt-6"
                    >
                        {loading ? "Registering account..." : "Register"}
                    </button>
                </form>

                <div className="relative flex items-center justify-center my-4">
                    <div className="border-t border-slate-200 w-full"></div>
                    <span className="bg-white px-3 text-slate-400 text-xs uppercase font-bold tracking-wider absolute">Or continue with</span>
                </div>

                <div>
                    <button 
                        onClick={handleGoogleSignin}
                        className='flex items-center justify-center gap-3 w-full border-2 border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-2xl transition-all duration-300'
                    >
                        <FcGoogle className='text-2xl' />
                        Google
                    </button>
                </div>

                <p className="text-center text-sm text-slate-500">
                    Already have an account?{' '}
                    <Link href='/login' className='text-amber-600 font-bold hover:text-amber-700 transition-colors'>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;