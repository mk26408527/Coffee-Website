/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import React from "react";

export default function HomePage() {
  return (
    <>
    <main className="fade-up">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-16 md:py-24 bg-gray-700 text-gray-50">
        <div className="flex flex-col items-start">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4 fade-in">Café Grandeur</h1>
          <p className="text-lg md:text-xl mb-6">Welcome to Café Grandeur, a cozy and modern café located in the heart of Paris.</p>
          <p className="mb-4">We offer a wide range of coffee beans, from the most delicious to the most robust, and a selection of coffees from around the world.</p>  
          <div className="mt-4">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-5 rounded hover:scale-110 transform transition ease-out duration-500">
  <Link href="/contact">Contact Us</Link>
</button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-10">
        <img 
        src="pic.jpeg"
        alt="Coffee" 
        className="w-full max-w-xs md:max-w-sm h-auto rounded-lg shadow-lg slide-in" 
        />
        </div>
      </div>

      <br /><br /><br />
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-50 mb-5">
        WE BELIEVE IN COFFEE THAT TASTES <br className="hidden md:block" /> INCREDIBLE
      </h2>
      <p className="text-center text-lg md:text-xl flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-52">
        Every cup we brew reflects our passion for quality, using beans from the finest coffee farms. From rich espressos to smooth lattes, we deliver a satisfying coffee experience, perfect for jump-starting your day or relaxing with friends.
      </p> 

      <br /><br />
      <main>
        <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8 p-6">
          <div className="text-center bg-gray-900 p-4 rounded-lg shadow-xl transform transition hover:scale-105 duration-500">
          <img 
          src="pic1.jpeg" 
          alt="Espresso Coffee" 
          className="w-40 h-32 rounded-lg shadow-lg mx-auto transform transition hover:rotate-12 duration-500"
          />

            <h3 className="text-2xl font-bold mt-4 text-white">Espresso</h3>
            <p className="text-gray-50 mt-2">A bold espresso captured with splashing coffee drops. Simple yet energetic, highlighting the beauty of the drink in a classic cup.</p>
          </div>

          <div className="text-center bg-orange-100 p-4 rounded-lg shadow-xl transform transition hover:scale-105 duration-500">
            <img 
              src="pic2.jpeg" 
              alt="Heartfelt Coffee" 
              loading="lazy"
              className="w-40 h-32 rounded-lg shadow-lg mx-auto transform transition hover:-rotate-12 duration-500"
            />
            <h3 className="text-2xl font-bold mt-4 text-black">Special Heartfelt Coffee</h3>
            <p className="text-black-900 mt-2">This image brings together the warmth of coffee and love. The heart made of beans and the cranes represent the peaceful bond shared in special coffee moments.</p>
          </div>

          <div className="text-center bg-gray-900 p-4 rounded-lg shadow-xl transform transition hover:scale-105 duration-500">
            <img 
              src="pic3.jpeg" 
              alt="Latte Coffee" 
              loading="lazy"
              className="w-40 h-32 rounded-lg shadow-lg mx-auto transform transition hover:rotate-12 duration-500"
            />
            <h3 className="text-2xl font-bold mt-4 text-white">Latte</h3>
            <p className="text-gray-50 mt-2">A creamy latte with delicate leaf art. Its smooth texture and beautiful design make this cup of coffee a true work of art.</p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-5 mb-12 rounded hover:transition ease-out duration-500 transform hover:scale-110">
            <Link href="/menu">Full Menu</Link>
          </button>
        </div>
      </main>
      <main className="py-10 container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Customers Feedback</h2>

        <div className="flex flex-wrap justify-center gap-8 px-4 lg:px-32">
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl w-64 md:w-72 transform transition hover:scale-105 duration-500">
            <img
              src="pic4.jpeg"
              alt="Client 1 review"
              loading="lazy"
              className="w-32 md:w-44 h-32 md:h-44 object-cover rounded-3xl mx-auto mb-4"
            />
            <p className="text-gray-50 text-sm mb-2">"This espresso shot was perfection! The flavor was bold and smooth, giving me the energy I needed for the day."</p>
            <p className="text-yellow-500 font-bold">- John Doe</p>
          </div>

          <div className="bg-orange-100 p-6 rounded-lg shadow-xl w-64 md:w-72 transform transition hover:scale-105 duration-500">
            <img
              src="pic5.jpeg"
              alt="Client 2 review"
              loading="lazy"
              className="w-32 md:w-44 h-32 md:h-44 object-cover rounded-3xl mx-auto mb-4"
            />
            <p className="text-gray-800 text-sm mb-2">"The latte had such a creamy texture with beautiful leaf art. The taste was balanced, and the presentation was spot-on."</p>
            <p className="text-orange-600 font-bold">- Jane Smith</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-xl w-64 md:w-72 transform transition hover:scale-105 duration-500">
            <img
              src="pic6.jpeg"
              alt="Client 3 review"
              loading="lazy"
              className="w-32 md:w-44 h-32 md:h-44 object-cover rounded-3xl mx-auto mb-4"
            />
            <p className="text-gray-50 text-sm mb-2">"I loved the cappuccino! It was frothy, rich, and the best way to start my morning. I can’t wait to have another."</p>
            <p className="text-yellow-500 font-bold">- Michael Brown</p>
          </div>
        </div>
      </main>
    </main>
    </>
  );
}
