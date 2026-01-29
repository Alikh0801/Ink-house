import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#E1EDE6] py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4 items-start">

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <img src="/images/logo/star.png" alt="Ink. House" className="w-8 h-8 opacity-80" />
                            <span className="text-[#598D66] text-xl font-bold uppercase tracking-tight">Ink. House</span>
                        </div>
                        <div className="space-y-1">
                            <a href="tel:+79995435454" className="text-[#2C2D35] text-[18px] font-medium hover:text-[#598D66] transition-all">
                                +7 (999) 543-54-54
                            </a>
                            <p className="text-[#86928B] text-sm">Мастерская</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#2C2D35] font-semibold text-[20px]">Репродукции</h4>
                        <ul className="text-[#86928B] space-y-3">
                            <li className="hover:text-[#598D66] cursor-pointer transition-colors w-fit">Франция</li>
                            <li className="hover:text-[#598D66] cursor-pointer transition-colors w-fit">Германия</li>
                            <li className="hover:text-[#598D66] cursor-pointer transition-colors w-fit">Англия</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#2C2D35] font-semibold text-[20px]">Новинки</h4>
                        <ul className="text-[#86928B] space-y-3">
                            <li className="hover:text-[#598D66] cursor-pointer transition-colors w-fit">2021</li>
                            <li className="hover:text-[#598D66] cursor-pointer transition-colors w-fit">2020</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#2C2D35] font-semibold text-[20px]">О нас</h4>
                        <ul className="text-[#86928B] space-y-3">
                            <li className="hover:text-[#598D66] cursor-pointer transition-colors w-fit">Художники</li>
                            <li className="hover:text-[#598D66] cursor-pointer transition-colors w-fit">Менеджеры</li>
                        </ul>
                    </div>

                    <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-end gap-6 pt-8 md:pt-12 lg:pt-0 border-t border-[#D1E0D6] md:border-none">
                        <div className="flex gap-6 text-[24px] text-[#2C2D35]">
                            <FaFacebook className="hover:text-[#598D66] cursor-pointer transition-transform hover:scale-110" />
                            <FaInstagram className="hover:text-[#598D66] cursor-pointer transition-transform hover:scale-110" />
                            <FaYoutube className="hover:text-[#598D66] cursor-pointer transition-transform hover:scale-110" />
                        </div>
                        <div className="text-[#86928B] text-xs text-center lg:text-right">
                            <p>Ink. House ®</p>
                            <p>All rights reserved</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;