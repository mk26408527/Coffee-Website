/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function MenuPage() {
    return (
        <>
        <main className="fade-up">
            <main className="relative flex items-center justify-center min-h-screen">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute z-10 text-center top-24 md:top-32 px-4">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6">Our Menu</h1>
                    <p className="text-white text-base md:text-lg max-w-lg md:max-w-2xl mx-auto leading-relaxed">
                        Welcome to Café Grandeur, where coffee is more than just a drink – it’s an experience. Nestled in the heart of Paris, we take pride in combining sophistication with a cozy atmosphere, ensuring every visit feels special.
                    </p>
                </div>
                <div className="w-full">
                    <img
                        src="pic7.jpeg"
                        alt="Background Image"
                        loading="lazy"
                        className="w-full h-screen object-cover"
                    />
                </div>
            </main>

            <section className="bg-gray-500 py-10 md:py-14">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 underline text-[#edbd63]">Our Menu</h2>
                    <p className="mb-8 md:mb-12 text-gray-50 text-base md:text-lg max-w-md md:max-w-xl mx-auto">
                        Explore our range of coffees and treats.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="p-4 md:p-6 shadow-lg rounded-lg bg-white hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
                            <img 
                                src="pic8.jpeg" 
                                alt="Espresso"
                                className="mb-4 rounded-lg w-full h-[200px] md:h-[250px] object-cover transition duration-300 transform hover:scale-110"
                            />
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#B68934]">Espresso</h3>
                            <p className="text-gray-600 text-lg md:text-xl mb-1">$3.00</p>
                            <p className="text-gray-700">A rich, strong coffee for a quick energy boost.</p>
                        </div>
                        <div className="p-4 md:p-6 shadow-lg rounded-lg bg-white hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
                            <img 
                                src="pic9.jpeg" 
                                alt="Cappuccino"
                                className="mb-4 rounded-lg w-full h-[200px] md:h-[250px] object-cover transition duration-300 transform hover:scale-110"
                            />
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#B68934]">Cappuccino</h3>
                            <p className="text-gray-600 text-lg md:text-xl mb-1">$4.50</p>
                            <p className="text-gray-700">A smooth blend of coffee and frothy milk.</p>
                        </div>
                        <div className="p-4 md:p-6 shadow-lg rounded-lg bg-white hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
                            <img 
                                src="pic10.jpeg" 
                                alt="Latte"
                                className="mb-4 rounded-lg w-full h-[200px] md:h-[250px] object-cover transition duration-300 transform hover:scale-110"
                            />
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#B68934]">Latte</h3>
                            <p className="text-gray-600 text-lg md:text-xl mb-1">$4.00</p>
                            <p className="text-gray-700">Our signature latte with creamy milk and a touch of sweetness.</p>
                        </div>
                        <div className="p-4 md:p-6 shadow-lg rounded-lg bg-white hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
                            <img 
                                src="pic11.jpeg" 
                                alt="Latte"
                                className="mb-4 rounded-lg w-full h-[200px] md:h-[250px] object-cover transition duration-300 transform hover:scale-110"
                            />
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#B68934]">Latte</h3>
                            <p className="text-gray-600 text-lg md:text-xl mb-1">$4.00</p>
                            <p className="text-gray-700">Our signature latte with creamy milk and a touch of sweetness.</p>
                        </div>
                        <div className="p-4 md:p-6 shadow-lg rounded-lg bg-white hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
                            <img 
                                src="pic12.jpeg" 
                                alt="Latte"
                                className="mb-4 rounded-lg w-full h-[200px] md:h-[250px] object-cover transition duration-300 transform hover:scale-110"
                            />
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#B68934]">Latte</h3>
                            <p className="text-gray-600 text-lg md:text-xl mb-1">$4.00</p>
                            <p className="text-gray-700">Our signature latte with creamy milk and a touch of sweetness.</p>
                        </div>
                        <div className="p-4 md:p-6 shadow-lg rounded-lg bg-white hover:bg-[#f0e4ca] transition duration-300 transform hover:scale-105">
                            <img 
                                src="pic13.jpeg" 
                                alt="Latte"
                                className="mb-4 rounded-lg w-full h-[200px] md:h-[250px] object-cover transition duration-300 transform hover:scale-110"
                            />
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#B68934]">Latte</h3>
                            <p className="text-gray-600 text-lg md:text-xl mb-1">$4.00</p>
                            <p className="text-gray-700">Our signature latte with creamy milk and a touch of sweetness.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}
