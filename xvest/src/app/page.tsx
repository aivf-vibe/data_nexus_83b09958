import { 
  CurrencyDollarIcon, 
  ArrowTrendingUpIcon,
  UserGroupIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import Sidebar from '@/components/Sidebar';
import DashboardCard from '@/components/DashboardCard';
import PortfolioChart from '@/components/PortfolioChart';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Overview of your hedge fund performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Assets Under Management"
            metric="$1.8B"
            icon={<CurrencyDollarIcon className="w-6 h-6" />}
            trend={{ value: 12.5, isUpward: true }}
          />
          <DashboardCard
            title="YTD Return"
            metric="18.7%"
            icon={<ArrowTrendingUpIcon className="w-6 h-6" />}
            trend={{ value: 5.2, isUpward: true }}
          />
          <DashboardCard
            title="Active Investors"
            metric="142"
            icon={<UserGroupIcon className="w-6 h-6" />}
            trend={{ value: 8.3, isUpward: true }}
          />
          <DashboardCard
            title="Sharpe Ratio"
            metric="2.1"
            icon={<ScaleIcon className="w-6 h-6" />}
            trend={{ value: 0.3, isUpward: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PortfolioChart />
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Top Holdings</h3>
              <div className="space-y-4">
                {[
                  { name: 'AAPL', allocation: 8.5, change: 2.3 },
                  { name: 'MSFT', allocation: 7.2, change: 1.8 },
                  { name: 'GOOGL', allocation: 6.8, change: -1.2 },
                  { name: 'AMZN', allocation: 5.9, change: 3.1 },
                ].map((holding) => (
                  <div key={holding.name} className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{holding.name}</p>
                      <p className="text-gray-400 text-sm">{holding.allocation}% allocation</p>
                    </div>
                    <span className={`${holding.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {holding.change >= 0 ? '+' : ''}{holding.change}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: 'New Investment', details: 'Investor #127 added $2.5M', time: '2h ago' },
                  { action: 'Position Closed', details: 'Sold TSLA position', time: '4h ago' },
                  { action: 'Report Generated', details: 'Q2 Performance Report', time: '6h ago' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start justify-between">
                    <div>
                      <p className="text-white font-medium">{activity.action}</p>
                      <p className="text-gray-400 text-sm">{activity.details}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
