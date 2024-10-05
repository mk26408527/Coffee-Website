import React from 'react';

export default function ContactPage() {
    return (
        <>
        <main>
            <section className="bg-gray-700 text-white text-center py-20">
                <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
                <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
                    We would love to hear from you! Please fill out the form below to get in touch.
                </p>
            </section>
            <section className="bg-gray-500 py-16">
                <div className="container mx-auto px-6 md:px-0">
                    <form className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
                        
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600 mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B68934]"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B68934]"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-600 mb-2">Your Message</label>
                            <textarea
                                id="message"
                                placeholder="Type your message..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B68934]"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="bg-gray-700 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Our Address</h2>
                    <p className="text-gray-100 mb-4">123 Coffee St, Paris, France</p>
                    <p className="text-gray-100 mb-4">Email: info@cafegrandeur.com</p>
                    <p className="text-gray-100">Phone: +33 1 23 45 67 89</p>
                </div>
            </section>
        </main>
        </>
    );
}
