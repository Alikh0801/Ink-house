import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'; // İkonlar üçün

function Footer() {
    return (
        <footer className="bg-[#E1EDE6] py-12 px-4 md:px-0">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                    {/* 1. Loqo və Əlaqə */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <img src="/images/logo/star.png" alt="Ink. House" className="w-8 h-8" />
                            <span className="text-[#598D66] text-xl font-bold">Ink. House</span>
                        </div>
                        <div>
                            <p className="text-[#2C2D35] text-lg font-medium">+7 (999) 543-54-54</p>
                            <p className="text-[#86928B] text-sm">Мастерская</p>
                        </div>
                    </div>

                    {/* 2. Menyu: Репродукции */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#2C2D35] font-semibold text-lg">Репродукции</h4>
                        <ul className="text-[#86928B] space-y-2">
                            <li className="hover:text-[#598D66] cursor-pointer">Франция</li>
                            <li className="hover:text-[#598D66] cursor-pointer">Германия</li>
                            <li className="hover:text-[#598D66] cursor-pointer">Англия</li>
                        </ul>
                    </div>

                    {/* 3. Menyu: Новинки */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#2C2D35] font-semibold text-lg">Новинки</h4>
                        <ul className="text-[#86928B] space-y-2">
                            <li className="hover:text-[#598D66] cursor-pointer">2021</li>
                            <li className="hover:text-[#598D66] cursor-pointer">2020</li>
                        </ul>
                    </div>

                    {/* 4. Menyu: О нас */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#2C2D35] font-semibold text-lg">О нас</h4>
                        <ul className="text-[#86928B] space-y-2">
                            <li className="hover:text-[#598D66] cursor-pointer">Художники</li>
                            <li className="hover:text-[#598D66] cursor-pointer">Менеджеры</li>
                        </ul>
                    </div>

                    {/* 5. Sosial Media və Copyright */}
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <div className="flex gap-6 text-[#2C2D35] text-2xl">
                            <FaFacebook className="hover:text-[#598D66] cursor-pointer" />
                            <FaInstagram className="hover:text-[#598D66] cursor-pointer" />
                            <FaYoutube className="hover:text-[#598D66] cursor-pointer" />
                        </div>
                        <div className="text-[#86928B] text-xs text-left md:text-right">
                            <p>Ink. House ®</p>
                            <p>All rights reserved</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;