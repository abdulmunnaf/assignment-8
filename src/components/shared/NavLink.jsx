"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname()

    const isActive = href === pathname

    return (
        <Link
            href={href}
            className={`${isActive ? "border-b-2 border-green-800 px-3 py-1 rounded-lg" : ""}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;