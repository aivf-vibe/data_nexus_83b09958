import Link from 'next/link';
import { 
  HomeIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon,
  DocumentTextIcon,
  CogIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, href: '/' },
    { name: 'Portfolio', icon: ChartBarIcon, href: '/portfolio' },
    { name: 'Transactions', icon: CurrencyDollarIcon, href: '/transactions' },
    { name: 'Reports', icon: DocumentTextIcon, href: '/reports' },
    { name: 'Investors', icon: UserGroupIcon, href: '/investors' },
    { name: 'Settings', icon: CogIcon, href: '/settings' },
  ];

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800/50 backdrop-blur-xl border-r border-gray-700">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">XVest</h1>
      </div>
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;