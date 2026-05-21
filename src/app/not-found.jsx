import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-center items-center text-center space-y-2'>
            <h2 className='font-bold text-7xl text-purple-800'>404</h2>
            <h2 className='font-bold text-3xl text-purple-950'>page is not found</h2>
            <p className='text-gray-600'>The page you are looking for doesen't exist <br /> or has been moved</p>
            <button className='btn bg-purple-700 text-white rounded-xl'><Link href="/">Go Home</Link></button>
        </div>
    );
};

export default NotFoundPage;