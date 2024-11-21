import React from 'react';
import { Sparkles, RefreshCw, Maximize2, MessageSquarePlus } from 'lucide-react';
import { Theme } from '../../types';

interface WritingToolsProps {
  theme: Theme;
}

const WritingTools: React.FC<WritingToolsProps> = ({ theme }) => {
  return (
    <div className="p-4 space-y-4">
      <button className={`w-full p-3 flex items-center gap-2 rounded-lg ${theme.hover} ${theme.text}`}>
        <Sparkles className="w-5 h-5" />
        <span>Generate Next Paragraph</span>
      </button>
      <button className={`w-full p-3 flex items-center gap-2 rounded-lg ${theme.hover} ${theme.text}`}>
        <RefreshCw className="w-5 h-5" />
        <span>Rewrite for Tone</span>
      </button>
      <button className={`w-full p-3 flex items-center gap-2 rounded-lg ${theme.hover} ${theme.text}`}>
        <Maximize2 className="w-5 h-5" />
        <span>Expand Description</span>
      </button>
      <button className={`w-full p-3 flex items-center gap-2 rounded-lg ${theme.hover} ${theme.text}`}>
        <MessageSquarePlus className="w-5 h-5" />
        <span>Add Dialogue</span>
      </button>
    </div>
  );
};

export default WritingTools;