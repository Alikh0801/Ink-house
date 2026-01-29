import React from 'react'

function Banner() {
    return (
        <section className="relative w-full overflow-hidden flex items-center">
            <div
                className="absolute inset-0 z-0 bg-cover bg-no-repeat -scale-x-100"
                style={{
                    backgroundImage: "url('/images/banner/banner.jpg')",
                    backgroundPosition: 'right 25%'
                }}
            />

            <div className="absolute inset-0 z-10 bg-linear-to-r from-[#2C2D35] via-[#2C2D35]/60 to-transparent"></div>

            <div className="container max-w-6xl mx-auto px-6 sm:px-6 relative z-20 py-16 lg:py-24">

                <div className="max-w-full sm:max-w-140">
                    <div className="flex items-center gap-4 sm:gap-5 mb-6">
                        <img
                            src="/images/banner/star.png"
                            alt="star"
                            className="w-16 h-16 sm:w-20 sm:h-20 shrink-0"
                        />
                        <h2 className="text-white text-3xl lg:text-4xl leading-tight font-medium">
                            Новая коллекция французских авторов
                        </h2>
                    </div>
                    <div className="space-y-6 mb-10">
                        <p className="text-[#E1EDE6] text-base lg:text-lg leading-relaxed">
                            Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.
                        </p>
                        <p className="hidden sm:block text-[#E1EDE6] text-base lg:text-lg leading-relaxed">
                            Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
                        </p>
                    </div>

                    <button className="bg-[#EEDB6D] text-[#2C2D35] px-14 py-5 font-bold hover:bg-[#F3E085] transition-all text-xl max-sm:w-full">
                        Ознакомиться
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Banner;