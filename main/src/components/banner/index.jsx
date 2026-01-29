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

            <div className="container mx-auto px-50 py-15 relative z-20">
                <div className="max-w-137.5">
                    <div className="flex items-start gap-5">
                        <img
                            src="/images/banner/star.png"
                            alt="star"
                            className="w-20 h-20 shrink-0"
                        />
                        <h2 className="text-white text-4xl leading-tight">
                            Новая коллекция французских авторов
                        </h2>
                    </div>

                    <div className="space-y-6 py-10">
                        <p className="text-[#E1EDE6] text-lg leading-relaxed">
                            Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.
                        </p>
                        <p className="text-[#E1EDE6] text-lg leading-relaxed">
                            Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
                        </p>
                    </div>

                    <button className="bg-[#EEDB6D] text-[#2C2D35] px-14 py-5 font-bold hover:bg-[#F3E085] transition-all text-xl">
                        Ознакомиться
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Banner;