import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button, Drawer } from 'antd';
import { RootState } from '../../store';
import { toggleTheme } from '../../store/themeSlice';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            BusinessPro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              type="text"
              onClick={() => dispatch(toggleTheme())}
              icon={darkMode ? <Sun size={20} /> : <Moon size={20} />}
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            type="text"
            className="md:hidden"
            icon={<Menu size={24} />}
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </header>
  );
};