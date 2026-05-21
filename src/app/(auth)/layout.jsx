import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    );
};

export default AuthLayout;