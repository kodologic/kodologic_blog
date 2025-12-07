const Footer = () => {
    return (
        <footer className="border-t border-gray-800 bg-surface mt-auto py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">Kodologic</h3>
                    <p className="text-gray-400 text-sm">Empowering traders with algorithmic insights and professional scripts.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-primary">Resources</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li><a href="#" className="hover:text-white">Documentation</a></li>
                        <li><a href="#" className="hover:text-white">API Reference</a></li>
                        <li><a href="#" className="hover:text-white">Community</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-primary">Legal</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-primary">Connect</h4>
                    {/* Add social icons here later */}
                    <p className="text-sm text-gray-400">contact@kodologic.net</p>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Kodologic LLC. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
