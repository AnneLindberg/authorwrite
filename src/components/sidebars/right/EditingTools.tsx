import React from 'react';
import { Edit3, Check, AlertTriangle, Highlighter } from 'lucide-react';
import { Theme } from '../../../types';

interface EditingToolsProps {
  theme: Theme;
  content: string;
}

const EditingTools: React.FC<EditingToolsProps> = ({ theme, content }) => {
  // Simulated analysis results
  const analysis = {
    grammarIssues: 2,
    styleIssues: 1,
    readabilityScore: 85,
    suggestions: [
      { type: 'grammar', text: 'Consider revising this sentence structure' },
      { type: 'style', text: 'This word choice could be more impactful' }
    ]
  };

  return (
    <div className="p-4 space-y-4">
      <div className={`p-4 rounded-lg ${theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-medium ${theme.text}`}>Writing Analysis</h3>
          <button
            className={`p-2 rounded-lg ${theme.hover}`}
            title="Refresh Analysis"
          >
            <Edit3 className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className={`text-sm ${theme.text}`}>Readability Score</span>
            <span className={`font-medium ${
              analysis.readabilityScore > 80 ? 'text-green-500' : 'text-yellow-500'
            }`}>
              {analysis.readabilityScore}%
            </span>
          </div>

          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
            <div
              className="h-full rounded-full bg-green-500"
              style={{ width: `${analysis.readabilityScore}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {analysis.suggestions.map((suggestion, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              theme.isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
            } flex items-start gap-3`}
          >
            {suggestion.type === 'grammar' ? (
              <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
            ) : (
              <Highlighter className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={`text-sm ${theme.text}`}>{suggestion.text}</p>
              <button
                className={`mt-2 text-xs ${
                  theme.isDarkMode ? 'text-blue-400' : 'text-blue-600'
                } hover:underline`}
              >
                Apply Suggestion
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditingTools;