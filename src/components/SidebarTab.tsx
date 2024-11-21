import React from 'react';
import { Theme } from '../types';
import Navigation from './sidebar/Navigation';
import WritingTools from './sidebar/WritingTools';
import Research from './sidebar/Research';
import Characters from './sidebar/Characters';
import SceneCards from './sidebar/SceneCards';
import MindMap from './sidebar/MindMap';

interface SidebarTabProps {
  id: string;
  theme: Theme;
}

const SidebarTab: React.FC<SidebarTabProps> = ({ id, theme }) => {
  const components = {
    navigation: Navigation,
    writing: WritingTools,
    research: Research,
    characters: Characters,
    scenes: SceneCards,
    mindmap: MindMap
  };

  const Component = components[id as keyof typeof components];
  return <Component theme={theme} />;
};

export default SidebarTab;