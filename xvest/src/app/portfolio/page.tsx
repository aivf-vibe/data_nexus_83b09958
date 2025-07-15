import { 
  CurrencyDollarIcon,
  ChartBarIcon,
  ScaleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import Sidebar from '@/components/Sidebar';
import DashboardCard from '@/components/DashboardCard';

const holdings = [
  { 
    name: 'Apple Inc.',
    symbol: 'AAPL',
    shares: 15000,
    value: 2850000,
    change: 2.3,
    allocation: 8.5
  },
  {
    name: 'Microsoft Corp.',
    symbol: 'MSFT',
    shares: 12000,
    value: 2400000,
    change: 1.8,
    allocation: 7.2
  },
  {
    name: 'Alphabet Inc.',
    symbol: 'GOOGL',
    shares: 8000,
    value: 2280000,
    change: -1.2,
    allocation: 6.8
  },
  {
    name: 'Amazon.com Inc.',
    symbol: 'AMZN',
    shares: 10000,
    value: 1980000,
    change: 3.1,
    allocation: 5.9
  },
  {
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    shares: 5000,
    value: 1750000,
    change: -2.4,
    allocation: 5.2
  }
];

export default function Portfolio() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-gray-400">Manage and monitor your investments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Value"
            metric="$33.5M"
            icon={<CurrencyDollarIcon className="w-6 h-6" />}
            trend={{ value: 8.2, isUpward: true }}
          />
          <DashboardCard
            title="Daily Return"
            metric="+1.2%"
            icon={<ChartBarIcon className="w-6 h-6" />}
            trend={{ value: 0.8, isUpward: true }}
          />
          <DashboardCard
            title="Beta"
            metric="1.12"
            icon={<ScaleIcon className="w-6 h-6" />}
            trend={{ value: 0.05, isUpward: true }}
          />
          <DashboardCard
            title="Volatility"
            metric="15.4%"
            icon={<ArrowTrendingUpIcon className="w-6 h-6" />}
            trend={{ value: 2.1, isUpward: false }}
          />
        </div>

        <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Holdings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900/50">
                  <th className="text-left p-4 text-gray-400 font-medium">Name</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Symbol</th>
                  <th className="text-right p-4 text-gray-400 font-medium">Shares</th>
                  <th className="text-right p-4 text-gray-400 font-medium">Value</th>
                  <th className="text-right p-4 text-gray-400 font-medium">Change</th>
                  <th className="text-right p-4 text-gray-400 font-medium">Allocation</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding) => (
                  <tr key={holding.symbol} className="border-t border-gray-700 hover:bg-gray-700/20">
                    <td className="p-4 text-white">{holding.name}</td>
                    <td className="p-4 text-blue-400 font-medium">{holding.symbol}</td>
                    <td className="p-4 text-right text-gray-300">
                      {holding.shares.toLocaleString()}
                    </td>
                    <td className="p-4 text-right text-gray-300">
                      ${(holding.value / 1000).toFixed(1)}K
                    </td>
                    <td className={`p-4 text-right ${holding.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {holding.change >= 0 ? '+' : ''}{holding.change}%
                    </td>
                    <td className="p-4 text-right text-gray-300">
                      {holding.allocation}%
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