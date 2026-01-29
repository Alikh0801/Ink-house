import React from 'react'

function Hero() {
    return (
        <section className="bg-white py-10 sm:py-20">
            <div className="container mx-auto max-w-6xl px-4 flex flex-row items-center gap-6 sm:gap-16">
                <div className="hidden sm:flex sm:flex-1 justify-center">
                    <img
                        src="../images/hero/hero.png"
                        alt="Hero"
                        className="w-full max-w-70 md:max-w-md -scale-x-100 object-contain"
                    />
                </div>
                <div className="flex-1 text-left">
                    <h1 className="text-[30px] sm:text-[36px] md:text-6xl font-semibold text-[#2C2D35] leading-tight mb-6">
                        Реплики картин от <br className="hidden md:block" />
                        <span className="text-[#598D66]">Ink. House</span>
                    </h1>
                    <p className="text-[#86928B] text-base sm:text-lg mb-8 max-w-md leading-relaxed">
                        Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
                    </p>
                    <button className="border border-[#598D66] text-[#598D66] px-10 py-3 sm:px-12 sm:py-4 sm:w-auto hover:bg-[#598D66] hover:text-white transition-all">
                        Продукция
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;