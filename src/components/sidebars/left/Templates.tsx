import React from 'react';
import { FileText, BookOpen, Users, Map } from 'lucide-react';
import { Theme } from '../../../types';

interface TemplatesProps {
  theme: Theme;
}

const Templates: React.FC<TemplatesProps> = ({ theme }) => {
  const templates = [
    {
      icon: BookOpen,
      title: 'Chapter Template',
      description: 'Standard chapter structure with scene placeholders'
    },
    {
      icon: Users,
      title: 'Character Profile',
      description: 'Detailed character development template'
    },
    {
      icon: Map,
      title: 'World Building',
      description: 'Template for creating rich, detailed settings'
    },
    {
      icon: FileText,
      title: 'Scene Template',
      description: 'Basic scene structure with prompts'
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {templates.map((template) => {
        const Icon = template.icon;
        return (
          <div
            key={template.title}
            className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} 
              hover:shadow-lg transition-shadow cursor-pointer`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg ${theme.isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-medium ${theme.text}`}>{template.title}</h3>
                <p className={`text-sm ${theme.isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {template.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Templates;