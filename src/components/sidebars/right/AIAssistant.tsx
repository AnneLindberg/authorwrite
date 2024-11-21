import React, { useState } from 'react';
import { Send, Wand2, RefreshCw, Sparkles } from 'lucide-react';
import { Theme } from '../../../types';

interface AIAssistantProps {
  theme: Theme;
  content: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ theme }) => {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="p-4 flex flex-col h-full">
      <div className="flex-1 space-y-4 mb-4">
        <div className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className={`font-medium mb-2 ${theme.text}`}>Quick Actions</h3>
          <div className="space-y-2">
            {[
              { icon: Wand2, label: 'Continue Writing' },
              { icon: RefreshCw, label: 'Rephrase Selection' },
              { icon: Sparkles, label: 'Enhance Description' }
            ].map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  className={`w-full p-2 rounded-lg flex items-center gap-2 ${theme.hover} ${theme.text}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask the AI assistant..."
          className={`w-full p-3 pr-10 rounded-lg resize-none ${
            theme.isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-800'
          } focus:ring-2 focus:ring-blue-500 outline-none`}
          rows={3}
        />
        <button
          className={`absolute right-2 bottom-2 p-2 rounded-lg ${theme.hover}`}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;