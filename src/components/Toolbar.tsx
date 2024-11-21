import React, { useState } from 'react';
import {
  Sidebar,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Bold,
  Italic,
  Underline,
  List,
  Heading,
  Sparkles,
  MessageSquare,
  Globe,
  Shield,
  Bot
} from 'lucide-react';
import { Theme } from '../types';
import ContentAnalytics from './ContentAnalytics';

interface ToolbarProps {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  theme: Theme;
  content: string;
}

const Toolbar: React.FC<ToolbarProps> = ({
  showSidebar,
  setShowSidebar,
  soundEnabled,
  setSoundEnabled,
  isDarkMode,
  setIsDarkMode,
  theme,
  content
}) => {
  const [mode, setMode] = useState<'writing' | 'planning'>('writing');
  const [showAnalytics, setShowAnalytics] = useState(false);

  const formatButtons = [
    { icon: Bold, label: 'Bold' },
    { icon: Italic, label: 'Italic' },
    { icon: Underline, label: 'Underline' },
    { icon: List, label: 'List' },
    { icon: Heading, label: 'Heading' }
  ];

  const aiTools = [
    { icon: Sparkles, label: 'Ask AI' },
    { icon: MessageSquare, label: 'Generate Dialogue' },
    { icon: Globe, label: 'Enrich World' }
  ];

  return (
    <>
      <div className={`p-4 flex justify-between items-center border-b ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } ${theme.border}`}>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className={`p-2 rounded-lg ${theme.hover} transition-colors ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <Sidebar className="w-5 h-5" />
          </button>

          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />

          <div className="flex gap-1">
            {mode === 'writing' && formatButtons.map((btn) => {
              const Icon = btn.icon;
              return (
                <button
                  key={btn.label}
                  className={`p-2 rounded-lg ${theme.hover} transition-colors ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  title={btn.label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
            
            {mode === 'planning' && aiTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.label}
                  className={`p-2 rounded-lg ${theme.hover} transition-colors ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  title={tool.label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>

          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as 'writing' | 'planning')}
            className={`ml-4 px-3 py-1 rounded-lg ${
              theme.isDarkMode
                ? 'bg-gray-700 text-gray-200'
                : 'bg-gray-100 text-gray-800'
            } border-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="writing">Writing Mode</option>
            <option value="planning">Planning Mode</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowAnalytics(!showAnalytics)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${theme.hover} ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <Shield className="w-4 h-4" />
            <Bot className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-lg ${theme.hover} transition-colors ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${theme.hover} transition-colors ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
      
      {showAnalytics && (
        <ContentAnalytics
          content={content}
          theme={theme}
          onClose={() => setShowAnalytics(false)}
        />
      )}
    </>
  );
};

export default Toolbar;