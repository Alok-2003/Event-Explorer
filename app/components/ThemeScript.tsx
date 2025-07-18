'use client';

import { useEffect } from 'react';

// This component is responsible for applying the initial theme class to the document
// without causing hydration mismatches
export default function ThemeScript() {
  useEffect(() => {
    // This code only runs on the client, after hydration
    const theme = localStorage.getItem('theme') || 'system';
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const resolvedTheme = theme === 'system' ? systemTheme : theme;
    
    if (resolvedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    
    // Add event listener for theme changes from localStorage
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue || 'system';
        const newSystemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const newResolvedTheme = newTheme === 'system' ? newSystemTheme : newTheme;
        
        if (newResolvedTheme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.style.colorScheme = 'dark';
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.style.colorScheme = 'light';
        }
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  return null;
}
