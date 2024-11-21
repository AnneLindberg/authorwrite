import React, { useState } from 'react';
import { Search, Book, Link, Plus, ExternalLink } from 'lucide-react';
import { Theme } from '../../../types';

interface ResearchProps {
  theme: Theme;
  content: string;
}

const Research: React.FC<ResearchProps> = ({ theme }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const references = [
    {
      title: 'Historical Context',
      source: 'Wikipedia',
      url: 'https://wikipedia.org',
      excerpt: 'Brief historical overview of the time period...'
    },
    {
      title: 'Character Inspiration',
      source: 'Personal Notes',
      excerpt: 'Character development research and references...'
    }
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="relative">
        <Search className={`absolute left-3 top-3 w-5 h-5 ${
          theme.isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search research materials..."
          className={`w-full pl-10 pr-4 py-2 rounded-lg ${
            theme.isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-800'
          } focus:ring-2 focus:ring-blue-500 outline-none`}
        />
      </div>

      <button
        className={`w-full p-3 flex items-center justify-center gap-2 rounded-lg ${
          theme.isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
        } ${theme.text} transition-colors`}
      >
        <Plus className="w-4 h-4" />
        <span>Add Research Material</span>
      </button>

      <div className="space-y-3">
        {references.map((ref, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {ref.url ? <Link className="w-4 h-4" /> : <Book className="w-4 h-4" />}
                <h3 className={`font-medium ${theme.text}`}>{ref.title}</h3>
              </div>
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1 rounded-lg ${theme.hover}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className={`text-sm ${theme.isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {ref.excerpt}
            </p>
            <div className={`mt-2 text-xs ${theme.isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Source: {ref.source}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;