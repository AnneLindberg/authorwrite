import React, { useState } from 'react';
import { UserPlus, Users2, Heart, Sword, Star } from 'lucide-react';
import { Theme } from '../../types';

interface Character {
  id: string;
  name: string;
  portrait: string;
  traits: string[];
  relationships: Array<{ with: string; type: 'ally' | 'rival' | 'neutral' }>;
}

interface CharactersProps {
  theme: Theme;
}

const Characters: React.FC<CharactersProps> = ({ theme }) => {
  const [characters] = useState<Character[]>([
    {
      id: '1',
      name: 'Elizabeth Hart',
      portrait: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      traits: ['Determined', 'Intelligent', 'Mysterious'],
      relationships: [{ with: '2', type: 'rival' }]
    },
    {
      id: '2',
      name: 'James Morgan',
      portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      traits: ['Charismatic', 'Ambitious', 'Complex'],
      relationships: [{ with: '1', type: 'rival' }]
    }
  ]);

  const getRelationshipIcon = (type: 'ally' | 'rival' | 'neutral') => {
    switch (type) {
      case 'ally':
        return <Heart className="w-4 h-4 text-green-500" />;
      case 'rival':
        return <Sword className="w-4 h-4 text-red-500" />;
      default:
        return <Star className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <div className="p-4 space-y-4">
      <button className={`w-full p-3 flex items-center gap-2 rounded-lg ${theme.hover} ${theme.text}`}>
        <UserPlus className="w-5 h-5" />
        <span>Create New Character</span>
      </button>

      <div className="grid grid-cols-2 gap-4">
        {characters.map((character) => (
          <div
            key={character.id}
            className={`p-4 rounded-lg ${
              theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            }`}
          >
            <img
              src={character.portrait}
              alt={character.name}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <h3 className={`font-medium mb-2 ${theme.text}`}>{character.name}</h3>
            <div className="flex flex-wrap gap-1 mb-3">
              {character.traits.map((trait, index) => (
                <span
                  key={index}
                  className={`text-xs px-2 py-1 rounded-full ${
                    theme.isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                  }`}
                >
                  {trait}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Users2 className="w-4 h-4" />
              {character.relationships.map((rel, index) => (
                <span key={index}>{getRelationshipIcon(rel.type)}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;