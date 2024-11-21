import React, { useState, useEffect } from 'react';
import { writingThemes } from '../themes';
import Toolbar from './Toolbar';
import WritingArea from './WritingArea';
import LeftSidebar from './sidebars/LeftSidebar';
import RightSidebar from './sidebars/RightSidebar';
import ThemeSelector from './ThemeSelector';
import { Theme } from '../types';

const Editor: React.FC = () => {
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [content, setContent] = useState('');
  const [currentTheme, setCurrentTheme] = useState(writingThemes.modern);
  const [ambientAudio, setAmbientAudio] = useState<HTMLAudioElement | null>(null);

  const theme: Theme = {
    isDarkMode,
    bg: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-800',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    hover: isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
  };

  useEffect(() => {
    if (currentTheme.ambientSound && soundEnabled) {
      const audio = new Audio(currentTheme.ambientSound);
      audio.loop = true;
      audio.volume = 0.1;
      audio.play();
      setAmbientAudio(audio);
    }

    return () => {
      if (ambientAudio) {
        ambientAudio.pause();
        setAmbientAudio(null);
      }
    };
  }, [currentTheme.id, soundEnabled]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${currentTheme.background}`}>
      <div className="flex h-screen">
        <LeftSidebar
          show={showLeftSidebar}
          theme={theme}
        />
        
        <div className="flex-1 flex flex-col">
          <Toolbar
            showLeftSidebar={showLeftSidebar}
            setShowLeftSidebar={setShowLeftSidebar}
            showRightSidebar={showRightSidebar}
            setShowRightSidebar={setShowRightSidebar}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            theme={theme}
            currentTheme={currentTheme}
            content={content}
          />
          <ThemeSelector
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
            isDarkMode={isDarkMode}
          />
          <WritingArea
            content={content}
            setContent={setContent}
            soundEnabled={soundEnabled}
            theme={theme}
            currentTheme={currentTheme}
          />
        </div>

        <RightSidebar
          show={showRightSidebar}
          theme={theme}
          content={content}
        />
      </div>
    </div>
  );
};

export default Editor;