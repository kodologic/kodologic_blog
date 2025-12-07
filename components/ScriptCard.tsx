import { BarChart2, Zap } from 'lucide-react';

const ScriptCard = ({ title, description, type, platform }: { title: string, description: string, type: string, platform: string }) => {
    return (
        <div className="card-gradient p-6 rounded-xl relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <BarChart2 size={100} />
            </div>
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                    {type === 'Strategy' ? <Zap className="text-yellow-400 w-4 h-4" /> : <BarChart2 className="text-primary w-4 h-4" />}
                    <span className={`text-xs font-bold px-2 py-1 rounded ${type === 'Strategy' ? 'text-yellow-400 bg-yellow-400/10' : 'text-primary bg-primary/10'}`}>
                        {type}
                    </span>
                </div>
                <span className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded-full">{platform}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm mb-6">{description}</p>
            <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
                View Details
            </button>
        </div>
    );
};

export default ScriptCard;
