import React, { useState } from 'react';
import { FileText, LayoutGrid, StickyNote, FileType } from 'lucide-react';
import { Theme } from '../../types';
import Navigation from './left/Navigation';
import SceneCards from './left/SceneCards';
import Notes from './left/Notes';
import Templates from './left/Templates';

interface LeftSidebarProps {
  show: boolean;
  theme: Theme;
}

const tabs = [
  { id: 'navigation', icon: FileText, label: 'Navigation' },
  { id: 'scenes', icon: LayoutGrid, label: 'Scene Cards' },
  { id: 'notes', icon: StickyNote, label: 'Notes' },
  { id: 'templates', icon: FileType, label: 'Templates' }
];

const LeftSidebar: React.FC<LeftSidebarProps> = ({ show, theme }) => {
  const [activeTab, setActiveTab] = useState('navigation');

  if (!show) return null;

  const components = {
    navigation: Navigation,
    scenes: SceneCards,
    notes: Notes,
    templates: Templates
  };

  const Component = components[activeTab as keyof typeof components];

  return (
    <div className={`w-80 border-r ${theme.border} ${theme.bg} flex flex-col`}>
      <div className={`flex border-b ${theme.border}`}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 p-3 flex flex-col items-center gap-1 ${
                activeTab === tab.id
                  ? theme.isDarkMode
                    ? 'bg-gray-800 text-blue-400'
                    : 'bg-gray-100 text-blue-600'
                  : `${theme.text} ${theme.hover}`
              } transition-colors`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="flex-1 overflow-y-auto">
        <Component theme={theme} />
      </div>
    </div>
  );
};

export default LeftSidebar;