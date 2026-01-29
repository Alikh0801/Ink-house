import { useState } from "react"
import { gallery } from "../../data/data"
import { Card } from "./Card";


export const Reproduction = () => {
    const [activeTab, setActiveTab] = useState('France')

    const filteredData = gallery.filter(data => data.country === activeTab);

    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <h2 className="text-3xl font-semibold text-[#2C2D35]">Репродукции</h2>
                <div className="flex gap-4">
                    {['France', 'Germany', 'England'].map(cnt => (
                        <button key={cnt}
                            onClick={() => setActiveTab(cnt)}
                            className={`px-6 py-2 rounded-full text-sm transition ${activeTab === cnt
                                ? 'bg-[#376B44] text-white'
                                : 'bg-[#D4E8D9] text-[#2C2D35] hover:bg-[#C2DBC9]'
                                }`}
                        >
                            {cnt === 'France' ? 'Франция' : cnt === 'Germany' ? 'Германия' : 'Англия'}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData.map(item => <Card key={item.id} item={item} />)}
            </div>
        </section>
    )
}