export const writingThemes = {
  modern: {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and minimal writing experience',
    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
    background: 'bg-gray-50 dark:bg-gray-900',
    textColor: 'text-gray-800 dark:text-gray-100',
    soundEffect: 'https://assets.mixkit.co/active_storage/sfx/2442/2442-preview.mp3',
    accentColor: 'blue'
  },
  typewriter: {
    id: 'typewriter',
    name: 'Typewriter',
    description: 'Classic typewriter experience',
    fontFamily: 'Courier Prime, monospace',
    background: 'bg-[#f4f1ea] dark:bg-[#2b2620]',
    textColor: 'text-[#2b2620] dark:text-[#f4f1ea]',
    soundEffect: 'https://assets.mixkit.co/active_storage/sfx/2440/2440-preview.mp3',
    ambientSound: 'https://assets.mixkit.co/active_storage/sfx/123/123-preview.mp3',
    accentColor: 'amber'
  },
  library: {
    id: 'library',
    name: 'Library',
    description: 'Cozy library atmosphere',
    fontFamily: 'Crimson Pro, serif',
    background: 'bg-[#fcf5e5] dark:bg-[#1a1412]',
    textColor: 'text-[#2d1810] dark:text-[#e8d5c4]',
    soundEffect: 'https://assets.mixkit.co/active_storage/sfx/2444/2444-preview.mp3',
    ambientSound: 'https://assets.mixkit.co/active_storage/sfx/124/124-preview.mp3',
    accentColor: 'emerald'
  }
} as const;