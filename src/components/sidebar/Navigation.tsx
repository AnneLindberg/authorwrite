import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Plus, File, FolderPlus } from 'lucide-react';
import { Theme } from '../../types';

interface Chapter {
  id: string;
  title: string;
  scenes: Scene[];
  expanded?: boolean;
}

interface Scene {
  id: string;
  title: string;
  wordCount: number;
}

interface NavigationProps {
  theme: Theme;
}

const Navigation: React.FC<NavigationProps> = ({ theme }) => {
  const [chapters, setChapters] = useState<Chapter[]>([
    {
      id: '1',
      title: 'Chapter 1: The Beginning',
      expanded: true,
      scenes: [
        { id: '1-1', title: 'The Awakening', wordCount: 1250 },
        { id: '1-2', title: 'First Discovery', wordCount: 980 }
      ]
    },
    {
      id: '2',
      title: 'Chapter 2: The Journey',
      expanded: false,
      scenes: [
        { id: '2-1', title: 'Departure', wordCount: 1100 },
        { id: '2-2', title: 'The Road Ahead', wordCount: 1500 }
      ]
    }
  ]);

  const toggleChapter = (chapterId: string) => {
    setChapters(chapters.map(chapter =>
      chapter.id === chapterId
        ? { ...chapter, expanded: !chapter.expanded }
        : chapter
    ));
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <button
          className={`flex-1 p-2 rounded-lg ${theme.hover} ${theme.text} flex items-center justify-center gap-2`}
        >
          <FolderPlus className="w-4 h-4" />
          <span className="text-sm">New Chapter</span>
        </button>
        <button
          className={`flex-1 p-2 rounded-lg ${theme.hover} ${theme.text} flex items-center justify-center gap-2`}
        >
          <File className="w-4 h-4" />
          <span className="text-sm">New Scene</span>
        </button>
      </div>

      <div className="space-y-2">
        {chapters.map(chapter => (
          <div key={chapter.id} className="space-y-1">
            <button
              onClick={() => toggleChapter(chapter.id)}
              className={`w-full p-2 rounded-lg ${theme.hover} ${theme.text} flex items-center justify-between group`}
            >
              <div className="flex items-center gap-2">
                {chapter.expanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
                <span>{chapter.title}</span>
              </div>
              <Plus className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity`} />
            </button>
            
            {chapter.expanded && (
              <div className="ml-6 space-y-1">
                {chapter.scenes.map(scene => (
                  <button
                    key={scene.id}
                    className={`w-full p-2 rounded-lg ${theme.hover} ${
                      theme.isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    } flex items-center justify-between text-sm group`}
                  >
                    <div className="flex items-center gap-2">
                      <File className="w-4 h-4" />
                      <span>{scene.title}</span>
                    </div>
                    <span className="text-xs opacity-50">{scene.wordCount} words</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;