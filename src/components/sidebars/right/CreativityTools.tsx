import React from 'react';
import { Sparkles, Users, Map, Brain, Palette } from 'lucide-react';
import { Theme } from '../../../types';

interface CreativityToolsProps {
  theme: Theme;
  content: string;
}

const CreativityTools: React.FC<CreativityToolsProps> = ({ theme }) => {
  const tools = [
    {
      icon: Brain,
      title: 'Story Prompts',
      description: 'Get creative writing prompts'
    },
    {
      icon: Users,
      title: 'Character Development',
      description: 'Generate character backgrounds'
    },
    {
      icon: Map,
      title: 'World Building',
      description: 'Create rich settings and locations'
    },
    {
      icon: Palette,
      title: 'Scene Visualization',
      description: 'Describe scenes in detail'
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <div
            key={tool.title}
            className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg ${theme.isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-medium ${theme.text}`}>{tool.title}</h3>
                <p className={`text-sm ${theme.isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {tool.description}
                </p>
              </div>
            </div>
            <button
              className={`w-full mt-2 p-2 rounded-lg flex items-center justify-center gap-2 ${
                theme.isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'
              } transition-colors ${theme.text}`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Generate</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CreativityTools;