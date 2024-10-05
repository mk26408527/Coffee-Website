/* eslint-disable @next/next/no-img-element */
export default function Footer () {
    return (
        <footer className="bg-blue-100/80 font-sans dark:bg-gray-900">
            <div className="container px-4 sm:px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe to our newsletter to get updates.</h1>
                        <div className="flex flex-col mt-6 space-y-3 sm:space-y-0 sm:flex-row">
                            <input 
                                id="email" 
                                type="text" 
                                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" 
                                placeholder="Email Address" 
                            />
                            <button className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Our Menu</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Beautiful Design</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Information Technology</p>
                            <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Making Websites</p>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex gap-4 hover:cursor-pointer">
                        <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" className="w-28 h-auto" alt="Google Play Badge" />
                        <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" className="w-28 h-auto" alt="App Store Badge" />
                    </div>

                    <div className="flex gap-4 mt-6 sm:mt-0 hover:cursor-pointer">
                        <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" title="FaceBook" className="w-8 h-8" alt="Facebook" />
                        <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" title="Twitter" className="w-8 h-8" alt="Twitter" />
                        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" title="Instagram" className="w-8 h-8" alt="Instagram" />
                        <img src="https://www.svgrepo.com/show/94698/github.svg" title="GitHub" className="w-8 h-8" alt="GitHub" />
                        <img src="https://www.svgrepo.com/show/22037/path.svg" title="Path" className="w-8 h-8" alt="Path" />
                        <img src="https://www.svgrepo.com/show/28145/linkedin.svg" title="LinkedIn" className="w-8 h-8" alt="LinkedIn" />
                        <img src="https://www.svgrepo.com/show/22048/dribbble.svg" title="Dribbble" className="w-8 h-8" alt="Dribbble" />
                    </div>
                </div>
                <p className="font-sans p-8 text-center text-sm md:text-lg text-gray-300">© 2024 Made by Muhammad Huzaifa. All rights reserved.</p>
            </div>
        </footer>
    );
}
