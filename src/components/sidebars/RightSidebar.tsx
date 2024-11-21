import React, { useState } from 'react';
import { Wand2, Sparkles, Edit3, Search, Shield } from 'lucide-react';
import { Theme } from '../../types';
import AIAssistant from './right/AIAssistant';
import CreativityTools from './right/CreativityTools';
import EditingTools from './right/EditingTools';
import Research from './right/Research';
import ContentAnalytics from './right/ContentAnalytics';

interface RightSidebarProps {
  show: boolean;
  theme: Theme;
  content: string;
}

const tabs = [
  { id: 'ai', icon: Wand2, label: 'AI Assistant' },
  { id: 'creativity', icon: Sparkles, label: 'Creativity' },
  { id: 'editing', icon: Edit3, label: 'Editing' },
  { id: 'research', icon: Search, label: 'Research' },
  { id: 'analytics', icon: Shield, label: 'Analytics' }
];

const RightSidebar: React.FC<RightSidebarProps> = ({ show, theme, content }) => {
  const [activeTab, setActiveTab] = useState('ai');

  if (!show) return null;

  const components = {
    ai: AIAssistant,
    creativity: CreativityTools,
    editing: EditingTools,
    research: Research,
    analytics: ContentAnalytics
  };

  const Component = components[activeTab as keyof typeof components];

  return (
    <div className={`w-80 border-l ${theme.border} ${theme.bg} flex flex-col`}>
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
        <Component theme={theme} content={content} />
      </div>
    </div>
  );
};

export default RightSidebar;