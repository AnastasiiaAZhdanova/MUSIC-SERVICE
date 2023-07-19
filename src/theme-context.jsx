import { useState } from "react";
import { ThemeContext, themes } from "./theme";
import {ThemeSwitcher} from '../src/theme-switcher';
import {Nav} from '../src/pages/main/mainNav'

export const ContextApp = () => {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
  
    const toggleTheme = () => {
      if (currentTheme === themes.dark) {
        setCurrentTheme(themes.light);
        return;
      }
  
      setCurrentTheme(themes.dark);
    };
  
    return (
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
          <ThemeSwitcher />
          <Nav />
      </ThemeContext.Provider>
    );
  };