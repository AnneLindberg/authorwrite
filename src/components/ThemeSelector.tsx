import React from 'react';
import { writingThemes } from '../themes';
import { WritingTheme } from '../types';

interface ThemeSelectorProps {
  currentTheme: WritingTheme;
  setCurrentTheme: (theme: WritingTheme) => void;
  isDarkMode: boolean;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  setCurrentTheme,
  isDarkMode
}) => {
  return (
    <div className={`px-4 py-2 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex gap-2">
        {Object.values(writingThemes).map((theme) => (
          <button
            key={theme.id}
            onClick={() => setCurrentTheme(theme)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              currentTheme.id === theme.id
                ? `bg-${theme.accentColor}-100 dark:bg-${theme.accentColor}-900 
                   text-${theme.accentColor}-700 dark:text-${theme.accentColor}-300`
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;