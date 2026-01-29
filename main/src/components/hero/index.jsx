import React from 'react'

function Hero() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1">
                <img src="../images/hero/hero.png" alt="Hero Bird" className="w-full max-w-md -scale-x-100" />
            </div>
            <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-semibold text-[#2C2D35] leading-16 mb-6">
                    Реплики картин от <span className="text-[#598D66]">Ink. House</span>
                </h1>
                <p className="text-[#86948B] text-lg mb-10 max-w-md">
                    Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
                </p>
                <button className="border border-[#598D66] text-[#598D66] px-13 py-3 hover:bg-[#598D66] hover:text-white transition">
                    Продукция
                </button>
            </div>
        </section>
    )
}

export default Hero;