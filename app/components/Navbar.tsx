"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollContainer = document.querySelector('.snap-y');
            if (scrollContainer) {
                const scrollTop = scrollContainer.scrollTop;
                const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
                const progress = (scrollTop / scrollHeight) * 100;
                setScrollProgress(progress);
            }
        };

        const scrollContainer = document.querySelector('.snap-y');
        scrollContainer?.addEventListener('scroll', handleScroll);

        return () => scrollContainer?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 w-full backdrop-blur-lg z-50">
            <div className="flex justify-between px-6 py-4">
                <h1 className="font-bold text-xl">Artian RIKA</h1>
                <ul className="flex gap-6">
                    <a href="#about-me" className="hover:text-blue-500 transition">About Me</a>
                    <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
                    <a href="#gallery" className="hover:text-blue-500 transition">Gallery</a>
                </ul>
            </div>

            <div className="h-1 bg-gray-200/20">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-50"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </nav>
    );
}