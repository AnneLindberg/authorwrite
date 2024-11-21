import React, { useState } from 'react';
import { PlusSquare, LayoutGrid, Tag, MapPin } from 'lucide-react';
import { Theme } from '../../types';

interface Scene {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  location: string;
}

interface SceneCardsProps {
  theme: Theme;
}

const SceneCards: React.FC<SceneCardsProps> = ({ theme }) => {
  const [scenes, setScenes] = useState<Scene[]>([
    {
      id: '1',
      title: 'Opening Scene',
      summary: 'The protagonist discovers a mysterious letter...',
      tags: ['Mystery', 'Introduction'],
      location: 'Victorian Manor'
    }
  ]);

  const [draggedScene, setDraggedScene] = useState<string | null>(null);

  const handleDragStart = (sceneId: string) => {
    setDraggedScene(sceneId);
  };

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (draggedScene && draggedScene !== targetId) {
      const newScenes = [...scenes];
      const draggedIndex = scenes.findIndex(s => s.id === draggedScene);
      const targetIndex = scenes.findIndex(s => s.id === targetId);
      const [removed] = newScenes.splice(draggedIndex, 1);
      newScenes.splice(targetIndex, 0, removed);
      setScenes(newScenes);
    }
  };

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
            draggable
            onDragStart={() => handleDragStart(scene.id)}
            onDragOver={(e) => handleDragOver(e, scene.id)}
            className={`p-4 rounded-lg cursor-move ${
              theme.isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors`}
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