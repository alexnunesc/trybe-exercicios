// /src/context/ThemeProvider.js

import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('dark');

  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      {/* isso dá acesso as propiedades do state para todos os componentes dentro do escopo */}
      <div className={ themeColor }>
        { children }
      </div>
    </ThemeContext.Provider>
  );
}
