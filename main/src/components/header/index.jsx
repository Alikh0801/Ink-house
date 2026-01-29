import React, { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#E1EDE6]">
            <div className="mx-auto max-w-6xl px-4 py-4 md:py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                    <div className="flex items-center gap-2">
                        <img src="../images/logo/star.png" alt="Logo" className="w-8 h-8" />
                        <span className="text-[#598D66] font-bold text-xl tracking-wider">Ink. House</span>
                    </div>

                    <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-10 pt-4 px-4 md:pt-0 border-t border-[#D1E0D6] md:border-none">
                        <button className="sm:hidden outline-none" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <X className="w-8 h-8 text-[#2C2D35]" />
                            ) : (
                                <Menu className="w-8 h-8 text-[#2C2D35]" />
                            )}
                        </button>
                        <nav className="hidden sm:flex items-center gap-6 lg:gap-12 text-[#2C2D35] font-medium text-xl md:text-xl">
                            <a href="#" className="hover:text-[#598D66] transition">Репродукции</a>
                            <a href="#" className="hover:text-[#598D66] transition">Новинки</a>
                            <a href="#" className="hover:text-[#598D66] transition">О нас</a>
                        </nav>
                        <button className={`relative ${isOpen ? 'hidden' : 'block'} cursor-pointer`}>
                            <ShoppingCart className="w-6 h-6 text-[#2C2D35]" />
                        </button>
                    </div>
                    {/* Mobie Overlay */}
                    {isOpen && (
                        <div className="w-full sm:hidden flex flex-col gap-7 mt-10 pb-4 transition-all">
                            <nav className="flex flex-col gap-10 text-2xl font-medium text-[#2C2D35]">
                                <a href="#" onClick={() => setIsOpen(false)}>Репродукции</a>
                                <a href="#" onClick={() => setIsOpen(false)}>Новинки</a>
                                <a href="#" onClick={() => setIsOpen(false)}>О нас</a>
                            </nav>
                        </div>
                    )}

                </div>
            </div>
        </header>
    )
}

export default Header;