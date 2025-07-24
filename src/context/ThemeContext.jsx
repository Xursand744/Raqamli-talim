import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Проверяем localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Проверяем системные настройки
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  // Новые состояния для режимов доступности
  const [accessibilityMode, setAccessibilityMode] = useState(() => {
    const savedMode = localStorage.getItem('accessibilityMode');
    return savedMode || 'normal';
  });

  useEffect(() => {
    // Применяем тему к DOM
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Сохраняем в localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Удаляем все предыдущие accessibility классы
    document.documentElement.classList.remove('grayscale-mode', 'high-contrast-mode');
    
    // Применяем новый режим доступности
    if (accessibilityMode === 'grayscale') {
      document.documentElement.classList.add('grayscale-mode');
    } else if (accessibilityMode === 'high-contrast') {
      document.documentElement.classList.add('high-contrast-mode');
    }
    
    // Сохраняем в localStorage
    localStorage.setItem('accessibilityMode', accessibilityMode);
  }, [accessibilityMode]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const setGrayscaleMode = () => {
    setAccessibilityMode(accessibilityMode === 'grayscale' ? 'normal' : 'grayscale');
  };

  const setHighContrastMode = () => {
    setAccessibilityMode(accessibilityMode === 'high-contrast' ? 'normal' : 'high-contrast');
  };

  const resetAccessibilityMode = () => {
    setAccessibilityMode('normal');
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    accessibilityMode,
    setAccessibilityMode,
    setGrayscaleMode,
    setHighContrastMode,
    resetAccessibilityMode,
    isGrayscale: accessibilityMode === 'grayscale',
    isHighContrast: accessibilityMode === 'high-contrast'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 