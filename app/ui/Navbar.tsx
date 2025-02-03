"use client";
import clsx from 'clsx';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar(){
    const [isOpen, setIsOpen ] = useState(false);
    return(
        <header className="w-full shadow py-12 ">
            <div className="max-w-[1440px] mt-0 mx-auto flex items-center gap-10">
                <nav className="font-bold text-4xl">
                    <Link href="/home">Solar<span className="text-primary">TechDigest</span></Link>
                </nav>
            </div>

        </header>
    )
}