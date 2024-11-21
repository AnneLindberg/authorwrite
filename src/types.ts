export interface Theme {
  isDarkMode: boolean;
  bg: string;
  text: string;
  border: string;
  hover: string;
}

export interface WritingTheme {
  id: string;
  name: string;
  description: string;
  fontFamily: string;
  background: string;
  textColor: string;
  soundEffect: string;
  ambientSound?: string;
  accentColor: string;
}