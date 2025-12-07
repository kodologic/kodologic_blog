const NewsCard = ({ title, summary, date, category }: { title: string, summary: string, date: string, category: string }) => {
    return (
        <div className="card-gradient p-6 rounded-xl flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">{category}</span>
                <span className="text-xs text-gray-500">{date}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 hover:text-primary cursor-pointer transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">{summary}</p>
            <a href="#" className="text-primary text-sm font-semibold hover:tracking-wide transition-all mt-auto inline-block">
                Read Article
            </a>
        </div>
    );
};

export default NewsCard;
