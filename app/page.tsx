import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";
import ScriptCard from "../components/ScriptCard";

export default function Home() {
    return (
        <div className="flex flex-col gap-12 pb-20">
            <Hero />

            {/* Latest News Section */}
            <section className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold border-l-4 border-primary pl-4">Latest Trading News</h2>
                    <a href="/news" className="text-primary hover:underline">View All &rarr;</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <NewsCard
                        title="Algorithm Regulation Updates 2025"
                        summary="New SEC guidelines for high-frequency trading firms and what it means for retail algo traders."
                        date="Dec 6, 2025"
                        category="Regulation"
                    />
                    <NewsCard
                        title="Pine Script v6 Released"
                        summary="TradingView releases major update with enhanced array manipulation and faster backtesting."
                        date="Dec 5, 2025"
                        category="Platform Update"
                    />
                    <NewsCard
                        title="AI in Market Prediction"
                        summary="How transformer models are changing the landscape of short-term price action prediction."
                        date="Dec 3, 2025"
                        category="AI/ML"
                    />
                </div>
            </section>

            {/* Featured Scripts Section */}
            <section className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold border-l-4 border-secondary pl-4">Featured Scripts & Strategies</h2>
                    <a href="/scripts" className="text-secondary hover:underline">View Library &rarr;</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ScriptCard
                        title="Advanced FVG Detector"
                        description="Automatically identifies Fair Value Gaps with multi-timeframe analysis capabilities."
                        type="Indicator"
                        platform="TradingView"
                    />
                    <ScriptCard
                        title="Mean Reversion Bot"
                        description="Automated strategy based on Bollinger Bands and RSI divergence."
                        type="Strategy"
                        platform="Python/MT5"
                    />
                    <ScriptCard
                        title="Volume Profile Fixed Range"
                        description="Custom implementation of VPFR for precise supply/demand zone identification."
                        type="Indicator"
                        platform="TradingView"
                    />
                </div>
            </section>
        </div>
    );
}
