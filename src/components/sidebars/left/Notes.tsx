import React, { useState } from 'react';
import { Plus, Pin, Clock } from 'lucide-react';
import { Theme } from '../../../types';

interface NotesProps {
  theme: Theme;
}

const Notes: React.FC<NotesProps> = ({ theme }) => {
  const [notes] = useState([
    {
      id: '1',
      content: 'Remember to develop the antagonist\'s backstory further...',
      pinned: true,
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      content: 'Research Victorian era clothing for Chapter 3',
      pinned: false,
      timestamp: '1 day ago'
    }
  ]);

  return (
    <div className="p-4 space-y-4">
      <button className={`w-full p-3 flex items-center gap-2 rounded-lg ${theme.hover} ${theme.text}`}>
        <Plus className="w-5 h-5" />
        <span>Add Note</span>
      </button>

      <div className="space-y-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`p-4 rounded-lg ${
              theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            } relative group`}
          >
            {note.pinned && (
              <Pin className="absolute top-2 right-2 w-4 h-4 text-blue-500" />
            )}
            <p className={`text-sm mb-2 ${theme.text}`}>{note.content}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{note.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;