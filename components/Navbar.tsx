import Link from 'next/link';
import { Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    return (
        <nav className="border-b border-gray-800 bg-dark/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <Terminal className="text-primary w-8 h-8 group-hover:text-secondary transition-colors" />
                    <span className="text-xl font-bold tracking-tight">Kodo<span className="text-primary">logic</span></span>
                </Link>

                <div className="hidden md:flex gap-8 items-center text-sm font-medium">
                    <Link href="/news" className="hover:text-primary transition-colors">News</Link>
                    <Link href="/scripts" className="hover:text-primary transition-colors">Scripts</Link>
                    <Link href="/strategies" className="hover:text-primary transition-colors">Strategies</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <button className="btn-primary">Get Started</button>
                </div>

                {/* Mobile Menu Placeholder - keeping it simple for now */}
                <button className="md:hidden text-white">
                    <Menu />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
