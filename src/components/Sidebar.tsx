import React, { useState } from 'react';
import { Wand2, BookOpen, Users, Map, Network, FileText } from 'lucide-react';
import { Theme } from '../types';
import SidebarTab from './SidebarTab';

interface SidebarProps {
  show: boolean;
  theme: Theme;
}

const tabs = [
  { id: 'navigation', icon: FileText, label: 'Navigation' },
  { id: 'writing', icon: Wand2, label: 'Writing Tools' },
  { id: 'research', icon: BookOpen, label: 'Research' },
  { id: 'characters', icon: Users, label: 'Characters' },
  { id: 'scenes', icon: Map, label: 'Scene Cards' },
  { id: 'mindmap', icon: Network, label: 'Mind Map' }
];

const Sidebar: React.FC<SidebarProps> = ({ show, theme }) => {
  const [activeTab, setActiveTab] = useState('navigation');

  if (!show) return null;

  return (
    <div className={`w-80 border-l ${theme.border} ${theme.bg} flex flex-col`}>
      <div className={`flex border-b ${theme.border} flex-wrap`}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[33%] p-3 flex flex-col items-center gap-1 ${
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
        <SidebarTab id={activeTab} theme={theme} />
      </div>
    </div>
  );
};

export default Sidebar;