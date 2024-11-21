import React from 'react';
import { X, Shield, Bot, AlertTriangle } from 'lucide-react';
import { Theme } from '../types';

interface ContentAnalyticsProps {
  content: string;
  theme: Theme;
  onClose: () => void;
}

const ContentAnalytics: React.FC<ContentAnalyticsProps> = ({ content, theme, onClose }) => {
  // Simulated analytics (in a real app, these would come from actual analysis)
  const analytics = {
    aiContribution: 35, // percentage
    originalContent: 92, // percentage
    potentialMatches: 2,
    wordCount: content.split(/\s+/).length
  };

  const getAIColor = (percentage: number) => {
    if (percentage < 30) return 'text-green-500';
    if (percentage < 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getOriginalityColor = (percentage: number) => {
    if (percentage > 90) return 'text-green-500';
    if (percentage > 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className={`border-b ${theme.border} ${theme.bg} p-4`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className={`${theme.text} font-medium`}>Content Analysis</h3>
        <button
          onClick={onClose}
          className={`p-1 rounded-lg ${theme.hover}`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="flex items-center gap-2 mb-2">
            <Bot className="w-5 h-5" />
            <h4 className={`${theme.text} font-medium`}>AI Contribution</h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{ width: `${analytics.aiContribution}%` }}
              />
            </div>
            <span className={`${getAIColor(analytics.aiContribution)} font-medium`}>
              {analytics.aiContribution}%
            </span>
          </div>
        </div>

        <div className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5" />
            <h4 className={`${theme.text} font-medium`}>Original Content</h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
              <div
                className="h-full rounded-full bg-green-500"
                style={{ width: `${analytics.originalContent}%` }}
              />
            </div>
            <span className={`${getOriginalityColor(analytics.originalContent)} font-medium`}>
              {analytics.originalContent}%
            </span>
          </div>
        </div>
      </div>

      {analytics.potentialMatches > 0 && (
        <div className="mt-4 p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            <span className="text-yellow-800 dark:text-yellow-200 text-sm">
              Found {analytics.potentialMatches} potential content matches
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentAnalytics;