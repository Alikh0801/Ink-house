export const Card = ({ item }) => (
    <div className="bg-[#E1EDE6] p-5 flex flex-col h-auto">
        <div className="mb-5 overflow-hidden">
            <img
                src={item.img}
                alt={item.title}
                className="w-full h-90 sm:h-90 md:h-100 lg:h-110 object-cover"
            />
        </div>
        <div className="flex flex-col grow">
            <span className="text-[#86948B] text-sm mb-1">{item.author}</span>
            <h3 className="text-2xl font-medium mb-2 text-[#2C2D35] leading-10">{item.title}</h3>
            <p className="text-[#2C2D35] text-sm mb-8">{item.desc}</p>
            <div className="mt-auto">
                <p className="text-[#598D66] font-semibold text-xl mb-5">
                    {item.price.toLocaleString()} руб
                </p>
                <button className="w-full border border-[#598D66] text-[#598D66] py-3 text-lg hover:bg-[#598D66] hover:text-white transition-colors duration-300">
                    В корзину
                </button>
            </div>
        </div>
    </div>
);