import React, {useContext} from 'react';
import Light from './day.png';
import s from '../src/pages/main/mainNav.module.css';

export const themes = {
    light: {
      color: '#000000',
      background: '#F5F5F5',
    },
    dark: {
      color: '#FFFFFF',
      background: '#1C1C1C',
    },
  };
  
  export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {
      <button className={s.menu__theme} onClick={toggleTheme}><img  src={Light} alt="Light Theme" /></button>
    },
  });
  
  
  export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
 
    if(!theme) return theme.dark;
  
   return theme;
  }