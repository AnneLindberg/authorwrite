import React, { useState } from 'react';
import { PlusSquare, LayoutGrid, Tag, MapPin } from 'lucide-react';
import { Theme } from '../../../types';

interface SceneCardsProps {
  theme: Theme;
}

const SceneCards: React.FC<SceneCardsProps> = ({ theme }) => {
  const [scenes] = useState([
    {
      id: '1',
      title: 'Opening Scene',
      summary: 'The protagonist discovers a mysterious letter...',
      tags: ['Mystery', 'Introduction'],
      location: 'Victorian Manor'
    }
  ]);

  return (
    <div className="p-4 space-y-4">
      <button className={`w-full p-3 flex items-center gap-2 rounded-lg ${theme.hover} ${theme.text}`}>
        <PlusSquare className="w-5 h-5" />
        <span>Add New Scene</span>
      </button>
      
      <div className="space-y-4">
        {scenes.map((scene) => (
          <div
            key={scene.id}
            className={`p-4 rounded-lg ${
              theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            } hover:shadow-lg transition-shadow`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className={`font-medium ${theme.text}`}>{scene.title}</h3>
              <LayoutGrid className="w-4 h-4" />
            </div>
            <p className={`text-sm mb-3 ${theme.isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {scene.summary}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Tag className="w-3 h-3" />
                <span className="text-xs">{scene.tags.join(', ')}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span className="text-xs">{scene.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SceneCards;