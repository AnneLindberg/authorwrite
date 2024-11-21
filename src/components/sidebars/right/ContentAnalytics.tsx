import React from 'react';
import { Shield, Bot, AlertTriangle, Clock, BookOpen } from 'lucide-react';
import { Theme } from '../../../types';

interface ContentAnalyticsProps {
  theme: Theme;
  content: string;
}

const ContentAnalytics: React.FC<ContentAnalyticsProps> = ({ theme, content }) => {
  // Simulated analytics
  const analytics = {
    wordCount: content.split(/\s+/).length,
    readingTime: Math.ceil(content.split(/\s+/).length / 200), // Assuming 200 words per minute
    aiContribution: 15, // percentage
    originalContent: 95, // percentage
    potentialIssues: 1
  };

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4" />
            <span className={`text-sm font-medium ${theme.text}`}>Word Count</span>
          </div>
          <span className={`text-2xl font-bold ${theme.text}`}>{analytics.wordCount}</span>
        </div>

        <div className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4" />
            <span className={`text-sm font-medium ${theme.text}`}>Reading Time</span>
          </div>
          <span className={`text-2xl font-bold ${theme.text}`}>{analytics.readingTime} min</span>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className="flex items-center gap-2 mb-3">
          <Bot className="w-5 h-5" />
          <h3 className={`${theme.text} font-medium`}>AI Contribution</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${analytics.aiContribution}%` }}
            />
          </div>
          <span className={`font-medium ${
            analytics.aiContribution < 30 ? 'text-green-500' : 'text-yellow-500'
          }`}>
            {analytics.aiContribution}%
          </span>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5" />
          <h3 className={`${theme.text} font-medium`}>Content Originality</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
            <div
              className="h-full rounded-full bg-green-500"
              style={{ width: `${analytics.originalContent}%` }}
            />
          </div>
          <span className={`font-medium ${
            analytics.originalContent > 90 ? 'text-green-500' : 'text-yellow-500'
          }`}>
            {analytics.originalContent}%
          </span>
        </div>
      </div>

      {analytics.potentialIssues > 0 && (
        <div className={`p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900`}>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            <span className="text-yellow-800 dark:text-yellow-200">
              {analytics.potentialIssues} potential content issue detected
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentAnalytics;