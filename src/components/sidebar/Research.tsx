import React from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Theme } from '../../types';

interface ResearchProps {
  theme: Theme;
}

const Research: React.FC<ResearchProps> = ({ theme }) => {
  return (
    <div className="p-4">
      <div className={`mb-4 relative`}>
        <Search className={`absolute left-3 top-3 w-5 h-5 ${theme.isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        <input
          type="text"
          placeholder="Search your research..."
          className={`w-full pl-10 pr-4 py-2 rounded-lg ${
            theme.isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-800'
          } focus:ring-2 focus:ring-blue-500 outline-none`}
        />
      </div>
      <div className={`space-y-4 ${theme.text}`}>
        <div className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4" />
            <h3 className="font-medium">Historical References</h3>
          </div>
          <p className="text-sm">Your historical research and timeline notes...</p>
        </div>
      </div>
    </div>
  );
};

export default Research;