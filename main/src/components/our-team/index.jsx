import React from 'react'

function Team() {
    return (
        <section className="max-w-6xl mx-auto px-4 mt-40 mb-20 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 relative flex justify-start items-end">

                <img
                    src="/images/team/framee.png"
                    alt="Frame"
                    className="relative z-10 w-full h-120"
                />

                <img
                    src="/images/team/pens.png"
                    alt="Pens"
                    className="absolute z-20 w-[65%] left-[12%] -top-[2%] origin-bottom -scale-x-100"
                    style={{
                        transform: 'translateY(-15%)'
                    }}
                />
            </div>

            <div className="flex-1">
                <h2 className="text-4xl font-semibold text-[#2C2D35] mb-8">Наша команда</h2>
                <p className="text-[#2C2D35] text-lg mb-10">
                    Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.
                </p>

                <div className="flex gap-6">
                    <img src="/images/team/person1.jpg" alt="Team 1" className="w-20 h-20 rounded-full object-cover border-2 border-[#598D66]" />
                    <img src="/images/team/person2.jpg" alt="Team 2" className="w-20 h-20 rounded-full object-cover border-2 border-[#598D66]" />
                    <img src="/images/team/person3.jpg" alt="Team 3" className="w-20 h-20 rounded-full object-cover border-2 border-[#598D66]" />
                </div>
            </div>
        </section>
    )
}

export default Team;