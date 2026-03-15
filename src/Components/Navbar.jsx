import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full p-4 flex justify-between items-center bg-white dark:bg-slate-900 shadow-md z-50 transition-colors duration-500">
      <span className="font-bold text-xl dark:text-white">Happy birthday Corps</span>
      
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-yellow-400 transition-all"
      >
        {darkMode ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙'}
      </button>
    </nav>
  );
};