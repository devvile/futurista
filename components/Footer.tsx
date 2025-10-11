const Footer = () => {
    return (
        <footer className="py-12 px-8 bg-gradient-to-b from-[#1a0b3f] via-[#0f0626] to-black border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Logo and Email */}
                    <div>
                        <p className="text-xl sm:text-2xl font-centauri select-none mb-2">
                            Futurista
                        </p>
                        <p className="font-mono text-stone-400 text-xs sm:text-sm">
                            <span className="email-protected">
                                patryk.czemierowski
                                <span className="at-symbol" data-at="@"></span>
                                futurista.dev
                            </span>
                        </p>
                    </div>
                    
                    {/* Home Section */}
                    <div></div>
                    {/*
                    <div>
                        <h4 className="font-semibold mb-4 text-base">Home</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                        </ul>
                    </div>
                    */}
                    {/* Company Section */}
                    <div>
                        <h4 className="font-semibold mb-4 text-base">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#about" className="hover:text-white transition-colors">Back to the top</a></li>
                            <li><a href="about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <p className="text-gray-400 text-lg">© Futurista {new Date().getFullYear()}</p>
                </div>
            </div>

            <style jsx>{`
                .at-symbol::before {
                    content: attr(data-at);
                }
            `}</style>
        </footer>
    );
}
export default Footer;