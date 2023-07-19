import Night from './night.png';
import s from '../src/pages/main/mainNav.module.css';
import { useThemeContext } from './theme';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useThemeContext();
  
  return (
    <button className={s.menu__theme} onClick={toggleTheme}><img  src={Night} alt="Night Theme" /></button>
  );
};
