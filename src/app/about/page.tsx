/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
    return (
        <div className="min-h-screen py-12 px-6 lg:px-32 bg-gray-500 text-white">
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 my-7">About Our Café</h1>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Introduction</h2>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                        Welcome to our charming café, where we are deeply passionate about brewing the finest, most aromatic coffee for our vibrant community. Established in 2020, we’ve grown into a cozy and welcoming spot where you can enjoy handcrafted beverages and a warm, inviting atmosphere.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                        Our dedicated team is committed to offering you the best, most delightful experience, one cup at a time.
                    </p>
                </div>
            </section>
            <section className="mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-10">Services Offered</h2>
                <div className="max-w-4xl mx-auto text-lg">
                    <p className="leading-relaxed mb-6 text-center">
                        We take pride in offering a variety of services designed to make your visit enjoyable and memorable. Whether you're here for a quick coffee break or a leisurely afternoon, we have something for everyone.
                    </p>
                    <ul className="space-y-4 text-white list-inside list-disc">
                        <li>Handcrafted coffee brewed from freshly roasted beans</li>
                        <li>A wide selection of teas and specialty drinks</li>
                        <li>Freshly baked pastries and light snacks</li>
                        <li>Cozy seating areas for relaxation and work</li>
                        <li>Free high-speed Wi-Fi for all our guests</li>
                        <li>Catering services for small events and private gatherings</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-8">Our Team</h2>
                <div className="max-w-4xl mx-auto">
                    <p className="text-base md:text-lg leading-relaxed mb-10 text-center">
                        Our team of dedicated staff is committed to creating a welcoming and enjoyable experience for our guests. We have a mix of professionals and enthusiasts who work together to bring you the best possible coffee experience.
                    </p>
                </div>
            </section>
        </div>
    );
}
