import { Link } from 'react-router';
import { Home, ShoppingCart, UserCircle, Settings as SettingsIcon } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/shopping" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <ShoppingCart size={20} />
              <span>Shopping</span>
            </Link>
            <Link to="/dashboard" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <UserCircle size={20} />
              <span>Dashboard</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600">
              <SettingsIcon size={20} />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}