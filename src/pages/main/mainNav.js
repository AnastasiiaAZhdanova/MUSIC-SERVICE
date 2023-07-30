import { useState } from 'react';
import s from './mainNav.module.css';
import '../../example stratos font/Stratos-Medium.woff2';
import Night from '../../night.png';
import Light from '../../day.png';
import Logo from '../../logo.png';
import Logo2 from '../../logo2.png';
import { useTheme } from '../../use-theme';

function Nav() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className={`${s.main__nav} ${s.nav} `}>
      <div className={`${s.nav__logo} ${s.logo}`}>
        <img
          className={s.logo__image}
          src={theme === 'dark' ? Logo : Logo2}
          alt="logo"
        />
      </div>
      <div
        className={`${s.nav__burger} ${s.burger}`}
        onClick={toggleVisibility}
      >
        <span className={s.burger__line} />
        <span className={s.burger__line} />
        <span className={s.burger__line} />
      </div>
      {visible && (
        <div className={`${s.nav__menu} ${s.menu}`}>
          <ul className={s.menu__list}>
            <li className={s.menu__item}>
              <a href="http://" className={s.menu__link}>
                Главное
              </a>
            </li>
            <li className={s.menu__item}>
              <a href="http://" className={s.menu__link}>
                Мой плейлист
              </a>
            </li>
            <li className={s.menu__item}>
              <a href="http://" className={s.menu__link}>
                Войти
              </a>
            </li>
            <li>
              <button className={s.menu__theme} onClick={toggleTheme}>
                <img src={theme === 'dark' ? Night : Light} alt="theme" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// eslint-disable-next-line no-undef
export default Nav;
