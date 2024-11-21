import React from 'react';
import { Theme, WritingTheme } from '../types';

interface WritingAreaProps {
  content: string;
  setContent: (content: string) => void;
  soundEnabled: boolean;
  theme: Theme;
  currentTheme: WritingTheme;
}

const WritingArea: React.FC<WritingAreaProps> = ({
  content,
  setContent,
  soundEnabled,
  currentTheme
}) => {
  const handleKeyPress = () => {
    if (soundEnabled && currentTheme.soundEffect) {
      const audio = new Audio(currentTheme.soundEffect);
      audio.volume = 0.1;
      audio.play();
    }
  };

  return (
    <div className="flex-1 overflow-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-8">
      <textarea
        className={`w-full h-full resize-none border-none focus:ring-0 text-lg leading-relaxed
          ${currentTheme.background} ${currentTheme.textColor} transition-all duration-300`}
        style={{
          fontFamily: currentTheme.fontFamily,
          outline: 'none'
        }}
        placeholder="Start writing your story..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default WritingArea;