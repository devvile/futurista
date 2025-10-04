const Footer = () => {
    return (
        <footer className="py-12 px-8 bg-gradient-to-b from-[#1a0b3f] via-[#0f0626] to-black border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Top section with logo and newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 pb-12 border-b border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-black rounded-sm"></div>
                        </div>
                        <h3 className="text-2xl font-bold">Futurista</h3>
                    </div>
                    
                    <div className="flex gap-3 w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Write you email here..."
                            className="flex-1 md:w-64 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                        />
                        <button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                            Join the waitlist
                        </button>
                    </div>
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Company description */}
                    <div className="md:col-span-1">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Futurista is all you'll ever need in a template. It stands out from the crowd, fully customizable and with the power of CMS, you can achieve results in a matter of minutes.
                        </p>
                    </div>

                    {/* Home column */}
                    <div>
                        <h4 className="font-semibold mb-4 text-base">Home</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* More Templates column */}
                    <div>
                        <h4 className="font-semibold mb-4 text-base">More Templates</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">NajmAI</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sawad</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Ruya</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Nashra</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Bayt</a></li>
                        </ul>
                    </div>

                    {/* Company column */}
                    <div>
                        <h4 className="font-semibold mb-4 text-base">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Get Template</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="pt-8 border-t border-white/10">
                    <p className="text-gray-400 text-lg">Get latest updates here</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;