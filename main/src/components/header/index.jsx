import React from 'react'
import { ShoppingCart } from 'lucide-react';


function Header() {
    return (
        <header className="bg-[#F4F6F5] py-6 px-4">
            <div className="w-full flex justify-between items-center px-30">
                <div className="flex items-center gap-2">
                    <img src="../images/logo/star.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-[#598D66] font-bold text-xl">Ink. House</span>
                </div>
                <nav className="hidden md:flex gap-15 text-[#2C2D35] font-medium">
                    <a href="#">Reproduction</a>
                    <a href="#">News</a>
                    <a href="#">About Us</a>
                    <button className="relative">
                        <ShoppingCart />
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header;