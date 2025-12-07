import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 text-center">
                <div className="inline-block mb-4 px-3 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
                    Kodologic for Trader
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                    Master the Market with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Algorithmic Precision
                    </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    Access professional-grade TradingView scripts, automated strategies, and the latest insights in algorithmic trading.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/scripts" className="btn-primary flex items-center gap-2">
                        Explore Scripts
                    </Link>
                    <Link href="/news" className="px-6 py-2 border border-gray-700 rounded-lg hover:border-gray-500 transition-all bg-surface">
                        Read Latest News
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
