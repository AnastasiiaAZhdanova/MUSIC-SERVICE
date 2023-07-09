import SkeletonPlaylist from '../../SkeletonPlaylist';
import { useState } from 'react';
import { useEffect } from 'react';
import s from './mainSidebar.module.css';
import '../../example stratos font/Stratos-Medium.woff2';

function Sidebar() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const skeleton = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(skeleton);
  }, []);

  return (
    <div className={`${s.main__sidebar} ${s.sidebar}`}>
      <div className={s.sidebar__personal}>
        <p className={s.sidebar__personalName}>Sergey.Ivanov</p>
        <div className={s.sidebar__avatar} />
      </div>
      <div className={s.sidebar__block}>
        <div className={s.sidebar__list}>
          <div className={s.sidebar__item}>
            {isLoading ? (
              <SkeletonPlaylist />
            ) : (
              <a className={s.sidebar__link} href="#">
                <img
                  className={s.sidebar__img}
                  src="./img/playlist01.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
          <div className={s.sidebar__item}>
            {isLoading ? (
              <SkeletonPlaylist />
            ) : (
              <a className={s.sidebar__link} href="#">
                <img
                  className={s.sidebar__img}
                  src="./img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
          <div className={s.sidebar__item}>
            {isLoading ? (
              <SkeletonPlaylist />
            ) : (
              <a className={s.sidebar__link} href="#">
                <img
                  className={s.sidebar__img}
                  src="./img/playlist03.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
