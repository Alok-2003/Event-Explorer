'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  // Default theme state before context is available
  const [themeState, setThemeState] = useState({
    resolvedTheme: 'light' as 'light' | 'dark',
    setTheme: (theme: 'light' | 'dark' | 'system') => {}
  });
  const [mounted, setMounted] = useState(false);

  // Ensure we're rendering the UI after mounting to avoid hydration mismatches
  useEffect(() => {
    setMounted(true);
    
    try {
      // Safely get theme context after mounting
      const { resolvedTheme, setTheme } = useTheme();
      setThemeState({ resolvedTheme, setTheme });
    } catch (error) {
      console.warn('ThemeProvider not available yet');
    }
  }, []);

  if (!mounted) {
    return (
      <header className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400 transition-all duration-300 hover:opacity-80"
        >
          EventExplorer
        </Link>
        
        <nav className="flex items-center space-x-4">
          <button
            aria-label={themeState.resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            onClick={() => themeState.setTheme(themeState.resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            {themeState.resolvedTheme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
