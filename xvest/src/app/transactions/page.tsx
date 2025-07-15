import { 
  ArrowUpIcon,
  ArrowDownIcon,
  FunnelIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import Sidebar from '@/components/Sidebar';

const transactions = [
  {
    id: 'TX123',
    type: 'buy',
    symbol: 'AAPL',
    shares: 500,
    price: 190.5,
    total: 95250,
    date: '2025-07-15',
    status: 'completed'
  },
  {
    id: 'TX122',
    type: 'sell',
    symbol: 'TSLA',
    shares: 200,
    price: 250.75,
    total: 50150,
    date: '2025-07-14',
    status: 'completed'
  },
  {
    id: 'TX121',
    type: 'buy',
    symbol: 'MSFT',
    shares: 300,
    price: 375.25,
    total: 112575,
    date: '2025-07-14',
    status: 'completed'
  },
  {
    id: 'TX120',
    type: 'buy',
    symbol: 'GOOGL',
    shares: 150,
    price: 142.8,
    total: 21420,
    date: '2025-07-13',
    status: 'completed'
  },
  {
    id: 'TX119',
    type: 'sell',
    symbol: 'AMZN',
    shares: 100,
    price: 145.5,
    total: 14550,
    date: '2025-07-13',
    status: 'completed'
  }
];

export default function Transactions() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Transactions</h1>
          <p className="text-gray-400">View and manage your trading activity</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
            <div className="flex gap-4">
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search transactions..."
                  className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white hover:bg-gray-700/50 transition-colors">
                <FunnelIcon className="w-5 h-5" />
                Filter
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900/50">
                  <th className="text-left p-4 text-gray-400 font-medium">ID</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Type</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Symbol</th>
                  <th className="text-right p-4 text-gray-400 font-medium">Shares</th>
                  <th className="text-right p-4 text-gray-400 font-medium">Price</th>
                  <th className="text-right p-4 text-gray-400 font-medium">Total</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Date</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-t border-gray-700 hover:bg-gray-700/20">
                    <td className="p-4 text-gray-300 font-mono">{tx.id}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-medium ${
                        tx.type === 'buy' 
                          ? 'bg-green-500/10 text-green-500' 
                          : 'bg-red-500/10 text-red-500'
                      }`}>
                        {tx.type === 'buy' ? <ArrowDownIcon className="w-4 h-4" /> : <ArrowUpIcon className="w-4 h-4" />}
                        {tx.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4 text-blue-400 font-medium">{tx.symbol}</td>
                    <td className="p-4 text-right text-gray-300">
                      {tx.shares.toLocaleString()}
                    </td>
                    <td className="p-4 text-right text-gray-300">
                      ${tx.price.toFixed(2)}
                    </td>
                    <td className="p-4 text-right text-gray-300">
                      ${tx.total.toLocaleString()}
                    </td>
                    <td className="p-4 text-gray-300">{tx.date}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                        {tx.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}